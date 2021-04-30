<template>
  <img :src="src" alt="Profile photo" class="rounded-full bg-b-medium">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '/default_avatar.svg'
    }
  }
}
</script>

<style>

</style>
