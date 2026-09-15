/* =========================================================
   FORJ3D — "Quem somos": visualizador 3D com giro por arraste
   Sem efeito de raio-x — só o modelo colorido, girando quando
   o visitante arrasta o mouse/dedo sobre o canvas.
   Vanilla JS + Three.js (via importmap, sem build/bundler).
   ========================================================= */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
 
(function () {
  const container = document.getElementById('spiderFluid');
  const canvas = document.getElementById('spiderFluidCanvas');
  const hint = document.getElementById('spiderHint');
  if (!container || !canvas) return;
 
  let started = false;
 
  function init() {
    if (started) return;
    started = true;
 
    // Troque aqui pelo caminho do seu próprio modelo quando quiser.
    const MODEL_PATH = 'GLB/spiderman-colored.glb';
 
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
 
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://unpkg.com/three@0.160.0/examples/jsm/libs/draco/');
    loader.setDRACOLoader(dracoLoader);
 
    loader.loadAsync(MODEL_PATH).then((gltf) => {
      const model = gltf.scene;
 
      model.rotation.x = Math.PI / 2;
      model.updateMatrixWorld(true);
 
      normalize(model);

      model.traverse((child) => {
        if (!child.isMesh) return;
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((mat) => {
          if ('roughness' in mat) mat.roughness = 0.55;
        });
      });
 
      modelGroup.add(model);
    }).catch((err) => {
      console.error('[spider-fluid] falha ao carregar o modelo 3D:', err);
    });
 
    // ---------- arrastar para girar (livre, todos os ângulos) ----------
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    const DRAG_SENSITIVITY = 0.0085;
    // velocidade do retorno suave à posição original (0 = parado, 1 = instantâneo)
    const RETURN_SPEED = 0.06;

    function hideHint() {
      hint?.classList.add('spider-hint-hidden');
    }
 
    container.addEventListener('pointerdown', (e) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      container.setPointerCapture(e.pointerId);
      hideHint();
    });
 
    container.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      // rotação livre: arrastar de um lado pro outro gira em Y (horizontal),
      // arrastar pra cima/baixo gira em X (vertical) — sem limite de ângulo.
      modelGroup.rotation.y += deltaX * DRAG_SENSITIVITY;
      modelGroup.rotation.x += deltaY * DRAG_SENSITIVITY;
    });
 
    function endDrag() {
      isDragging = false;
    }
 
    container.addEventListener('pointerup', endDrag);
    container.addEventListener('pointercancel', endDrag);
    container.addEventListener('pointerleave', () => {
      if (!isDragging) return;
      endDrag();
    });
 
    // ---------- loop ----------
    function animate() {
      requestAnimationFrame(animate);
 
      if (!isDragging) {
        // volta suavemente para a posição original (de frente), sempre
        // pelo caminho mais curto, mesmo depois de várias voltas completas
        modelGroup.rotation.y = normalizeAngle(modelGroup.rotation.y);
        modelGroup.rotation.x = normalizeAngle(modelGroup.rotation.x);
        modelGroup.rotation.y += (0 - modelGroup.rotation.y) * RETURN_SPEED;
        modelGroup.rotation.x += (0 - modelGroup.rotation.x) * RETURN_SPEED;
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
  } // fim de init()
 
  // ---------- carregamento sob demanda ----------
  // só inicializa o Three.js e baixa o .glb quando a seção "quem somos"
  // estiver perto de entrar na tela.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            init();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '400px 0px' }
    );
    observer.observe(container);
  } else {
    init();
  }
})();