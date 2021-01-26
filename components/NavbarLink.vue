<template>
  <nuxt-link class="link flex-1 text-t-light hover:text-brand xs:hover:bg-b-dark text-2xs font-semibold rounded-md" :to="to">
    <div class="link__inner flex h-12 flex-col xs:flex-row xs:px-4 items-center justify-center xs:justify-start">
      <svg-icon v-if="icon" class="link__icon xs:svg-28 stroke-1" :name="icon" />
      <div class="link__title tracking-tight xs:hidden lg:block lg:text-lg lg:ml-4 lg:text-dark">
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
  @apply text-brand;
}
</style>
