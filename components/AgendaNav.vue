<template>
  <nav class="agenda-nav py-4">
    <div class="agenda-nav__pages flex">
      <NavItem to="/agenda/events/following" class="agenda-nav__page-link" :active="isActiveLink('events')">
        Events
      </NavItem>
      <NavItem to="/agenda/groups/following" class="agenda-nav__page-link" :active="isActiveLink('groups')">
        Groups
      </NavItem>
    </div>
    <div class="agenda-nav__subpages flex">
      <NavItem to="following" class="agenda-nav__subpage-link">
        Following
      </NavItem>
      <NavItem to="organized" class="agenda-nav__subpage-link">
        Organized
      </NavItem>
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
.agenda-nav__page-link {
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

.agenda-nav__subpage-link {
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
