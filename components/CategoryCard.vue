<template>
  <article class="category-card p-4 h-16 flex items-center bg-b-light rounded-md">
    <div class="category-card__name font-semibold leading-5">
      {{ name }}
    </div>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
