<template>
  <article class="event-card bg-white rounded-md p-4">
    <div class="event-card__head flex items-center space-x-3 mb-1">
      <div class="event-card__category text-xs">
        {{ category }}
      </div>
      <div v-if="isprivate" class="event-card__private text-xs px-1 bg-b-dark font-semibold rounded-md">
        Private
      </div>
    </div>
    <div class="event-card__body mb-2">
      <div class="event-card__title font-semibold">
        {{ title }}
      </div>
    </div>
    <div class="event-card__footer flex space-x-4 items-center">
      <img v-if="avatar" :src="avatar" class="event-card__user-avatar w-8 h-8 flex-shrink-0 bg-brand rounded-full">
      <div class="event-card__details text-t-light-secondary text-xs">
        {{ authorComputed }} {{ date }}, {{ city }} · {{ participants }} participants
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    isprivate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      participants: 16
    }
  },
  computed: {
    authorComputed () {
      return this.author ? `${this.author} ·` : ''
    }
  }
}
</script>

<style>

</style>
