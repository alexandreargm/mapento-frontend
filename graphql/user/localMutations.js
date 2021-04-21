import gql from 'graphql-tag'

export const setIsAuthenticatedMutation = gql`
  mutation setIsAuthenticated($value: Boolean!) {
    setIsAuthenticated(value: $value) @client
  }
`
