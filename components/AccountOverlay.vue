<template>
  <DefaultOverlay v-show="isActive" class="flex justify-end xs:justify-start bg-black bg-opacity-25">
    <div class="account-sidebar overflow-y-auto h-full bg-b-light px-2 w-72 flex flex-col">
      <ProfilePreview class="account-sidebar__profile-preview px-4 py-4" />
      <nav class="account-sidebar__nav select-none flex flex-col space-y-2 py-4">
        <NavItem tag="button" to="/newevent" class="account-sidebar__item">
          New event
        </NavItem>
        <NavItem tag="button" to="/newgroup" class="account-sidebar__item">
          New group
        </NavItem>
        <HSeparator />
        <NavItem tag="button" to="/events" class="account-sidebar__item">
          Your events
        </NavItem>
        <NavItem tag="button" to="/groups" class="account-sidebar__item">
          Your groups
        </NavItem>
        <HSeparator />
        <NavItem tag="button" to="/legal" class="account-sidebar__item">
          Terms and privacy
        </NavItem>
        <HSeparator />
        <NavItem tag="button" to="/logoff" class="account-sidebar__item">
          Log off
        </NavItem>
      </nav>
    </div>
  </DefaultOverlay>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="postcss" scoped>
  .account-sidebar__item {
    @apply h-12 rounded-md;
  }
</style>
