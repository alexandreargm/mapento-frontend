<template>
  <div class="layout">
    <div class="container">
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
      <Nuxt class="page" />
      <AccountOverlay />
    </div>
    <MainNav class="bg-b-light xs:order-first xs:border-t-0 xs:border-r sm:px-2" />
  </div>
</template>

<script>
export default {
  name: 'NotificationsLayout'
}
</script>

<style>

</style>
