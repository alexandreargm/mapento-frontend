import gql from 'graphql-tag'

export const UserQuery = gql`
  query UserQuery($id: ID) {
    user (id: $id) {
      id
      name
      email
    }
  }
`
