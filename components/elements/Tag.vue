<template>
  <span class="tag" :class="getComponentVariant">
    <slot />
  </span>
</template>

<script>
import { variantPropDefinition, getVariantString } from '~/plugins/component-utils'

export default {
  props: {
    variant: variantPropDefinition
  },
  computed: {
    getComponentVariant () {
      return getVariantString('tag', this.variant)
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
