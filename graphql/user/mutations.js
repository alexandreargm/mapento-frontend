import gql from 'graphql-tag'

export const LoginMutation = gql`
  mutation LoginMutation($email:String!,$password:String!){
    login(input: {
      username: $email,
      password: $password
    }) {
      access_token
      refresh_token
      expires_in
      token_type
      user {
        id
        email
        name
      }
    }
  }
`
