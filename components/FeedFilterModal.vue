<template>
  <div class="feed-filter-modal rounded-md bg-b-light">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.feed-filter-modal {
  $gap-width: 16px;
  @apply fixed left-0 bottom-0 z-30 w-full;
  @screen xs {
    @apply min-w-sm max-w-md bottom-auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &__inner {
    max-height: 80vh;
    min-height: 80vh;
    @screen xs {
      min-height: auto;
    }
  }
}
</style>
