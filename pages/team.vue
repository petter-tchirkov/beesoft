<script setup lang="ts">


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
    <Team />
    <MobileMenu />
    <div class="flex flex-col lg:flex-row px-8 lg:px-0 gap-12 lg:gap-0 justify-between max-w-[1100px] w-full mx-auto">
      <Details />
      <Advantages />
    </div>
    <SocialButtons class="fixed bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex" />
  </div>
</template>
