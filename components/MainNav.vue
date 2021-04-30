<template>
  <nav class="navbar sticky bottom-0 flex border-t select-none border-b-medium xs:flex-col lg:min-w-2xs">
    <div class="navbar__list flex w-full xs:flex-col xs:py-2 xs:space-y-2">
      <NavItem to="/" icon="outline/home" class="navbar__item" exact>
        Home
      </NavItem>
      <NavItem to="/search" icon="outline/search" class="navbar__item">
        Search
      </NavItem>
      <NavItem to="/agenda/events/following" icon="outline/bookmark" class="navbar__item" name="agenda">
        Agenda
      </NavItem>
      <NavItem to="/notifications" icon="outline/bell" class="navbar__item">
        Notifications
      </NavItem>
      <NavItem icon="outline/user" class="navbar__item" @click="handleToggleAccountMenu">
        Account
      </NavItem>
    </div>
  </nav>
</template>

<script>
import { toggleAccountMenuMutation } from '~/graphql/ui/localMutations'
export default {
  methods: {
    handleToggleAccountMenu () {
      this.$apollo.mutate({
        mutation: toggleAccountMenuMutation
      })
    }
  }
}
</script>

<style lang="postcss">

.navbar__item {
  @apply flex-1;
  & .nav-item {
    @apply flex-1;
      & .nav-item__title {
        @apply hidden tracking-tight font-semibold;
      }
  }
}

@screen xs {
  .navbar__item {
    @apply flex-none;
    & .nav-item {
      @apply flex-none;
      @apply px-4 justify-start;
    }
    & .nav-item__icon {
      width: 28px;
      height: 28px;
    }
  }
}

@screen lg {
  .navbar__item {
    & .nav-item {
      & .nav-item__title {
        @apply block;
      }
    }
  }
}

</style>
