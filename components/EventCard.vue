<template>
  <article class="event-card bg-white rounded-md p-4 space-y-4">
    <div class="event-card__body">
      <div class="event-card__category text-xs mb-1">
        {{ category }}
      </div>
      <div class="event-card__title font-semibold">
        {{ title }}
      </div>
    </div>
    <div class="event-card__footer flex space-x-4">
      <img :src="avatar" class="event-card__user-avatar w-8 h-8 flex-shrink-0 bg-brand rounded-full">
      <div class="event-card__details text-t-light-secondary text-xs flex items-center ">
        {{ author }} · {{ date }} {{ city }} · {{ participants }} participants
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Missing title'
    },
    city: {
      type: String,
      default: 'Missing city'
    },
    date: {
      type: String,
      default: 'Missing date'
    },
    author: {
      type: String,
      default: 'Missing author'
    }
  },
  data () {
    return {
      category: 'Ocio',
      participants: 16,
      avatar: 'https://picsum.photos/32'
    }
  }
}
</script>

<style>

</style>
