import sortBy from 'array-sort-by'

export default ({ app }, inject) => {
  inject('sortBy', sortBy)
}
