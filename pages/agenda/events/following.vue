<template>
  <FeedList :items="events" class="agenda-events-following">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :title="event.title"
      :date="event.date"
      :author="event.event_owner.name"
      :avatar="event.event_owner.avatar"
      :city="event.city"
    />
    <template #empty class="agenda-events-following__empty">
      You are not following any event
    </template>
  </FeedList>
</template>

<script>
import { UserEventsQuery } from '~/graphql/user/queries'
export default {
  layout: 'agenda',
  data () {
    return {
      events: null
    }
  },
  apollo: {
    events: {
      query: UserEventsQuery,
      update: data => data.me.events
    }
  }
}
</script>

<style>

</style>
