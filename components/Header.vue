<script setup lang="ts">

const { isMobileMenuShown } = storeToRefs(useGlobalStore())
</script>

<template>
  <header class="fixed w-full z-10 py-9">
    <div class="flex justify-between pl-6 mb-8 cnr">
      <img src="/images/logo.svg" alt="">
      <button @click="isMobileMenuShown = !isMobileMenuShown"
        class="bg-orange rounded-l-[36px] px-3 text-sequel text-gray text-xs lg:hidden">MENU</button>
      <div class="hidden lg:flex items-center gap-12">
        <LanguageSwitcher />
        <SocialButtons class="hidden lg:flex" />
      </div>
    </div>
    <div class="orange-gradient w-64 lg:w-1/2 h-[1px] rotate-180 hidden lg:block"></div>
    <div class="flex justify-between items-center gap-4 pr-6 mb-9 lg:hidden">
      <div class="orange-gradient w-64 lg:w-1/2 h-[1px] rotate-180"></div>
      <SocialButtons />
    </div>
    <TopNavigation class="hidden lg:flex justify-center my-9" />
    <div class="orange-gradient hidden lg:block w-64 lg:w-1/2 h-[1px] float-end"></div>
  </header>
</template>
