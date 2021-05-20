<template>
  <div class="page-following-events">
    <FeedList noresults="You are not following any event" class="agenda-events-following">
      <FeedFilter :filters="filters" />
      <EventCard
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :date="event.date"
        :author="event.event_owner.name"
        :avatar="event.event_owner.avatar"
        :city="event.city"
        :category="event.category.name"
        :isprivate="event.private"
      />
    </FeedList>
  </div>
</template>

<script>
import { UserEventsQuery } from '~/graphql/user/queries'
import { AllCategoriesQuery } from '~/graphql/category/queries'
export default {
  layout: 'agenda',
  data () {
    return {
      events: [],
      categoryNames: [],
      filters: {
        date: { value: 'Newest', options: ['Newest', 'Oldest'] },
        category: { value: 'Category', options: ['Category'] }
        // city: { value: 'City', options: [{ value: 'City' }, { value: 'Oldest' }] }
      }
    }
  },
  apollo: {
    events: {
      query: UserEventsQuery,
      update: data => data.me.events
    },
    categories: {
      query: AllCategoriesQuery,
      update ({ allCategories }) {
        const getCategoryNames = allCategories.map(({ name }) => name)
        this.appendCategoryOptions(getCategoryNames)
        return null
      }
    }
  },
  computed: {
    filteredEvents () {
      let filtered = this.events
      if (this.events.length === 0) { return this.events }
      filtered = this.sortByDate(filtered, this.filters.date.value)
      return filtered
    }
  },
  methods: {
    appendCategoryOptions (fetchedCategoryNames) {
      this.filters.category.options.push(...fetchedCategoryNames)
    }
  }
}
</script>

<style>

</style>
