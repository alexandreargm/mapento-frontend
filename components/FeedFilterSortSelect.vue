<template>
  <select class="feed-filter-sort-select feed-filter-select">
    <FeedFilterOption
      v-for="(option, index) in options"
      :key="index"
    />
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
