<template>
  <div class="page-comments">
    <main>
      <FeedList>
        <CommentCard
          v-for="comment in comments"
          :key="`event_comment_${comment.id}`"
          :title="comment.commentable.title"
          :type="comment.commentable.__typename"
          :date="comment.created_at"
          :avatar="comment.author.avatar"
          :author="comment.author.name"
        />
      </FeedList>
    </main>
  </div>
</template>

<script>
import { extractObjectsOfType } from '~/plugins/feed-utils'
import { UserEventsCommentsQuery } from '~/graphql/user/queries'
export default {
  layout: 'notifications',
  data () {
    return {
      comments: null
    }
  },
  apollo: {
    comments: {
      query: UserEventsCommentsQuery,
      update: data => extractObjectsOfType(data.me.events, 'Comment')
    }
  }
}
</script>

<style>

</style>
