<template>
  <nav class="page-nav py-4">
    <div class="page-nav__pages">
      <slot name="pages" />
    </div>

    <div class="page-nav__subpages">
      <slot name="subpages" />
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.page-nav__pages {
  @apply flex overflow-x-auto;

  .nav-item {
    @apply text-4xl font-extrabold h-16 bg-opacity-0;

    &__title {
      @apply text-t-dark-secondary;
    }
  }
  .nav-item--active .nav-item {
    &__title {
      @apply text-t-dark;
    }
  }
}

.page-nav__subpages {
  @apply flex overflow-x-auto;

  .nav-item {
    @apply h-10 font-semibold bg-opacity-0 overflow-x-auto;

    &__wrapper {
      @apply flex-shrink-0;
    }
    &__title {
      @apply text-t-dark-secondary text-lg;
    }
  }

  .nuxt-link-active.nav-item {
    .nav-item__title {
      @apply text-brand;
    }
  }
}
</style>
