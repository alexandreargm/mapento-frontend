<template>
  <div class="changes-notifications">
    <div class="changes-notifications__changes">
      <FeedList>
        <EventUpdateCard
          v-for="event_update in event_updates"
          :key="`event_update_${event_update.id}`"
          :title="event_update.event.title"
          :changes="event_update.changes"
          :date="event_update.created_at"
          :avatar="event_update.author.avatar"
          :author="event_update.author.name"
        />
      </FeedList>
    </div>
  </div>
</template>

<script>
import { extractObjectsOfType } from '~/plugins/feed-utils'
import { UserEventChangesQuery } from '~/graphql/user/queries'
export default {
  data () {
    return {
      event_updates: null
    }
  },
  apollo: {
    event_updates: {
      query: UserEventChangesQuery,
      update: data => extractObjectsOfType(data.me.events, 'EventUpdate')
    }
  }
}
</script>

<style>

</style>
