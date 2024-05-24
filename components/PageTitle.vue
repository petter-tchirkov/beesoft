<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>
<template>
  <div class="relative">
    <h1 class="text-sequel-normal text-center text-[40px] text-[#4a4a4a] lg:text-[65px]">{{ title }}</h1>
    <span
      class="absolute top-6 left-10 text-white text-sequel-normal tracking-[1.89em] text-[6px] lg:text-xs lg:top-9 lg:left-[30%] uppercase">Development
      company</span>
  </div>
</template>

<style scoped></style>
