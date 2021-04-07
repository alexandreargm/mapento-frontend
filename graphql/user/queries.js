import gql from 'graphql-tag'

export const ProfileQuery = gql`
  query ProfileQuery {
    profile @client {
      id
      name
      email
    }
  }
`

export const UserQuery = gql`
  query UserQuery($id: ID) {
    user (id: $id) {
      id
      name
      email
    }
  }
`
