<template>
  <div class="layout">
    <div class="container">
      <Nuxt class="page" />
      <AccountOverlay />
    </div>
    <MainNav class="bg-b-light xs:order-first xs:border-t-0 xs:border-r sm:px-2" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style></style>
