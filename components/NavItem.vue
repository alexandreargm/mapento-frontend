<template>
  <div class="nav-item__wrapper flex items-center">
    <nuxt-link
      v-if="to"
      class="nav-item space-x-4 px-4 inline-flex items-center justify-center rounded-md h-12"
      :to="to"
      :exact="exact"
      :class="handleActiveLink"
    >
      <svg-icon v-if="icon" class="nav-item__icon stroke-1" :name="icon" />
      <span class="nav-item__title">
        <slot />
      </span>
    </nuxt-link>
    <button v-else class="nav-item space-x-4 px-4 inline-flex items-center justify-center rounded-md h-12" @click="$emit('click')">
      <svg-icon v-if="icon" class="nav-item__icon stroke-1" :name="icon" />
      <span class="nav-item__title">
        <slot />
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    handleActiveLink () {
      return this.isActiveLink(this.name) ? 'nav-item--active' : ''
    }
  },
  methods: {
    isActiveLink (routePath) {
      const currentPathNames = this.$route.fullPath.split('/')
      const currentPathNamesClean = currentPathNames.filter((name) => { return name !== '' })
      return currentPathNamesClean.includes(routePath)
    }
  }
}
</script>

<style lang="postcss">
.nuxt-link-exact-active, .nav-item--active {
  @apply text-brand;
  & * {
    @apply text-brand;
  }
}

@media (hover: hover) {
  .nav-item:hover {
    & .nav-item__icon, & .nav-item__title {
      @apply text-brand
    }
    @apply bg-b-dark
  }
}
</style>
