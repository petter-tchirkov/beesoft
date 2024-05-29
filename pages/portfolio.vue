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
    <Cases />
    <MobileMenu />
    <SocialButtons class="fixed bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex" />
  </div>
</template>
