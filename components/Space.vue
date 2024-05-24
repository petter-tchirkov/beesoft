<template>
  <div ref="mountPoint" class="fixed top-0 left-0 -z-10 w-screen h-screen"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { MeshBasicMaterial } from 'three';

const mountPoint = ref<HTMLElement | null>(null);
let renderer: THREE.WebGLRenderer;
let camera: THREE.PerspectiveCamera;

onMounted(async () => {
  const scene = new THREE.Scene();
  const bloomScene = new THREE.Scene();



  scene.background = new THREE.Color('#191819');

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  if (mountPoint.value) {
    mountPoint.value.appendChild(renderer.domElement);
  }

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  const material = new THREE.ShaderMaterial({
    vertexShader: `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;

      void main() {
        vec3 c = color * 1.2;
        gl_FragColor = vec4(c, 1.0);
      }
    `,
    uniforms: {
      color: { value: new THREE.Color('#C4D4E6') },
    },
  });

  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync('/scene.gltf');
  const model = gltf.scene;
  const bloomModel = model.clone();
  model.scale.set(100, 100, 100);

  scene.add(model);
  bloomScene.add(bloomModel);

  const bloomRenderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
  renderer.setRenderTarget(bloomRenderTarget);
  renderer.render(bloomScene, camera);


  model.traverse((object) => {

    if (object instanceof THREE.Points) {
      object.material = material;
    }
  });

  const bloomMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color('#c4d4e6') },
    },
    vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform vec3 color;

    void main() {
      vec3 c = color * 1.2; // Increase this value to make the bloom effect stronger
      gl_FragColor = vec4(c, 1.0);
    }
  `,
  });
  bloomMaterial.colorWrite = false;

  bloomModel.traverse((object) => {

    if (object instanceof THREE.Mesh) {
      object.material = bloomMaterial;
    }
  });

  let box = new THREE.Box3().setFromObject(model);
  let center = new THREE.Vector3();
  box.getCenter(center);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 0.4, 0.85);
  bloomPass.renderToScreen = true;

  composer.addPass(bloomPass);
  composer.render();




  camera.position.x = center.x;
  camera.position.y = center.y + Math.max(box.getSize(new THREE.Vector3()).length() * 0.15, 1);
  camera.position.z = center.z + Math.max(box.getSize(new THREE.Vector3()).length() * 0.15, 1);
  camera.lookAt(center);


  function animate() {
    requestAnimationFrame(animate);
    model.rotation.y += 0.00009;
    composer.render();
  }

  animate();
});

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
});
</script>