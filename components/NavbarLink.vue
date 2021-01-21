<template>
  <nuxt-link class="navbar__link link" :to="to">
    <i v-if="icon" class="link__icon" :data-eva="icon" />
    <div class="link__title">
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
