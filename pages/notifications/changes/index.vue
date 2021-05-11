<template>
  <div class="page-notifications">
    <div class="page-notifications__changes">
      <FeedList>
        <EventUpdateCard
          v-for="event_update in eventUpdatesComputed"
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
import { UserEventChangesQuery } from '~/graphql/user/queries'
export default {
  layout: 'notifications',
  data () {
    return {
      event_updates: null,
      follows: [],
      range: ['event_owner', 'event_updates']
    }
  },
  apollo: {
    follows: {
      query: UserEventChangesQuery,
      update: data => data.me.follows
    }
  },
  computed: {
    eventUpdatesComputed () {
      return this.extractObjectsOfType(this.follows, 'EventUpdate')
    }
  },
  methods: {
    extractObjectsOfType (dataArray, typename) {
      const isTargetTypename = ({ __typename }) => __typename === typename
      let target = null

      target = dataArray.filter(isTargetTypename)
      if (target && target.length > 0) { return target }

      return dataArray.flatMap((object) => {
        for (const attributeIndex in object) {
          if (Array.isArray(object[attributeIndex])) {
            return this.extractObjectsOfType(object[attributeIndex], typename)
          }
        }
        return null
      })
    }
  }
}
</script>

<style>

</style>
