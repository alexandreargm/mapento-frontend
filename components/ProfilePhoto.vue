<template>
  <img :src="src" alt="Profile photo" class="rounded-full bg-brand h-24 w-24">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
