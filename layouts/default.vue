<template>
  <div class="layout">
    <div class="container">
      <Nuxt class="page" />
      <AccountOverlay />
    </div>
    <div class="layout__right-column hidden sm:flex sm:flex-1" />
    <div class="layout__left-column sm:flex sm:flex-1 xs:order-first sm:justify-end sm:px-2">
      <MainNav />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
.page {
  @apply min-h-full;
}
</style>
