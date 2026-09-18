import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

(function () {
  const container = document.getElementById('heroFluid');
  const canvas = document.getElementById('heroFluidCanvas');
  if (!container || !canvas) return;

  function start() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const MODEL_PATH = 'GLB/patolino_certo.glb';

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

    loader.loadAsync(MODEL_PATH).then((gltf) => {
      const model = gltf.scene;
      model.rotation.x = -Math.PI / 2;
      model.updateMatrixWorld(true);
      normalize(model);
      modelGroup.add(model);
    }).catch((err) => {
      console.error('[hero-fluid] falha ao carregar o modelo 3D:', err);
    });

    function animate() {
      requestAnimationFrame(animate);
      if (!prefersReduced) {
        modelGroup.rotation.y += 0.0035;
      }
      renderer.render(scene, camera);
    }

    animate();

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
  }

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
