<template>
  <section class="feed-list p-4 grid gap-2">
    <slot>
      <span class="feed-list__empty text-2xl text-t-dark-secondary">
        {{ noresults }}
      </span>
    </slot>
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null
    },
    noresults: {
      type: String,
      default: 'There are no results'
    }
  }
}
</script>

<style>

</style>
