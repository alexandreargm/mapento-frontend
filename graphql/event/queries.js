import gql from 'graphql-tag'

export const EventsQuery = gql`
  query EventsQuery ($id: ID) {
    events (id: $id) {
      data {
        id
        title
      }
    }
  }
`
