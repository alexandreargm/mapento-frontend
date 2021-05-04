<template>
  <div class="page-notifications">
    <main class="space-y-6">
      <div class="page-notifications__group-events">
        <h1 class="md-section-heading px-4">
          From your groups
        </h1>
        <FeedRow class="page-notifications__group-events-feed">
          <template v-for="group in groups" v-bind="group.id">
            <EventCard
              v-for="event in group.events"
              :key="`group_event_${event.id}`"
              :title="event.title"
              :city="event.city"
              :date="event.date"
              :private="event.private"
              :category="event.category.name"
              :avatar="event.event_owner.avatar"
            />
          </template>
        </FeedRow>
      </div>
      <div class="page-notifications__group-events">
        <h2 class="md-section-heading px-4">
          From your follows
        </h2>
        <FeedList class="page-notifications__group-events-feed">
          <template v-for="follow in follows" v-bind="follow.id">
            <EventCard
              v-for="event in follow.event_owner"
              :key="`follow_event_${event.id}`"
              :title="event.title"
              :city="event.city"
              :date="event.date"
              :private="event.private"
              :author="follow.name"
              :category="event.category.name"
              :avatar="follow.avatar"
            />
          </template>
        </FeedList>
      </div>
    </main>
  </div>
</template>

<script>
import { UserGroupEventsQuery, UserUserEventsQuery } from '~/graphql/user/queries'

export default {
  layout: 'notifications',
  data () {
    return {
      groups: null,
      follows: null
    }
  },
  apollo: {
    groups: {
      query: UserGroupEventsQuery,
      update: data => data.me.groups
    },
    follows: {
      query: UserUserEventsQuery,
      update: data => data.me.follows
    }
  }
}
</script>

<style>

</style>
