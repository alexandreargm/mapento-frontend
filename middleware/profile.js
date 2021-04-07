import gql from 'graphql-tag'
// import { GetProfile } from '~/graphql/user/mutations'
import { UserQuery } from '~/graphql/user/queries'

export default async function ({ app }) {
  // Get apollo client
  const apolloClient = app.apolloProvider.defaultClient
  // Query user using cookie
  const userId = app.$cookies.get('__mapento_user_id')
  try {
    const user = await apolloClient.query({
      query: UserQuery,
      variables: {
        id: userId
      }
    }).then(({ data: { user } }) => user)
    console.log('UserData', user)
  } catch (e) {
    console.error(e)
  }

  try {
    await apolloClient.mutate({
      mutation: gql`
        mutation setLocalProfile {
          setLocalProfile (id: $id) @client
        }
      `,
      variables: {
        id: userId
      },
      update: (cache, { data: { setLocalProfile } }) => {
        console.log('UpdateData', setLocalProfile)
        // const data = {
        //   profile: setLocalProfile
        // }
        // cache.writeData({ data })
      }
    })
  } catch (e) {
    console.error(e)
  }

  // try {
  //   const profile = await apolloClient.mutate({
  //     mutation: gql`
  //       mutation getLocalUser ($id: ID!) {
  //         getLocalUser (id: $id) @client
  //       }
  //     `,
  //     variables: {
  //       id: userId
  //     }
  //     // update: (cache, { data: { user } }) => {
  //     //   const data = {
  //     //     profile: user
  //     //   }
  //     //   cache.writeData({ data })
  //     // }
  //   }).then(({ data: { profile } }) => profile)
  //   console.log('ProfileData', profile)
  // } catch (e) {
  //   console.error(e)
  // }

  // write user details on local state
}
