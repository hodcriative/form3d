/* =========================================================
   FORJ3D — Banner do hero
   Modelo colorido por cima + modelo "base" branco por baixo.
   Onde o mouse passa em cima da peça (raycasting real sobre
   a malha 3D), um "buraco" no material colorido revela a
   base branca embaixo, exatamente naquele ponto da superfície.
   Vanilla JS + Three.js (via importmap, sem build/bundler).
   ========================================================= */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

(function () {
  const container = document.getElementById('heroFluid');
  const canvas = document.getElementById('heroFluidCanvas');
  if (!container || !canvas) return;

  function start() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Troque aqui pelos caminhos dos seus próprios modelos quando quiser.
  const MODEL_COLORED_PATH = 'GLB/hero-model-colored.glb';
  const MODEL_WHITE_PATH = 'GLB/hero-model-white.glb';

  const REVEAL_RADIUS = 0.55;  // "tamanho" da área revelada (unidades locais, já normalizadas)
  const REVEAL_EDGE = 0.12;    // reservado p/ suavizar a borda no futuro, se quiser evoluir o efeito

  let width = container.clientWidth || 1;
  let height = container.clientHeight || 1;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
  camera.position.set(0, 0.15, 4.2);
  camera.lookAt(0, 0, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 1.6));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
  keyLight.position.set(3, 4, 5);
  scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight(0xff6a3d, 1.0);
  rimLight.position.set(-4, 2, -3);
  scene.add(rimLight);
  // Luz direcional presa na própria câmera: como não depende de distância
  // (diferente de um PointLight), ilumina de forma consistente o lado do
  // modelo virado pra tela, não importa como o modelo esteja rotacionado.
  const headLight = new THREE.DirectionalLight(0xffffff, 1.4);
  headLight.position.set(0, 0, 0);
  camera.add(headLight);
  const headLightTarget = new THREE.Object3D();
  headLightTarget.position.set(0, 0, -1);
  camera.add(headLightTarget);
  headLight.target = headLightTarget;
  scene.add(camera);

  const modelGroup = new THREE.Group();
  scene.add(modelGroup);

  // Normaliza escala/posição de um objeto carregado para caber num tamanho padrão,
  // usando sua PRÓPRIA caixa delimitadora — assim os dois modelos (colorido e
  // branco) ficam do mesmo tamanho e centralizados, mesmo vindo de exports distintos.
  function normalize(object) {
    const box = new THREE.Box3().setFromObject(object);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    const scale = 2.1 / maxAxis;
    object.scale.setScalar(scale);
    object.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
  }

  // Injeta no material colorido a lógica de "buraco" (discard) ao redor de um
  // ponto — feito via onBeforeCompile, sem precisar de ShaderMaterial customizado
  // (mantém toda a iluminação/textura padrão do material original).
  // A comparação é feita em ESPAÇO DE MUNDO (não no espaço local cru da malha):
  // cada malha de um modelo pode ter uma escala interna bem diferente das outras
  // (ex.: um nó já "reduz" uma malha modelada em 100+ unidades para caber na
  // cena), então comparar distância em espaço local dava um raio efetivamente
  // errado dependendo da malha. Em espaço de mundo o raio sempre tem o mesmo
  // significado, não importa a escala interna de cada parte do modelo.
  function addRevealHole(material) {
    const uniforms = {
      uHoverPoint: { value: new THREE.Vector3(9999, 9999, 9999) },
      uHoverRadius: { value: 0 }
    };

    material.onBeforeCompile = (shader) => {
      shader.uniforms.uHoverPoint = uniforms.uHoverPoint;
      shader.uniforms.uHoverRadius = uniforms.uHoverRadius;

      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vRevealWorldPos;')
        .replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\nvRevealWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;'
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\nuniform vec3 uHoverPoint;\nuniform float uHoverRadius;\nvarying vec3 vRevealWorldPos;'
        )
        .replace(
          '#include <dithering_fragment>',
          `
          float revealDist = length(vRevealWorldPos - uHoverPoint);
          if (revealDist < uHoverRadius) discard;
          #include <dithering_fragment>
          `
        );
    };

    material.needsUpdate = true;
    material.userData.revealUniforms = uniforms;
  }

  let coloredModel = null;
  const revealMaterials = [];

  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://unpkg.com/three@0.160.0/examples/jsm/libs/draco/');
  loader.setDRACOLoader(dracoLoader);

  Promise.all([
    loader.loadAsync(MODEL_COLORED_PATH),
    loader.loadAsync(MODEL_WHITE_PATH)
  ]).then(([coloredGltf, whiteGltf]) => {
    coloredModel = coloredGltf.scene;
    const whiteModel = whiteGltf.scene;

    normalize(coloredModel);
    normalize(whiteModel);

    // A base branca fica sempre atrás — só aparece onde o colorido tiver "buraco".
    whiteModel.traverse((child) => {
      if (child.isMesh) child.renderOrder = 0;
    });
    coloredModel.traverse((child) => {
      if (child.isMesh) {
        child.renderOrder = 1;
        const isArray = Array.isArray(child.material);
        const materials = isArray ? child.material : [child.material];
        // Clona o material por malha: várias partes do modelo costumam
        // compartilhar o MESMO material (ex.: braço e perna com a mesma
        // "pele") — clonar garante que cada uma tenha seu próprio uniform,
        // embora agora (espaço de mundo) todas comparem contra o mesmo ponto.
        const ownMaterials = materials.map((mat) => {
          const cloned = mat.clone();
          addRevealHole(cloned);
          revealMaterials.push(cloned);
          return cloned;
        });
        child.material = isArray ? ownMaterials : ownMaterials[0];
      }
    });

    modelGroup.add(whiteModel);
    modelGroup.add(coloredModel);
  }).catch((err) => {
    console.error('[hero-fluid] falha ao carregar os modelos 3D:', err);
  });

  // ---------- raycasting: onde o mouse "toca" a peça ----------
  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2(9999, 9999);
  let hovering = false;
  let currentRadius = 0;
  const targetHoverWorld = new THREE.Vector3();

  function updatePointerFromEvent(clientX, clientY) {
    const rect = container.getBoundingClientRect();
    pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  }

  container.addEventListener('pointermove', (e) => {
    updatePointerFromEvent(e.clientX, e.clientY);
    hovering = true;
  });
  container.addEventListener('pointerdown', (e) => {
    updatePointerFromEvent(e.clientX, e.clientY);
    hovering = true;
  });
  container.addEventListener('pointerleave', () => {
    hovering = false;
  });
  // no toque, 'pointerleave' não é confiável (não existe "hover" persistente) —
  // soltamos a revelação também quando o dedo sai da tela ou o gesto é cancelado.
  container.addEventListener('pointerup', () => {
    hovering = false;
  });
  container.addEventListener('pointercancel', () => {
    hovering = false;
  });

  function raycastHover() {
    if (!hovering || !coloredModel) return null;
    raycaster.setFromCamera(pointerNdc, camera);
    const hits = raycaster.intersectObject(coloredModel, true);
    return hits.length ? hits[0].point : null;
  }

  // ---------- loop ----------
  function animate() {
    requestAnimationFrame(animate);

    // giro suave e contínuo, só pra peça não ficar estática (funciona também sem mouse)
    if (!prefersReduced) {
      modelGroup.rotation.y += 0.0035;
    }
    modelGroup.updateMatrixWorld(true); // matrizes em dia antes do raycast/worldToLocal deste frame

    const hit = raycastHover();
    const targetRadius = hit ? REVEAL_RADIUS : 0;
    currentRadius += (targetRadius - currentRadius) * 0.18;

    if (hit) targetHoverWorld.copy(hit);

    if (revealMaterials.length) {
      for (const mat of revealMaterials) {
        const u = mat.userData.revealUniforms;
        if (!u) continue;
        u.uHoverRadius.value = currentRadius;
        if (currentRadius > 0.001) {
          u.uHoverPoint.value.copy(targetHoverWorld);
        }
      }
    }

    renderer.render(scene, camera);
  }

  animate();

  // ---------- resize ----------
  function handleResize() {
    width = container.clientWidth;
    height = container.clientHeight;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  window.addEventListener('resize', handleResize);
  if (window.ResizeObserver) {
    new ResizeObserver(handleResize).observe(container);
  }
  } // fim de start()

  // ---------- gate de cookies ----------
  // só baixa os modelos 3D (arquivos pesados) depois que o visitante
  // aceitar o banner de cookies.
  if (window.forj3dHasConsent && window.forj3dHasConsent()) {
    start();
  } else {
    container.classList.add('media-gated');
    document.addEventListener('forj3d:consent-accepted', () => {
      container.classList.remove('media-gated');
      start();
    }, { once: true });
  }
})();
