<template>
  <button class="button" :class="getComponentVariant" @click="$emit('click')">
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
  flex-shrink: 0;
  min-height: 40px;
  min-width: 40px;
  @apply rounded-full bg-b-light px-8 font-semibold select-none flex items-center whitespace-no-wrap text-brand;
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

  &.button--simple,
  &.button--outline {
    @apply text-brand bg-opacity-0;
  }
}
.buttton--secondary {
  @apply bg-b-dark border-b-dark text-t-dark-secondary;

  &.button--simple,
  &.button--outline {
    @apply text-t-dark-secondary bg-opacity-0;
  }
}

.button--sm {
  min-height: 32px;
  min-width: 32px;
  @apply text-sm px-4;
}
.button--md {
  min-height: 40px;
  min-width: 40px;
  @apply text-base px-4;
}
.button--lg {
  min-height: 64px;
  min-width: 64px;
  @apply text-lg px-8;
}
.button--icon {
  @apply p-0 justify-center;
}

.button--fluid {
  @apply w-full;
}
</style>
