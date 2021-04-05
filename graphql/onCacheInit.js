export const onCacheInit = (cache) => {
  const data = {
    isAccountMenuOpen: false,
    login: null
  }
  cache.writeData({ data })
}
