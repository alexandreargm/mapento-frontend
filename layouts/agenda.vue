<template>
  <div class="layout__inner layout-default flex flex-col xs:flex-row h-full xl:justify-center">
    <div class="container relative xs:max-w-tablet md:max-w-laptop flex-1 overflow-y-auto bg-b-dark">
      <PageNav>
        <template #pages>
          <NavItem to="/agenda/events/following" :name="'events'">
            Events
          </NavItem>
          <NavItem to="/agenda/groups/following" :name="'groups'">
            Groups
          </NavItem>
        </template>
        <template #subpages>
          <NavItem to="following">
            Following
          </NavItem>
          <NavItem to="organized">
            Organized
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
  name: 'AgendaLayout'
}
</script>

<style>

</style>
