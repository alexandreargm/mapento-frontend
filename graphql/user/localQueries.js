import gql from 'graphql-tag'

export const isAuthenticatedQuery = gql`
  query isAuthenticated {
    isAuthenticated @client
  }
`
