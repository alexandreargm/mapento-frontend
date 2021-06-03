<template>
  <div class="new-events-notifications">
    <main class="space-y-6">
      <div class="new-events-notifications__group-events">
        <h1 class="md-section-heading px-4">
          From your groups
        </h1>
        <FeedRow class="new-events-notifications__group-events-feed">
          <EventCard
            v-for="event in group_events"
            :key="`group_event_${event.id}`"
            :event-id="event.id"
            :title="event.title"
            :date="event.date"
            :author-avatar="event.event_owner.avatar"
            :city="event.city"
            :category="event.category.name"
            :is-private="event.private"
            variant="condensed"
          />
        </FeedRow>
      </div>
      <div class="new-events-notifications__group-events">
        <h2 class="md-section-heading px-4">
          From your follows
        </h2>
        <FeedList class="new-events-notifications__group-events-feed">
          <EventCard
            v-for="event in follow_events"
            :key="`follow_event_${event.id}`"
            :event-id="event.id"
            :title="event.title"
            :date="event.date"
            :author-name="event.event_owner.name"
            :author-avatar="event.event_owner.avatar"
            :city="event.city"
            :category="event.category.name"
            :is-private="event.private"
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
