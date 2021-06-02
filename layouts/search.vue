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
    <MainNav class="bg-b-light xs:order-first xs:border-t-0 xs:border-r sm:px-2" />
  </div>
</template>

<script>
export default {
  name: 'SearchLayout'
}
</script>

<style>

</style>
