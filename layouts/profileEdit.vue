<template>
  <div class="layout">
    <div class="container container_theme_light">
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
    <MainNav class="xs:order-first xs:border-t-0 xs:border-r sm:px-2" />
  </div>
</template>

<script>
export default {
  name: 'ProfileEditLayout'
}
</script>

<style>

</style>
