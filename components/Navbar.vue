<template>
  <nav class="navbar sticky bottom-0 flex border-t select-none border-b-medium xs:flex-col lg:min-w-2xs">
    <List class="navbar__list flex flex-grow-1 xs:flex-grow-0 w-full xs:flex-col xs:py-2 xs:space-y-2">
      <NavbarLink title="Home" to="/" icon="outline/home" />
      <NavbarLink title="Search" to="/search" icon="outline/search" />
      <NavbarLink title="Agenda" to="/agenda" icon="outline/bookmark" />
      <NavbarLink title="Notifications" to="/notifications" icon="outline/bell" />
      <NavbarLink title="Account" to="/account" icon="outline/user" />
    </List>
  </nav>
</template>

<script>
export default {
}
</script>

<style>

</style>
