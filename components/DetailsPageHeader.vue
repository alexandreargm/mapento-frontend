<template>
  <header class="details-page-header bg-b-light flex items-center pt-4">
    <button class="flex items-center h-16 w-16 px-4" @click="routerGoBack">
      <Icon name="solid/arrow-left" variant="xl" />
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    routerGoBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
