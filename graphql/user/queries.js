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
        private
        category {
          id
          name
        }
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
        private
        category {
          id
          name
        }
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
        private
        category {
          id
          name
        }
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
        private
        category {
          id
          name
        }
      }
    }
  }
`

export const UserGroupEventsQuery = gql`
  query UserGroupEventsQuery {
    me {
      id
      groups {
        id
        name 
        image
        events {
          id
          title
          date
          city
          private
          category {
            id
            name
          }
          event_owner {
            id
            name
            avatar
          }
        }
      }
      group_owner {
        id
        name 
        image
        events {
          id
          title
          date
          city
          private
          category {
            id
            name
          }
          event_owner {
            id
            name
            avatar
          }
        }
      }
    }
  }
`

export const UserUserEventsQuery = gql`
  query UserUserEventsQuery {
    me {
      id
      follows {
        id
        event_owner {
          id
          title
          date
          city
          private
          event_owner {
            id
            name
            avatar
          }
          category {
            id
            name
          }
        }
      }
    }
  }
`

export const UserEventChangesQuery = gql`
  query UserEventChangesQuery {
    me {
      id
      events {
        id
        event_updates {
          id
          created_at
          event {
            id
            title
          }
          author {
            id
            name
            avatar
          }
          changes {
            id
            description
            type
          }
        }
      }
    }
  }
`

export const UserEventsCommentsQuery = gql`
  query UserEventsCommentsQuery {
    me {
      id
      events {
        id
        comments {
          id
          parent_id
          created_at
          author {
            id
            name
            avatar
          }
          commentable {
            ... on Event {
              id
              title
            }
          }
        }
      }
      event_owner {
        id
        comments {
          id
          parent_id
          created_at
          author {
            id
            name
            avatar
          }
          commentable {
            ... on Event {
              id
              title
            }
          }
        }
      }
    }
  }
`
