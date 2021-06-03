<template>
  <div class="event-details">
    <div class="event-details__header p-4">
      <div class="event-details__overtitle text-lg">
        <span class="event-details__city">
          {{ city }}
        </span>
        ·
        <span class="event-details__date">
          {{ date }}
        </span>
      </div>

      <div class="event-details__title text-4xl font-extrabold leading-minimal mt-1">
        {{ title }}
      </div>
    </div>

    <div class="event-details__author flex p-4 items-center">
      <img :src="authorAvatar" :alt="`${authorName}'s profile picture`" class="event-details__author-avatar rounded-full w-16 h-16">

      <div class="event-details__author-details ml-4 text-sm">
        <div class="event-details__author-body">
          <span class="event-details__author-name font-bold">
            {{ authorName }}
          </span>
          ·
          <span class="event-details__event-created-at">
            {{ createdAt }}
          </span>
        </div>

        <div class="event-details__author-footer text-t-dark-secondary">
          Event administrator
        </div>
      </div>
    </div>

    <span class="event-details__description block leading-relaxed whitespace-pre-wrap">{{ description }}</span>

    <div class="event-details__requisites">
      <div class="event-details__requisites-title">
        Requisites
      </div>
    </div>

    <div class="event-details__meetup-point">
      <div class="event-details__meetup-point-title">
        Meetup point
      </div>
    </div>

    <div class="event-details__event-updates">
      <div class="event-details__event-updates-title">
        Changes
      </div>
    </div>

    <div class="event-details__footer p-4">
      <div class="event-details__participant-count font-semibold text-brand">
        There are {{ participantCount }} participants right now
      </div>

      <div class="event-details__actions pt-6">
        <button class="event-details__follow-event btn">
          Participate
        </button>
      </div>
    </div>
  </div>
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
    city: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    meetupPoint: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    authorAvatar: {
      type: String,
      required: true
    },
    participantCount: {
      type: Number,
      required: true
    },
    requisites: {
      type: Array,
      required: true
    },
    eventUpdates: {
      type: Array,
      required: true
    },
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.event-details__requisites-title,
.event-details__meetup-point-title,
.event-details__event-updates-title {
  @apply font-semibold;
}
.event-details__requisites,
.event-details__meetup-point,
.event-details__event-updates,
.event-details__description {
  @apply px-4 py-6;
}
</style>
