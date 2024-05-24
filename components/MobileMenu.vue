<script setup lang="ts">
const { isMobileMenuShown } = storeToRefs(useGlobalStore())
</script>
<template>
  <div class="h-screen w-screen top-0 left-0 z-50 pt-8 pl-6 bg-[#1a1a1a] fixed transition lg:hidden"
    :class="isMobileMenuShown ? 'translate-x-0' : 'translate-x-[2000px]'">
    <div class="flex justify-between mb-24">
      <img src="/images/logo.svg" alt="">
      <button class="bg-orange p-1 rounded-l-[37px] pr-10 flex items-center" @click="isMobileMenuShown = false">
        <img src="/images/close.svg" alt="">
      </button>
    </div>
    <div>
      <TopNavigation class="mb-10" />
      <SocialButtons class="float-end pr-9" />
    </div>
  </div>
</template>

<style>
.mob-menu {
  filter: blur(43.900001525878906px);
}
</style>
