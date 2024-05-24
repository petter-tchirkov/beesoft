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
  </div>
</template>
