<template>
  <div class="layout">
    <div class="container container--theme-light">
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
    <MainNav class="xs:order-first sm:px-2" />
  </div>
</template>

<script>
export default {
  name: 'ProfileEditLayout'
}
</script>

<style>

</style>
