<template>
  <nuxt-link class="nav-tab flex-1 text-t-light hover:text-brand xs:hover:bg-b-dark text-2xs font-semibold rounded-md" :to="to">
    <div class="nav-tab__inner flex h-12 flex-col xs:flex-row xs:px-4 items-center justify-center xs:justify-start">
      <svg-icon v-if="icon" class="nav-tab__icon xs:svg-28 stroke-1" :name="icon" />
      <div class="nav-tab__title tracking-tight xs:hidden lg:block lg:text-lg lg:ml-4 lg:text-t-dark">
        {{ title }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
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
      default: '#',
      required: false
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-brand;
}
</style>
