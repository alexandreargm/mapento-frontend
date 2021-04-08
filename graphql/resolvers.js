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
    }//,
    // setLocalProfile: (parent, { id }, { cache }) => {
    //   const { user } = cache.readQuery({
    //     query: gql`
    //       query getLocalProfile {
    //         user (id: $id) @client {
    //           id
    //           name
    //           email
    //         }
    //       }
    //     `,
    //     variables: {
    //       id
    //     }
    //   })
    //   const data = {
    //     profile: user
    //   }
    //   cache.writeData({ data })
    //   // return data
    // }
  }
}
