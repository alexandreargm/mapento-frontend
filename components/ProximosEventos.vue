<template>
  <div class="proximos-eventos">
    <div
      v-for="event in events.data"
      :key="event.id"
      class="event"
    >
      {{ event.title }}
    </div>
  </div>
</template>

<script>
import { EventsQuery } from '~/graphql/event/queries'

export default {
  data () {
    return {
      events: []
    }
  },
  apollo: {
    events: EventsQuery
  }
}
</script>

<style>

</style>
