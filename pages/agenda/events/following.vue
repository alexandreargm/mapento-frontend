<template>
  <div class="page-following-events">
    <FeedFilter>
      <FeedFilterItem :label="orderByLabel">
        <FormulateInput
          v-model="orderByValue"
          :options="orderByOptions"
          type="radio"
          label="Order by"
        />
      </FeedFilterItem>
      <FeedFilterItem :label="categoryFilterLabel">
        <FormulateInput
          v-model="categoryFilterValue"
          :options="categoryFilterOptions"
          type="radio"
          label="Filter by category"
        />
      </FeedFilterItem>
      <FeedFilterItem :label="dateFilterLabel">
        <FormulateInput
          v-model="dateFilterValue"
          :options="dateFilterOptions"
          type="radio"
          label="Show events that start in the next..."
        />
      </FeedFilterItem>
      <FeedFilterItem :label="cityFilterLabel">
        <FormulateInput
          v-model="cityFilterValue"
          :options="cityFilterOptions"
          type="vue-select"
          label="Show events located in"
        />
      </FeedFilterItem>
    </FeedFilter>
    <FeedList
      noresults="You are not following any event"
      class="agenda-events-following"
    >
      <EventCard
        v-for="event in events"
        :key="event.id"
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
</template>

<script>
import { UserEventsQuery } from '~/graphql/user/queries'
import { AllCategoriesQuery } from '~/graphql/category/queries'
export default {
  layout: 'agenda',
  data () {
    return {
      events: [],
      orderByValue: 'new',
      orderByOptions: { new: 'Newest', popular: 'Most popular', participants: 'Amount of participants' },
      orderByLabel: 'Order by',
      categoryFilterOptions: { all: 'Show all' },
      categoryFilterValue: 'all',
      categoryFilterLabel: 'Categories',
      dateFilterValue: 'all',
      dateFilterOptions: { all: 'Show all', day: '24 hours', week: '7 days', month: '30 days', semester: '6 months', year: '1 year' },
      dateFilterLabel: 'Event date',
      cityFilterOptions: [{ label: 'Show all', value: 'all' }, { label: 'Alicante', value: 'alicante' }, { label: 'Valencia', value: 'valencia' }, { label: 'Madrid', value: 'madrid' }, { label: 'Barcelona', value: 'barcelona' }, { label: 'Elche' }, { label: 'Guardamar' }],
      cityFilterValue: 'all',
      cityFilterLabel: 'City'
    }
  },
  apollo: {
    events: {
      query: UserEventsQuery,
      update: data => data.me.events
    },
    _updateCategoryFilterOptions: {
      query: AllCategoriesQuery,
      update ({ allCategories }) {
        const getCategoryNames = allCategories.map(({ name }) => name)
        this.categoryFilterOptions = { ...this.categoryFilterOptions, ...this.createOptions(getCategoryNames) }
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
    createOptions (optionNames) {
      return optionNames.reduce((acc, categoryName) => {
        const getParsedCategoryName = _replaceSpacesWithDashes(categoryName)
        const getUpperCaseCategoryName = _uppercaseCategoryName(categoryName)
        acc[getParsedCategoryName] = getUpperCaseCategoryName
        return acc
      }, {})

      function _replaceSpacesWithDashes (string) {
        return string.replaceAll(' ', '-')
      }

      function _uppercaseCategoryName (categoryName) {
        const firstLetter = categoryName[0].toUpperCase()
        const restOfString = categoryName.slice(1)
        return firstLetter + restOfString
      }
    }
  }
}
</script>
