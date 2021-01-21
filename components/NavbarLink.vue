<template>
  <nuxt-link class="navbar__link link flex flex-col items-center xs:inline-flex p-1" :to="to">
    <svg-icon v-if="icon" class="link__icon" :name="icon" />
    <div class="link__title text-xs">
      {{ title }}
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

</style>
