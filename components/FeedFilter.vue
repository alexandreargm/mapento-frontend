<template>
  <div class="feed-filter flex space-x-2 overflow-y-auto -mt-4">
    <FeedFilterSelect
      v-for="filter in filters"
      :key="filter.id"
      :options="filter.options"
      :value="filter.value"
      @change="updateFilterValue(filter, $event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Object,
      default: null
    }
  },
  methods: {
    updateFilterValue (filter, value) {
      filter.value = value
    }
  }
}
</script>

<style lang="postcss">
</style>
