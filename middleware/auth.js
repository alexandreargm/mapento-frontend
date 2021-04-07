export default ({ app, redirect }) => {
  const hasToken = !!app.$apolloHelpers.getToken()
  if (!hasToken) {
    app.$cookies.remove('__mapento_user_id')
    return redirect('/login')
  }
}
