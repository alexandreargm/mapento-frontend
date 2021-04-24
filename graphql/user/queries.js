import gql from 'graphql-tag'

export const UserQuery = gql`
  query UserQuery($id: ID) {
    user (id: $id) {
      id
      name
      email
      avatar
    }
  }
`
export const MeQuery = gql`
  query MeQuery {
    me {
      id
      name
      email
      avatar
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
          avatar
        }
      }
    }
  }
`

export const UserEventOwnerQuery = gql`
  query UserEventOwnerQuery {
    me {
      id
      avatar
      event_owner {
        id
        title
        date
        city
      }
    }
  }
`
export const UserGroupsQuery = gql`
  query UserGroupsQuery {
    me {
      id
      groups {
        id
        name
        city
        image
      }
    }
  }
`

export const UserGroupOwnerQuery = gql`
  query UserGroupOwnerQuery {
    me {
      id
      group_owner {
        id
        name
        city
        image
      }
    }
  }
`
