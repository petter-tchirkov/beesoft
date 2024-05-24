export const useGlobalStore = defineStore('global', () => {
  const isMobileMenuShown = ref(false)
  const isLoading = ref(true)

  return { isMobileMenuShown, isLoading }
})
