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
export const EVENT_DETAILS_QUERY = gql`
  query EventDetailsQuery ($id: ID) {
    eventById (id: $id) {
      id
      title
      meetup_point
      created_at
      date
      city
      participant_count
      description
      event_owner {
        id
        name
        avatar
      }
      requisites {
        id
        description
      }
      event_updates {
        id
        changes {
          id
          type
          description
          created_at
        }
        author {
          id
          name
        }
      }
      comments {
        id
        created_at
        content
        author {
          id
          name
          avatar
        }
      }
    }
  }
`
