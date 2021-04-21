import gql from 'graphql-tag'

export const resolvers = {
  Mutation: {
    toggleAccountMenu: (parent, args, { cache }) => {
      const { isAccountMenuOpen } = cache.readQuery({
        query: gql`
          query isAccountMenuOpen {
            isAccountMenuOpen @client
          }
        `
      })
      const data = {
        isAccountMenuOpen: !isAccountMenuOpen
      }
      cache.writeData({ data })
      return null
    },
    setIsAuthenticated: (parent, { value }, { cache }) => {
      const data = {
        isAuthenticated: value
      }
      cache.writeData({ data })
      return null
    }
  }
}
