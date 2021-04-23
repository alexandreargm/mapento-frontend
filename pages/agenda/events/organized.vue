<template>
  <div class="agenda-events-organized">
    <section class="agenda-events__events p-4 space-y-2">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :date="event.date"
        :author="'You'"
        :city="event.city"
      />
    </section>
  </div>
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
