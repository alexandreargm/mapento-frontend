<template>
  <div class="layout__inner layout-agenda flex flex-col xs:flex-row h-full xl:justify-center">
    <div class="container relative xs:max-w-tablet md:max-w-laptop flex-1 overflow-y-auto bg-b-dark">
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
