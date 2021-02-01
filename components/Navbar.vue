<template>
  <nav class="navbar sticky bottom-0 flex border-t select-none border-b-medium xs:flex-col lg:min-w-2xs">
    <div class="navbar__list flex flex-grow-1 xs:flex-grow-0 w-full xs:flex-col xs:py-2 xs:space-y-2">
      <NavTab title="Home" to="/" icon="outline/home" />
      <NavTab title="Search" to="/search" icon="outline/search" />
      <NavTab title="Agenda" to="/agenda" icon="outline/bookmark" />
      <NavTab title="Notifications" to="/notifications" icon="outline/bell" />
      <NavTab title="Account" to="#account" icon="outline/user" />
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style>

</style>
