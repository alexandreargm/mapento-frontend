<template>
  <div class="layout">
    <div class="container">
      <PageNav>
        <template #pages>
          <NavItem to="/search" :name="'search'">
            Search
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
  name: 'SearchLayout'
}
</script>

<style>

</style>
