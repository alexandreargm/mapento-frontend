<template>
  <div v-show="isAccountMenuOpen" class="flex justify-end xs:justify-start bg-black bg-opacity-25 overlay z-30 absolute w-full h-full top-0 left-0">
    <div class="account-sidebar overflow-y-auto h-full bg-b-light px-2 w-72 flex flex-col">
      <ProfilePreview class="account-sidebar__profile-preview px-4 py-4" />
      <nav class="account-sidebar__nav select-none flex flex-col space-y-2 py-4">
        <NavItem to="/newevent" class="account-sidebar__item">
          New event
        </NavItem>
        <NavItem to="/newgroup" class="account-sidebar__item">
          New group
        </NavItem>
        <HSeparator />
        <NavItem to="/events" class="account-sidebar__item">
          Your events
        </NavItem>
        <NavItem to="/groups" class="account-sidebar__item">
          Your groups
        </NavItem>
        <HSeparator />
        <NavItem to="/legal" class="account-sidebar__item">
          Terms and privacy
        </NavItem>
        <HSeparator />
        <NavItem to="/login" icon="outline/logout" class="account-sidebar__item">
          Log off
        </NavItem>
      </nav>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  data () {
    return {
      isAccountMenuOpen: false
    }
  },
  apollo: {
    isAccountMenuOpen: {
      query: gql`
        query isAccountMenuOpen {
          isAccountMenuOpen @client
        }
      `
    }
  }
}
</script>

<style lang="postcss" scoped>
  .account-sidebar__item {
    @apply h-12 rounded-md;
  }
</style>
