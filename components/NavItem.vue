<template>
  <div class="nav-item__wrapper flex items-center">
    <nuxt-link v-if="to" class="nav-item space-x-4 px-4 inline-flex items-center justify-center hover:text-brand hover:bg-b-dark rounded-md h-12" :to="to">
      <svg-icon v-if="icon" class="nav-item__icon stroke-1" :name="icon" />
      <span class="nav-item__title">
        <slot />
      </span>
    </nuxt-link>
    <button v-else class="nav-item space-x-4 px-4 inline-flex items-center justify-center hover:text-brand hover:bg-b-dark rounded-md h-12" @click="$emit('click')">
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
      default: '',
      required: false
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>
