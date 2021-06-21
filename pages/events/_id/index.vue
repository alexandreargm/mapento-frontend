<template>
  <DetailsPage>
    <DetailsPageHeader class="details-page__header" />
    <EventDetails
      v-if="event"
      class="details-page__section"
      :title="event.title"
      :meetup-point="event.meetup_point"
      :created-at="event.created_at"
      :date="event.date"
      :description="event.description"
      :city="event.city"
      :participant-count="event.participant_count"
      :requisites="event.requisites"
      :event-updates="event.event_updates"
      :author-name="event.event_owner.name"
      :author-avatar="event.event_owner.avatar"
      :comments="event.comments"
      :is-private="event.private"
      :category="event.category.name"
    />
  </DetailsPage>
</template>

<script>
import { EVENT_DETAILS_QUERY } from '~/graphql/event/queries'

export default {
  data () {
    return {
      eventId: this.$route.params.id,
      event: null,
      loading: 0
    }
  },
  apollo: {
    event: {
      query: EVENT_DETAILS_QUERY,
      update: data => data.eventById,
      variables () {
        return {
          id: this.eventId
        }
      }
    }
  }
}
</script>
