<template>
  <article class="event-card" :class="getVariantStyle" @click="visitDetailsPage">
    <div class="event-card__head">
      <div class="event-card__over-title">
        <span class="event-card__category">
          {{ category }}
        </span>

        <span v-if="isPrivate" class="event-card__private">
          Private
        </span>
      </div>
      <div class="event-card__title font-semibold">
        {{ title }}
      </div>
    </div>

    <div class="event-card__footer">
      <img v-if="authorAvatar" :src="authorAvatar" class="event-card__author-avatar">

      <div class="event-card__details">
        {{ authorComputed }} {{ city }} · {{ $DateTime.fromSQL(date).toLocaleString($DateTime.DATE_MED_WITH_WEEKDAY) }} · {{ participants }} participants
      </div>
    </div>
  </article>
</template>

<script>
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
    variant: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      participants: 16
    }
  },
  computed: {
    authorComputed () {
      return this.authorName ? `${this.authorName} ·` : ''
    },
    getVariantStyle () {
      const stylesEnum = {
        condensed: 'event-card--condensed'
      }
      const getCardVariantClass = stylesEnum[this.variant]

      if (!getCardVariantClass) { return '' }

      return getCardVariantClass
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

  &__head {
    @screen sm {
      @apply ml-6;
    }
  }

  &__category {
    @apply text-xs;
  }

  &__private {
    @apply ml-1 text-xs px-1 bg-b-dark font-semibold rounded-md;
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

  &__details {
    @apply text-t-light-secondary text-xs;
  }

  &--condensed {
  @apply w-56 flex-shrink-0 block;

    .event-card {
      &__head {
        @apply m-0;
      }

      &__author-avatar {
        margin-top: 2px;
      }

      &__title {
        height: 4.5rem;
      }

      &__footer {
        @apply mt-2 w-auto break-words items-start;
      }
    }
  }
}
</style>
