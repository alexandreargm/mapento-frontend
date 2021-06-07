<template>
  <div class="default-layout">
    <div class="default-layout__container flex-1 sm:flex-initial">
      <Nuxt class="default-layout__page" />
      <AccountOverlay />
    </div>
    <div class="default-layout__right-column hidden sm:flex sm:flex-1" />
    <div class="default-layout__left-column sm:flex sm:flex-1 xs:order-first sm:justify-end sm:px-2">
      <MainNav />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss">

  .default-layout {
    @apply flex flex-col h-full;
    @screen xs {
      @apply flex-row;
    }

    &__container {
      border: 1px solid;
      @apply bg-b-dark relative overflow-y-auto w-full max-w-tablet-landscape border-b-medium border-t-0;
    }

    &__page {
      @apply min-h-full;
    }
  }
</style>
