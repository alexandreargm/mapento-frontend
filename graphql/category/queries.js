import gql from 'graphql-tag'

export const AllCategoriesQuery = gql`
  query AllCategoriesQuery {
    allCategories {
      id
      name
    }
  }
`

export const CategoryQuery = gql`
  query CategoryQuery {
    categories {
      data {
        id
        name
      }
    }
  }
`
