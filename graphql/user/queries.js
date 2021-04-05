import gql from 'graphql-tag'

export const LoginQuery = gql`
  query LoginQuery {
    login @client {
      access_token
      refresh_token
      expires_in
      token_type
      user {
        id
        name
        email
      }
    }
  }
`
// remove
// export const ProfileQuery = gql`
//   query ProfileQuery {
//     profile @client {
//       id
//       email
//       name
//     }
//   }
// `
