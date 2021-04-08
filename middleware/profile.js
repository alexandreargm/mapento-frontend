import { UserQuery } from '~/graphql/user/queries'

export default async function ({ app }) {
  // Get apollo client
  const apolloClient = app.apolloProvider.defaultClient

  // Get user id
  const userId = app.$cookies.get('__mapento_user_id')

  try {
    // Query user
    await apolloClient.query({
      query: UserQuery,
      variables: {
        id: userId
      }
    })
  } catch (e) {
    console.error(e)
  }
}
