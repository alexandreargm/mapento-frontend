import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    event_owner: [Event!]! @hasMany(relation: "eventOwner")
    events: [Event!]! @belongsToMany
    created_at: DateTime!
    updated_at: DateTime!
  }

  type Profile {
    id: ID!
    name: String!
    email: String!
  }

  type AuthPayload {
    access_token: String
    refresh_token: String
    expires_in: Int
    token_type: String
    user: User
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload!
  }

  type Query {
    isAccountMenuOpen: Boolean!
    user (id: ID!): User!
  }
`
