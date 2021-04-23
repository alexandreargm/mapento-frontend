<template>
  <div class="agenda-events-following">
    <section class="agenda-events__events p-4 space-y-2">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :date="event.date"
        :author="event.event_owner.name"
        :city="event.city"
      />
    </section>
  </div>
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
