<script setup lang="ts">
const { locales, setLocale, locale } = useI18n()

</script>

<template>
  <div class="flex gap-4">
    <p class="uppercase font-bold text-sequel-normal text-xs cursor-pointer" v-for="l in locales"
      :class="l.code === locale ? 'text-gray' : 'text-orange'" @click="setLocale(l.code)">
      {{ l.code }}
    </p>
  </div>
</template>
