<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll({ behavior: 'smooth' })
</script>

<template>
  <div class="min-h-screen relative flex flex-col cont">
    <Suspense>
      <Space />
      <template #fallback>
        <PreLoader />
      </template>
    </Suspense>
    <Header />
    <Main />
    <MobileMenu />
    <SocialButtons class="fixed bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex" />
    <ConnectUs :class="{ 'opacity-0 transition-opacity duration-500': y > 500 }" />
  </div>
</template>

<style scoped>
.cont {
  overflow-y: scroll;
  height: 100vh;
}
</style>
