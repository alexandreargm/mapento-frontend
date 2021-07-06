<template>
  <svg-icon class="icon" :name="name" :title="title" :desc="desc" :class="getComponentVariant" />
</template>

<script>
import { variantPropDefinition, getVariantString } from '~/plugins/component-utils'
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    variant: variantPropDefinition
  },
  computed: {
    getComponentVariant () {
      return getVariantString('icon', this.variant)
    }
  }
}
</script>

<style lang="scss">
  $icon-sizes: (
      xs: 16px, sm: 18px, md: 20px, lg: 28px, xl: 32px, 2xl: 36px,
      3xl: 40px, 4xl: 48px
    );

  .icon {
    height: 24px;
    width: 24px;
  }

  @each $variantName, $size in $icon-sizes {
    .icon--#{$variantName} {
      height: $size;
      width: $size;
    }
  }
</style>
