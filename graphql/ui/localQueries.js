import gql from 'graphql-tag'

export const isAccountMenuOpenQuery = gql`
  query isAccountMenuOpen {
    isAccountMenuOpen @client
  }
`
