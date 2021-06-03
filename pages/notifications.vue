<template>
  <div class="notifications-page">
    <PageNav>
      <template #pages>
        <NavItem to="/notifications/events" :name="'notifications'">
          Notifications
        </NavItem>
      </template>
      <template #subpages>
        <NavItem to="events">
          New events
        </NavItem>
        <NavItem to="changes">
          Changes
        </NavItem>
        <NavItem to="comments">
          Comments
        </NavItem>
      </template>
    </PageNav>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  created () {
    // Redirect user to first content since this page is empty
    const isCurrentPathNotifications = this.$router.currentRoute.path === '/notifications'

    if (isCurrentPathNotifications) {
      // Redirect to relevant content
      this.$router.replace('/notifications/events')
    }
  }
}
</script>

<style>

</style>
