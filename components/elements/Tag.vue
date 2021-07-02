<template>
  <span class="tag" :class="getComponentVariant">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    variant: {
      type: [Array, String],
      default: ''
    }
  },
  computed: {
    getComponentVariant () {
      const withPrefix = variant => `tag--${variant}`

      if (typeof this.variant === 'string') {
        return withPrefix(this.variant)
      }

      return this.variant.map(variant => withPrefix(variant))
    }
  }
}
</script>

<style lang="scss">
  .tag {
    @apply rounded-md bg-b-light-secondary px-1;
  }

  .tag--outline {
    @apply bg-opacity-0 border-1 border-b-medium;
  }
  .tag--minimal {
    @apply bg-opacity-0 border-0;
  }

  .tag--primary {
    @apply bg-brand border-brand text-white;
  }
  .tag--secondary {
    @apply bg-b-dark border-b-dark text-t-dark;
  }

  .tag--xs {
    @apply text-xs;
  }

  .tag--semibold {
    @apply font-semibold;
  }
</style>
