<template>
  <div>
    <main id="main" role="main">
      <slot />
    </main>
    <slot name="sidebar" />
    <slot name="overlay" />
  </div>
</template>

<script>
export default {

}
</script>
