<template>
  <nav class="navbar sticky bottom-0 flex select-none xs:flex-col md:min-w-3xs lg:min-w-2xs">
    <div class="navbar__list flex w-full xs:flex-col xs:py-2 xs:space-y-2">
      <NavItem to="/" icon="outline/home" class="navbar__item" exact>
        Home
      </NavItem>
      <NavItem to="/search" icon="outline/search" class="navbar__item" name="search">
        Search
      </NavItem>
      <NavItem to="/agenda/events/following" icon="outline/bookmark" class="navbar__item" name="agenda">
        Agenda
      </NavItem>
      <NavItem to="/notifications/events" icon="outline/bell" class="navbar__item" name="notifications">
        Notifications
      </NavItem>
      <NavItem icon="outline/user" class="navbar__item" name="profile" @click="handleToggleAccountMenu">
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

<style lang="scss">

.navbar__item {
  @apply flex-1;

  @screen xs {
    @apply flex-none;
  }

  .nav-item {
    @apply flex-1;

    @screen xs {
      @apply flex-none;
      @apply px-4 justify-start;
    }

    &__title {
      @apply hidden tracking-tight font-semibold;

       @screen md {
         @apply block;
      }
    }

    &__icon {
      height: 24px;
      width: 24px;

      @screen xs {
        height: 28px;
        width: 28px;
      }
    }
  }
}
</style>
