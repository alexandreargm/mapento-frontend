import { MeQuery } from '~/graphql/user/queries'
import { setIsAuthenticatedMutation } from '~/graphql/user/localMutations'

export default async function ({ app, route, redirect }) {
  const apolloClient = app.apolloProvider.defaultClient
  const allowedUrls = ['/login', '/register', '/password']
  const cookiesToRemove = []
  const authenticatedUser = await queryAuthenticatedUser()

  // Handle unauthenticated users
  if (!authenticatedUser && !isAllowedRoute(route, allowedUrls)) {
    setIsAuthenticated(false)
    clearCookies(app, cookiesToRemove)
    return redirect('/login')
  }

  // Handle logged users
  if (authenticatedUser) {
    setIsAuthenticated(true)
  }

  function queryAuthenticatedUser () {
    try {
      const res = apolloClient.query({
        query: MeQuery
      }).then(({ data: { me } }) => me)
      return res
    } catch (e) {
      console.error(e)
    }
  }

  function setIsAuthenticated (value) {
    apolloClient.mutate({
      mutation: setIsAuthenticatedMutation,
      variables: { value }
    })
  }

  function isAllowedRoute (route, allowedUrls) {
    return route && allowedUrls.includes(route.fullPath)
  }

  function clearCookies (app, cookies) {
    cookies.forEach((cookie) => {
      app.$cookies.remove(cookie)
    })
  }
}
