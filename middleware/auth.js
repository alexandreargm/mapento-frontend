import { setIsAuthenticatedMutation } from '~/graphql/user/localMutations'

export default function ({ app, route, redirect }) {
  const hasToken = !!app.$apolloHelpers.getToken()
  const apolloClient = app.apolloProvider.defaultClient
  const allowedUrls = ['/login', '/register', '/password']
  const cookiesToRemove = []

  // Handle unauthenticated users
  if (!hasToken && !isAllowedRoute(route, allowedUrls)) {
    setIsAuthenticated(false)
    clearCookies(app, cookiesToRemove)
    return redirect('/login')
  }

  // Handle logged users
  if (hasToken) {
    setIsAuthenticated(true)
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
