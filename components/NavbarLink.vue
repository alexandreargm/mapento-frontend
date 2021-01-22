<template>
  <nuxt-link class="navbar__link link flex flex-1" :to="to">
    <div class="link__inner h-12 flex flex-col flex-grow sm:flex-row items-center justify-center text-t-light-secondary hover:text-t-light xs:flex-row xs:justify-start sm:p-3">
      <svg-icon v-if="icon" class="link__icon svg-28" :name="icon" />
      <div class="link__title text-2xs font-semibold tracking-tight xs:hidden sm:block  xs:text-lg xs:ml-4">
        {{ title }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavbarLinks',
  props: {
    title: {
      type: String,
      default: 'título'
    },
    icon: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style>
.nuxt-link-exact-active {
  @apply text-t-light;
}
</style>
