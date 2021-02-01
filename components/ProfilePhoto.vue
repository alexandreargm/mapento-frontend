<template>
  <img :src="src" alt="Profile photo" class="rounded-full bg-brand">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'https://picsum.photos/64'
    }
  }
}
</script>

<style>

</style>
