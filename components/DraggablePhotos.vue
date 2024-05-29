<template>
  <img src="/images/advantages/2.png" class="max-w-[428px] w-full" alt="">
</template>

<script setup lang="ts">
import { ref } from 'vue';

const range = 500;
const rotationRange = 45;

const pictures = ref([
  { src: '/images/advantages/1.png', alt: '', note: 'Autumn', randomX: Math.round(Math.random() * range), randomY: Math.round(Math.random() * range), randomRotation: Math.round(Math.random() * rotationRange) },
  { src: '/images/advantages/1.png', alt: '', note: 'Coffee', randomX: Math.round(Math.random() * range), randomY: Math.round(Math.random() * range), randomRotation: Math.round(Math.random() * rotationRange) },
  { src: '/images/advantages/1.png', alt: '', note: 'An Irish cow enjoying the wind on the beach', randomX: Math.round(Math.random() * range), randomY: Math.round(Math.random() * range), randomRotation: Math.round(Math.random() * rotationRange) },
  { src: '/images/advantages/1.png', alt: '', note: 'pelicans at the water\'s edge', randomX: Math.round(Math.random() * range), randomY: Math.round(Math.random() * range), randomRotation: Math.round(Math.random() * rotationRange) },
  { src: '/images/advantages/1.png', alt: '', note: 'Waterfall', randomX: Math.round(Math.random() * range), randomY: Math.round(Math.random() * range), randomRotation: Math.round(Math.random() * rotationRange) },
]);
</script>

<style scoped></style>