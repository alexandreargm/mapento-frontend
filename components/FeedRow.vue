<template>
  <section class="feed-row flex overflow-x-auto">
    <div class="feed-row__inner flex p-4 space-x-2">
      <slot>
        <span class="feed-row__empty text-2xl text-t-dark-secondary">
          {{ noresults }}
        </span>
      </slot>
    </div>
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
