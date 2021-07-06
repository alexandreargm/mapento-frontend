<template>
  <button class="button" :class="getComponentVariant">
    <slot />
  </button>
</template>

<script>
import { variantPropDefinition, getVariantString } from '~/plugins/component-utils'

export default {
  props: {
    variant: variantPropDefinition
  },
  computed: {
    getComponentVariant () {
      return getVariantString('button', this.variant)
    }
  }
}
</script>

<style lang="scss">
.button {
  @apply rounded-full bg-b-light-secondary px-8 py-3 font-semibold select-none flex;

  & .icon {
    order: -9999;
    @apply mr-2;
  }
}

.button:disabled {
  @apply bg-b-medium text-t-dark;
}

.button--outline {
  @apply bg-opacity-0 border-solid border-2;
}
.button--simple {
  @apply bg-opacity-0 border-0;
}

.button--primary {
  @apply bg-brand border-brand text-white;
}
.buttton--secondary {
  @apply bg-b-dark border-b-dark text-t-dark-secondary;
}

.button--sm {
  @apply text-sm px-3 py-1;
}
.button--lg {
  @apply text-lg px-8 py-4;
}

.button--fluid {
  @apply w-full;
}

.button--icon-right {
  order: 0;
  @apply flex-row-reverse;

  & .icon {
    @apply ml-2 mr-0;
  }
}
</style>
