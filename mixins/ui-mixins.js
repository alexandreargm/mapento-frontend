/**
 * Allows to check if a name is in the $route path. Usually used for nuxt-links that don't trigger their active classes.
 * @returns Boolean
 */
export const isActiveLink = {
  methods: {
    isActiveLink (nameInPath) {
      const currentPathNames = this.$route.fullPath.split('/')
      const currentPathNamesClean = currentPathNames.filter((name) => { return name !== '' })
      return currentPathNamesClean.includes(nameInPath)
    }
  }
}
