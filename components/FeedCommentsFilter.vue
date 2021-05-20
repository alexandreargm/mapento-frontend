<template>
  <FeedFilter :filters="filters" @change="$emit('update:filtrables', filterFiltrables())" />
</template>

<script>
import { MeQuery } from '~/graphql/user/queries'
export default {
  props: {
    filtrables: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      all: this.filtrables,
      filters: {
        date: { value: 'Newest', options: [{ value: 'Newest' }, { value: 'Oldest' }] },
        author: { value: 'Author', options: [{ value: 'Author' }, { value: 'Mine' }, { value: 'Others' }] }
      },
      meId: null
    }
  },
  updated () {
    this.all = this.filtrables
  },
  apollo: {
    meId: {
      query: MeQuery,
      update: data => data.me.id
    }
  },
  methods: {
    filterFiltrables () {
      let filteredFiltrables = this.all
      if (this.all.length === 0) { return this.all }
      filteredFiltrables = this.filterByAuthor(filteredFiltrables, this.filters.author.value)
      filteredFiltrables = this.sortByDate(filteredFiltrables, this.filters.date.value)
      return filteredFiltrables
    },
    filterByAuthor (comments, value) {
      const optionFilterFunctions = {
        Mine: comment => comment.author.id === this.meId,
        Others: comment => comment.author.id !== this.meId
      }
      if (value === 'Author') { return comments }
      return comments.filter(optionFilterFunctions[value])
    },
    sortByDate (comments, value) {
      const optionFilterFunctions = {
        Newest: comment => [-new Date(comment.created_at)],
        Oldest: comment => [new Date(comment.created_at)]
      }
      return this.$sortBy(comments, optionFilterFunctions[value])
    }
  }
}
</script>

<style>

</style>
