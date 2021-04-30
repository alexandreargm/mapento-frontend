<template>
  <div class="search-bar input-group">
    <div class="search-bar__icon input-icon">
      <svg-icon name="solid/search" class="search-bar__icon-svg svg-20 z-10" />
    </div>
    <input type="text" class="search-bar__input h-10 w-full -ml-10 pl-10 bg-b-light rounded-sm" placeholder="Events, users or groups">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
  .search-bar__input::placeholder {
    @apply font-semibold text-sm text-t-dark !important;
  }
</style>
