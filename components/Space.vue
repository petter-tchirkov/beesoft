<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'
import { Box3, Vector3, PerspectiveCamera, Points, ShaderMaterial, Color } from 'three'
import { EffectComposer, Bloom } from '@tresjs/post-processing'

const { scene: model, nodes } = await useGLTF('/scene.gltf')
const { onLoop } = useRenderLoop()
// Create a new material
const material = new ShaderMaterial({
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color;

    void main() {
      vec3 c = color * 1.2; // Increase this value to make the bloom stronger
      gl_FragColor = vec4(c, 1.0);
    }
  `,
  uniforms: {
    color: { value: new Color(0xffffff) },
  },
})
// Apply the material to all points in the model
model.traverse((object: Points) => {
  if (object.isPoints) {
    object.material = material
  }
})

// Create a bounding box for the model
let box = new Box3().setFromObject(model)


// Create a vector to hold the center of the bounding box
let center = new Vector3()

// Get the center of the bounding box
box.getCenter(center)

// Move the model to the center of the canvas
model.position.sub(center)

// Scale the model to make it appear closer to the camera
model.scale.set(3, 3, 3) // Increase the scale factors to make the model larger

// Recalculate the bounding box after scaling
box = new Box3().setFromObject(model)

// Recalculate the center of the bounding box
box.getCenter(center)


// Move the model to the center of the canvas again
model.position.sub(center)

// Create a new perspective camera
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

// Set the initial position of the camera
camera.position.z = 5

onLoop(() => {
    // Update the rotation of the model
    if (model) {
      model.position.add(center)

      model.rotation.y += 0.00006

      model.position.sub(center)

    }
})
</script>

<template>
  <Suspense>
    <TresCanvas window-size class="-z-10 absolute top-0 left-0" backgroundColor="#191819">
      <TresPerspectiveCamera :camera="camera" visible />
      <Suspense>
        <primitive :object="model" />
      </Suspense>
      <EffectComposer>
        <Bloom />
      </EffectComposer>
      <!-- <TresGridHelper /> -->
    </TresCanvas>
  </Suspense>
</template>