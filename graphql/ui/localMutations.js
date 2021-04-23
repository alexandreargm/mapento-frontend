import gql from 'graphql-tag'

export const toggleAccountMenuMutation = gql`
  mutation toggleAccountMenu {
    toggleAccountMenu @client
  }
`
