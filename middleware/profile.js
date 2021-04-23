import { MeQuery } from '~/graphql/user/queries'

export default function ({ app }) {
  // Get apollo client
  const apolloClient = app.apolloProvider.defaultClient

  queryAuthenticatedUser()

  async function queryAuthenticatedUser () {
    try {
      await apolloClient.query({
        query: MeQuery
      })
    } catch (e) {
      console.error(e)
    }
  }
}
