<template>
  <div class="container relative">
    <main id="main" class="page" role="main">
      <slot />
    </main>
    <aside id="sidebar">
      <slot name="sidebar" />
    </aside>
    <AccountOverlay />
    <slot name="overlay" />
  </div>
</template>

<script>
export default {

}
</script>
