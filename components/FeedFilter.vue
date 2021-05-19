<template>
  <div class="feed-filter flex space-x-2 overflow-y-auto p-4">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    filtrables: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      orderFunction: null,
      typesOfFilter: []
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style lang="postcss">
.feed-list {
  @apply pt-0;
}
.feed-filter-select {
    @apply block m-0 font-semibold text-sm text-brand px-4 pr-8 h-10 rounded-full box-border bg-b-dark outline-none shadow-none cursor-pointer select-none bg-no-repeat;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 5.91667L5.09966e-07 0.0833388L10 0.0833397L5 5.91667Z' fill='%233B7AF7'/%3E%3C/svg%3E");
    background-position: right 1rem top 50%, 0 0;
    background-size: 0.65em auto, 100%;
    transition: background 400ms ease-out;
  }
  .feed-filter-select::-ms-expand {
    display: none;
  }
  .feed-filter-select:focus{
    @apply outline-none shadow-none;
  }
  .feed-filter-select:active {
    @apply bg-opacity-100 !important;
    transition: background 0ms;
  }
  .feed-filter-select:hover {
    @apply bg-b-light bg-opacity-0;
  }
  .feed-filter-select option {
    @apply font-normal bg-b-light py-2 text-t-dark;
  }
  .feed-filter-select:disabled,
  .feed-filter-select[aria-disabled="true"] {
    @apply text-b-medium;
  }
  .feed-filter-select:disabled:hover,
  .feed-filter-select[aria-disabled="true"] {
    @apply bg-b-medium text-t-light-secondary;
  }
</style>
