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
  min-height: 40px;
  @apply rounded-full bg-b-light px-8 font-semibold select-none flex items-center whitespace-no-wrap;
}

.button:disabled {
  @apply bg-b-medium text-t-dark;
}

.button--outline {
  @apply bg-opacity-0 border-solid border-2;
}
.button--simple {
  @apply bg-opacity-0;
}

.button--primary {
  @apply bg-brand border-brand text-white;

  &.button--simple {
    @apply text-brand bg-opacity-0;
  }
}
.buttton--secondary {
  @apply bg-b-dark border-b-dark text-t-dark-secondary;
}

.button--sm {
  min-height: 32px;
  @apply text-sm px-4;
}
.button--lg {
  min-height: 64px;
  @apply text-lg px-8;
}

.button--fluid {
  @apply w-full;
}
</style>
