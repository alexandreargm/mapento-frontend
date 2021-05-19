<template>
  <option :value="value" :selected="selected" :disabled="disabled" class="feed-filter-option">
    {{ label || value }}
  </option>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    selected: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
</style>
