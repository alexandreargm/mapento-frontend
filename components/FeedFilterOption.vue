<template>
  <option :value="value" :selected="selected" class="feed-filter-option">
    {{ value }}
  </option>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
</style>
