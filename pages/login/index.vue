<template>
  <div class="page-login flex flex-col sm:flex-row select-none">
    <main class="sm:w-1/2 bg-b-light sm:order-1 p-6 xs:px-12 flex flex-col justify-center space-y-6">
      <LoginForm class="max-w-sm" />
    </main>
    <div class="sm:w-1/2 bg-b-dark xs:order-0">
      Decoración
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login'
}
</script>

<style>

</style>
