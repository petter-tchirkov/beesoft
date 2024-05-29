<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>
<template>
  <div class="relative">
    <h1 class="text-sequel-normal text-center text-[40px] text-[#4A4A4A] font-bold lg:text-[65px]">{{ title }}</h1>
    <span
      class="absolute top-6 left-[20%] text-white text-sequel-normal tracking-[1.89em] text-[6px] lg:text-xs lg:top-9 lg:left-[34%] uppercase">Development
      company</span>
  </div>
</template>

<style scoped></style>
