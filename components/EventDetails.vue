<template>
  <section class="event-details bg-b-light">
    <div class="event-details__header p-4">
      <div class="event-details__overtitle text-lg">
        <span class="event-details__category">{{ category }}</span>
        <Tag v-if="isPrivate" class="event-details__is-private ml-1" :variant="['outline', 'semibold']">
          Private
        </Tag>
      </div>

      <h1 class="event-details__title text-4xl md:text-5xl font-extrabold leading-minimal mt-2">
        {{ title }}
      </h1>

      <div class="event-details__subtitle text-xl text-t-light-body mt-2">
        <span class="event-details__city">
          {{ city }}
        </span>

        <span class="event-details__text-separator">
          ·
        </span>

        <span class="event-details__date">
          {{ dateComputed }}
        </span>
      </div>
    </div>

    <div class="event-details__body">
      <div class="event-details__post px-4 sm:px-8 py-8">
        <div class="event-details__post-details post-details flex items-center">
          <img :src="authorAvatar" :alt="`${authorName}'s profile picture`" class="post-details__author-avatar rounded-full w-16 h-16">

          <div class="post-details__body ml-4 ">
            <div class="post-details__author-name text-lg font-semibold">
              {{ authorName }}
            </div>

            <div class="post-details__event-created-at mt-1 text-sm text-t-light-secondary">
              Posted {{ posted }}
            </div>
          </div>
        </div>

        <span class="event-details__event-description block leading-relaxed whitespace-pre-wrap mt-6 text-lg">{{ description }}</span>
      </div>

      <section class="event-details__section">
        <h1 class="event-details__section-title">
          Requisites
        </h1>
      </section>

      <section class="event-details__section">
        <h1 class="event-details__section-title">
          Meetup point
        </h1>
      </section>

      <div class="event-details__cards p-4 grid gap-3 sm:grid-flow-col">
        <div class="event-details__card flex justify-between items-center rounded-md bg-b-light-secondary text-t-light-secondary p-4">
          <span class="event-details__card-title flex font-semibold">
            <Icon name="solid/users" />
            <span class="event-details__card-text text-t-light ml-3">Participants ({{ participantCount }})</span>
          </span>

          <Icon name="solid/chevron-down" />
        </div>

        <div class="event-details__card flex justify-between items-center rounded-md bg-b-light-secondary text-t-light-secondary p-4">
          <span class="event-details__card-title flex font-semibold">
            <Icon name="solid/refresh" />
            <span class="event-details__card-text text-t-light ml-3">Changes (0)</span>
          </span>

          <Icon name="solid/chevron-down" />
        </div>
      </div>
    </div>

    <div class="event-details__footer py-6">
      <div class="event-details__actions px-4">
        <Button class="event-details__follow-event" :variant="['primary']">
          PARTICIPATE
        </Button>
      </div>
    </div>
    </div>
    </DetailsPage>
  </section>
</template>

<script>
import { getLongDate, getRelativeDate } from '~/plugins/luxon'

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
    isPrivate: {
      type: Boolean,
      default: false
    },
    category: {
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
  },
  computed: {
    dateComputed () {
      return getLongDate(this.date)
    },
    posted () {
      return getRelativeDate(this.createdAt)
    }
  }
}
</script>

<style lang="scss">
.event-details {
  &__section {
    @apply p-4;

    &-title {
      @apply font-semibold text-t-dark mb-3 flex items-center text-lg;
    }
  }
}
</style>
