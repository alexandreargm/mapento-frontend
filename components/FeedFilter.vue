<template>
  <div class="feed-filter flex space-x-2 overflow-y-auto px-4">
    <FeedFilterSelect
      v-for="filter in filters"
      :key="filter.id"
      :options="filter.options"
      :value="filter.value"
      @change="filter.value = $event"
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
  data () {
    return {
    }
  }
}
</script>

<style lang="postcss">
</style>
