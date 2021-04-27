<template>
  <nav class="page-nav py-4">
    <div class="page-nav__pages flex">
      <slot name="pages" />
    </div>
    <div class="page-nav__subpages flex">
      <slot name="subpages" />
    </div>
  </nav>
</template>

<script>
import { isActiveLink } from '~/mixins/ui-mixins'
export default {
  mixins: [isActiveLink]
}
</script>

<style lang="postcss">
.page-nav__pages {
  & .nav-item {
    @apply text-4xl font-extrabold h-16
  }
  & .nav-item__title {
    @apply text-t-dark-secondary
  }
  & .nav-item--active .nav-item__title {
    @apply text-t-dark
  }
}

.page-nav__subpages {
  & .nav-item {
    @apply h-10 font-semibold
  }
  & .nav-item__title {
    @apply text-t-dark-secondary
  }
  & .nuxt-link-active .nav-item__title {
    @apply text-t-dark
  }
}
</style>
