// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@vueuse/nuxt',
    '@tresjs/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    "@nuxtjs/i18n",
    'nuxt-swiper'
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ua', iso: 'uk-UA', file: 'ua.json', name: 'Українська' }
    ]
  },

})
