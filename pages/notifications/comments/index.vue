<template>
  <div class="page-comments">
    <main class="space-y-6">
      <div class="page-comments__event-comments">
        <FeedList>
          <div class="flex space-x-2 overflow-y-auto">
            <select v-model="filterBy" class="select-filter">
              <option selected>
                All comments
              </option>
              <option>Others</option>
              <option>Mine</option>
            </select>
          </div>
          <CommentCard
            v-for="comment in comments"
            v-show="handleFilterEvent(comment)"
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
      filterBy: 'All comments'
    }
  },
  apollo: {
    comments: {
      query: UserEventsCommentsQuery,
      update (data) {
        const unsortedComments = extractMultipleObjectsOfType(data.me, 'Comment')
        return this.$sortBy(unsortedComments, comment => [-comment.id, new Date(comment.created_at)])
      }
    },
    meId: {
      query: MeQuery,
      update: data => data.me.id
    }
  },
  methods: {
    handleFilterEvent (event) {
      if (this.filterBy === 'All comments') { return true }
      const meIsAuthor = event.author.id === this.meId
      if (this.filterBy === 'Mine' && meIsAuthor) { return true }
      if (this.filterBy === 'Others' && !meIsAuthor) { return true }
      return false
    }
  }
}
</script>

<style>

</style>
