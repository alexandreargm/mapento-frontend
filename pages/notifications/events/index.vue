<template>
  <div class="page-new-events">
    <main class="space-y-6">
      <div class="page-notifications__group-events">
        <h1 class="md-section-heading px-4">
          From your groups
        </h1>
        <FeedRow class="page-notifications__group-events-feed">
          <EventCard
            v-for="event in group_events"
            :key="`group_event_${event.id}`"
            :title="event.title"
            :city="event.city"
            :date="event.date"
            :private="event.private"
            :category="event.category.name"
            :avatar="event.event_owner.avatar"
          />
        </FeedRow>
      </div>
      <div class="page-notifications__group-events">
        <h2 class="md-section-heading px-4">
          From your follows
        </h2>
        <FeedList class="page-notifications__group-events-feed">
          <EventCard
            v-for="event in follow_events"
            :key="`follow_event_${event.id}`"
            :title="event.title"
            :city="event.city"
            :date="event.date"
            :private="event.private"
            :author="event.event_owner.name"
            :category="event.category.name"
            :avatar="event.event_owner.avatar"
          />
        </FeedList>
      </div>
    </main>
  </div>
</template>

<script>
import { extractObjectsOfType, filterObjectDuplicatesByKey, extractMultipleObjectsOfType } from '~/plugins/feed-utils'
import { UserGroupEventsQuery, UserUserEventsQuery } from '~/graphql/user/queries'

export default {
  layout: 'notifications',
  data () {
    return {
      follow_events: null,
      group_events: null
    }
  },
  apollo: {
    group_events: {
      query: UserGroupEventsQuery,
      update: (data) => {
        const extractedEvents = extractMultipleObjectsOfType(data.me, 'Event')
        return filterObjectDuplicatesByKey(extractedEvents, 'id')
      }
    },
    follow_events: {
      query: UserUserEventsQuery,
      update: data => extractObjectsOfType(data.me.follows, 'Event')
    }
  }
}
</script>

<style>

</style>
