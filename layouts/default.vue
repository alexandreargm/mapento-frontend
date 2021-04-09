<template>
  <div class="layout__inner flex flex-col xs:flex-row h-full">
    <div class="container relative xs:max-w-tablet md:max-w-laptop flex-1">
      <Nuxt class="page h-full" />
      <AccountOverlay />
    </div>
    <NavBar class="bg-b-light xs:order-first xs:border-t-0 xs:border-r sm:px-2" />
  </div>
</template>

<script>
</script>

<style></style>
