<template>
  <div class="layout__inner layout-profile-edit flex flex-col xs:flex-row h-full xl:justify-center">
    <div class="container relative xs:max-w-tablet md:max-w-laptop flex-1 overflow-y-auto">
      <PageNav>
        <template #pages>
          <NavItem to="/profile" :name="'profile'">
            Profile
          </NavItem>
        </template>
        <template #subpages>
          <NavItem to="details">
            Details
          </NavItem>
          <NavItem to="security">
            Security
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
  name: 'ProfileEditLayout'
}
</script>

<style>

</style>
