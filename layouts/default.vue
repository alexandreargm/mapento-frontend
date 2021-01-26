<template>
  <div class="layout__inner flex flex-col xs:flex-row h-full xs:justify-end sm:justify-center relative">
    <Nuxt class="bg-b-dark flex-grow-1 xs:max-w-tablet md:max-w-laptop relative" />
    <Navbar class="bg-b-light xs:order-first xs:border-t-0 xs:border-r sm:px-2" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style></style>
