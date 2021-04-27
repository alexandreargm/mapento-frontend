<template>
  <div v-show="isAccountMenuOpen" class="account-overlay flex justify-end xs:justify-start overlay absolute w-full h-full top-0 left-0" @click="toggleAccountMenu()">
    <div class="account-overlay__sidebar z-30 fixed overflow-y-auto h-full bg-b-light px-2 py-4 w-72 flex flex-col">
      <ProfilePreview class="account-overlay__profile-preview p-4" />
      <nav class="account-overlay__nav select-none flex flex-col space-y-2">
        <NavItem to="/newevent" class="account-overlay__item">
          New event
        </NavItem>
        <NavItem to="/newgroup" class="account-overlay__item">
          New group
        </NavItem>
        <HSeparator />
        <NavItem to="/agenda/events/organized" class="account-overlay__item">
          Your events
        </NavItem>
        <NavItem to="/agenda/groups/organized" class="account-overlay__item">
          Your groups
        </NavItem>
        <HSeparator />
        <NavItem to="/legal" class="account-overlay__item">
          Terms and privacy
        </NavItem>
        <HSeparator />
        <NavItem to="/login" icon="outline/logout" class="account-overlay__item">
          Log off
        </NavItem>
      </nav>
    </div>
    <div class="account-overlay__backdrop z-10 bg-black bg-opacity-25 fixed w-full h-full" />
  </div>
</template>

<script>
import { isAccountMenuOpenQuery } from '~/graphql/ui/localQueries'
import { toggleAccountMenuMutation } from '~/graphql/ui/localMutations'
export default {
  data () {
    return {
      isAccountMenuOpen: false
    }
  },
  apollo: {
    isAccountMenuOpen: {
      query: isAccountMenuOpenQuery
    }
  },
  methods: {
    toggleAccountMenu () {
      this.$apollo.mutate({
        mutation: toggleAccountMenuMutation
      })
    }
  }
}
</script>

<style lang="postcss">
  .account-overlay__item {
    @apply h-12 rounded-md;
  }
</style>
