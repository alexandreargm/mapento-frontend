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
export const MeQuery = gql`
  query MeQuery {
    me {
      id
      name
      email
    }
  }
`

export const UserEventsQuery = gql`
  query UserEventsQuery {
    me {
      id
      events {
        id
        title
        date
        city
        event_owner {
          id
          name
          email
        }
      }
    }
  }
`

export const UserEventOwnerQuery = gql`
  query UserEventOwnerQuery {
    me {
      id
      event_owner {
        id
        title
        date
        city
      }
    }
  }
`
