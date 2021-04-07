export const onCacheInit = (cache) => {
  const data = {
    isAccountMenuOpen: false,
    profile: null
  }
  cache.writeData({ data })
}
