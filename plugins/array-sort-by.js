import sortBy from 'array-sort-by'

// export default sortBy

export default ({ app }, inject) => {
  inject('sortBy', sortBy)
}
