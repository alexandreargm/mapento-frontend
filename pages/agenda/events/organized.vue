<template>
  <FeedList noresults="No events created yet" class="agenda-events-organized">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event-id="event.id"
      :title="event.title"
      :date="event.date"
      :city="event.city"
      :category="event.category.name"
      :is-private="event.private"
    />
  </FeedList>
</template>

<script>
import { UserEventOwnerQuery } from '~/graphql/user/queries'
export default {
  layout: 'agenda',
  data () {
    return {
      events: null
    }
  },
  apollo: {
    events: {
      query: UserEventOwnerQuery,
      update: data => data.me.event_owner
    }
  }
}
</script>

<style>

</style>
