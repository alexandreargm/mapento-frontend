<template>
  <article class="comment-card bg-white rounded-md p-4 flex space-x-4">
    <img v-if="avatar" :src="avatar" class="comment-card__user-avatar w-8 h-8 flex-shrink-0 bg-brand rounded-full">
    <div class="comment-card__body space-y-1">
      <div class="comment-card__comment-title font-semibold text-xs">
        {{ title }}
      </div>
      <div class="comment-card__publication text-t-dark-secondary text-xs">
        <span class="comment-card__author">{{ author }}</span>
        ·
        <span class="comment-card__date">{{ date }}</span>
      </div>
      <div v-if="commentDesctiptionComputed !== ''" class="comment-card__description text-sm">
        {{ commentDesctiptionComputed }}
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    parent: {
      type: String,
      default: null
    }
  },
  computed: {
    commentDesctiptionComputed () {
      return this.parent === null ? 'Commented' : 'Replied to a comment'
    }
  }
}
</script>

<style>
</style>
