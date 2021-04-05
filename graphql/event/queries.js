import gql from 'graphql-tag'

export const EventsQuery = gql`
    query EventsQuery {
        events {
            data {
                id
                title
            }
        }
    }
`
