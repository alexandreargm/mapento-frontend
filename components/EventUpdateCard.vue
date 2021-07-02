<template>
  <article class="event-update-card bg-white rounded-md p-4 flex">
    <img v-if="avatar" :src="avatar" class="event-card__user-avatar w-8 h-8 flex-shrink-0 bg-brand rounded-full">
    <div class="event-update-card__body ml-4 space-y-1">
      <div class="event-update-card__event-title font-semibold text-sm leading-tight">
        {{ title }}
      </div>
      <div class="event-update-card__publication text-t-dark-secondary text-xs">
        <span class="event-update-card__author">
          {{ author }},
        </span>

        <span class="event-update-card__date">
          {{ dateComputed }}
        </span>
      </div>
      <div class="event-update-card__changes">
        {{ computedTypeChanges }}
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
    author: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: null
    },
    changes: {
      type: Array,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  computed: {
    computedTypeChanges () {
      const newChangeTypeNames = { owner_id: 'Event owner', category_id: 'Category', title: 'Title', private: 'Private', description: 'Description', city: 'City', meetup_point: 'Meetup point', date: 'Date' }

      const renamedChangeTypes = this.changes.map(change => newChangeTypeNames[change.type])

      return renamedChangeTypes.join(', ')
    },
    dateComputed () {
      return getRelativeDate(this.date)
    }
  }

}
</script>

<style>
</style>
