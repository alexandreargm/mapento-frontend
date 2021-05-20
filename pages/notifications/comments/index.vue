<template>
  <div class="page-comments">
    <main class="space-y-6">
      <div class="page-comments__event-comments">
        <FeedList>
          <FeedFilter :filters="filters" />
          <CommentCard
            v-for="comment in filteredComments"
            :key="`event_comment_${comment.id}`"
            :title="comment.commentable.title"
            :date="comment.created_at"
            :parent="comment.parent_id"
            :avatar="comment.author.avatar"
            :author="comment.author.name"
          />
        </FeedList>
      </div>
    </main>
  </div>
</template>

<script>
import { extractMultipleObjectsOfType } from '~/plugins/feed-utils'
import { UserEventsCommentsQuery, MeQuery } from '~/graphql/user/queries'

export default {
  layout: 'notifications',
  data () {
    return {
      comments: [],
      meId: null,
      filters: {
        date: { value: 'Newest', options: ['Newest', 'Oldest'] },
        author: { value: 'Author', options: ['Author', 'Mine', 'Others'] }
      }
    }
  },
  apollo: {
    comments: {
      query: UserEventsCommentsQuery,
      update (data) {
        return extractMultipleObjectsOfType(data.me, 'Comment')
      }
    },
    meId: {
      query: MeQuery,
      update: data => data.me.id
    }
  },
  computed: {
    filteredComments () {
      let filteredComments = this.comments
      if (this.comments.length === 0) { return this.comments }
      filteredComments = this.filterByAuthor(filteredComments, this.filters.author.value)
      filteredComments = this.sortByDate(filteredComments, this.filters.date.value)
      return filteredComments
    }
  },
  methods: {
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
