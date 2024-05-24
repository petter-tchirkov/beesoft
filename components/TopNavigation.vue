<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll({ behavior: 'smooth' })

</script>
<template>
  <ul class="text-sequel text-gray flex flex-col items-end lg:items-start lg:flex-row gap-4 uppercase">
    <li @click="y = 1000">{{ $t('nav.aboutUs') }}</li>
    <li>{{ $t('nav.services') }}</li>
    <li>{{ $t('nav.team') }}</li>
    <li>{{ $t('nav.portfolio') }}</li>
    <li>{{ $t('nav.feedback') }}</li>
    <li>{{ $t('nav.contactUs') }}</li>
  </ul>
</template>

<style>
li {
  border-right: 1px solid #FF2E00;
  padding-right: 16px;
}

@media screen and (max-width: 1024px) {
  li {
    padding-bottom: 8px;
    padding-right: 36px;
    text-align: right;
    border-right: none;
    border-bottom: 1px solid #D1D1D1;
    width: 245px;
  }
}
</style>
