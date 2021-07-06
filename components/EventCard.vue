<template>
  <article class="event-card" :class="getComponentVariant" @click="visitDetailsPage">
    <div class="event-card__body">
      <div class="event-card__over-title">
        <span class="event-card__category">
          {{ category }}
        </span>

        <Tag v-if="isPrivate" class="event-card__private" :variant="['outline', 'semibold', 'xs']">
          Private
        </Tag>
      </div>
      <div class="event-card__title font-semibold">
        {{ title }}
      </div>
    </div>

    <div class="event-card__footer">
      <img v-if="authorAvatar" :src="authorAvatar" class="event-card__author-avatar">

      <div class="event-card__details">
        <span v-if="authorName" class="event-card__author">
          {{ authorName }}
        </span>

        {{ city }} &bull; {{ dateComputed }} &bull; {{ participants }} participants
      </div>
    </div>
  </article>
</template>

<script>
import { getMidDate } from '~/plugins/luxon'
import { variantPropDefinition, getVariantString } from '~/plugins/component-utils'

export default {
  props: {
    eventId: {
      type: String,
      required: true
    },
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
    authorName: {
      type: String,
      default: ''
    },
    authorAvatar: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    isPrivate: {
      type: Boolean,
      default: false
    },
    variant: variantPropDefinition
  },
  data () {
    return {
      participants: 16
    }
  },
  computed: {
    authorComputed () {
      return this.authorName ? `${this.authorName} •` : ''
    },
    dateComputed () {
      return getMidDate(this.date)
    },
    getComponentVariant () {
      return getVariantString('event-card', this.variant)
    }
  },
  methods: {
    visitDetailsPage () {
      this.$router.push({ name: 'events-id', params: { id: this.eventId } })
    }
  }
}
</script>

<style lang="scss">
.event-card {
  @apply bg-white cursor-pointer rounded-md p-4;
  @screen sm {
    @apply flex flex-row-reverse justify-end;
  }

  &__body {
    @screen sm {
      @apply ml-6;
    }
  }

  &__category {
    @apply text-sm;
  }

  &__private {
    @apply ml-1 ;
  }

  &__title {
    max-height: 4.5rem;
    @apply overflow-y-hidden;
  }

  &__footer {
    @apply flex items-center mt-2;
    @screen sm {
      @apply mt-0 w-64 flex-shrink-0;
    }
  }

  &__author-avatar {
    @apply  mr-4 w-8 h-8 flex-shrink-0 bg-brand rounded-full;
  }

  &__author {
    @apply text-t-dark mr-1;
  }

  &__details {
    @apply text-t-light-secondary text-xs;
  }

  &--condensed {
  @apply w-56 flex-shrink-0 block;

    .event-card {
      &__body {
        height: 6rem;
        @apply m-0;
      }

      &__author-avatar {
        margin-top: 2px;
      }

      &__footer {
        @apply mt-2 w-auto break-words items-start;
      }
    }
  }
}
</style>
