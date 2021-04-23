<template>
  <div class="layout__inner layout-default flex flex-col xs:flex-row h-full xl:justify-center">
    <div class="container relative xs:max-w-tablet md:max-w-laptop flex-1 overflow-y-auto bg-b-dark">
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
