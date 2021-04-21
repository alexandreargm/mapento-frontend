export const onCacheInit = (cache) => {
  const data = {
    isAccountMenuOpen: false,
    isAuthenticated: false
  }
  cache.writeData({ data })
}
