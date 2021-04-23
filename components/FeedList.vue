<template>
  <div class="feed-list">
    <section v-if="!!items" class="feed-list__items p-4 space-y-2">
      <slot />
    </section>
    <div v-else class="feed-list__empty text-2xl text-t-dark-secondary p-4">
      <slot name="empty">
        There are no results
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null
    }
  }
}
</script>

<style>

</style>
