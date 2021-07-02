<template>
  <article class="comment-card bg-white rounded-md p-4 flex">
    <img v-if="avatar" :src="avatar" class="comment-card__user-avatar w-8 h-8 flex-shrink-0 bg-brand rounded-full">
    <div class="comment-card__body ml-4 space-y-1">
      <div class="comment-card__comment-title font-semibold text-sm leading-tight">
        {{ title }}
      </div>
      <div class="comment-card__publication text-t-dark-secondary text-xs">
        <span class="comment-card__author">
          {{ author }},
        </span>

        <span class="comment-card__date">
          {{ dateComputed }}
        </span>
      </div>
      <div v-if="commentDesctiptionComputed !== ''" class="comment-card__description">
        {{ commentDesctiptionComputed }}
      </div>
    </div>
  </article>
</template>

<script>
import { getRelativeDate } from '~/plugins/luxon'

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
      default: ''
    },
    parent: {
      type: String,
      default: null
    }
  },
  computed: {
    commentDesctiptionComputed () {
      return this.parent === null ? 'Commented' : 'Replied to a comment'
    },
    dateComputed () {
      return getRelativeDate(this.date)
    }
  }
}
</script>

<style>
</style>
