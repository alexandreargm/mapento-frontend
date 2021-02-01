<template>
  <nuxt-link :tag="tag" class="nav-item flex px-4 items-center space-x-4 hover:text-brand hover:bg-b-dark" :to="to">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '#',
      required: false
    },
    tag: {
      type: String,
      default: 'a',
      required: false
    }
  }
}
</script>
