<template>
  <div class="layout__inner flex flex-col xs:flex-row h-full xl:justify-center">
    <div class="container relative xs:max-w-tablet md:max-w-laptop flex-1">
      <Nuxt class="page h-full bg-b-dark" />
      <AccountOverlay />
    </div>
    <MainNav class="bg-b-light xs:order-first xs:border-t-0 xs:border-r sm:px-2" />
  </div>
</template>

<script>
export default {
}
</script>

<style></style>
