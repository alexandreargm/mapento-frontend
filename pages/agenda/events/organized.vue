<template>
  <FeedList :items="events" class="agenda-events-organized">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :title="event.title"
      :date="event.date"
      :author="'You'"
      :avatar="avatar"
      :city="event.city"
    />
    <template #empty class="agenda-events-organized__empty">
      No events created yet
    </template>
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
