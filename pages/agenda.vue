<template>
  <div class="agenda-page">
    <PageNav>
      <template #pages>
        <NavItem to="/agenda/events/following" :name="'events'">
          Events
        </NavItem>
        <NavItem to="/agenda/groups/following" :name="'groups'">
          Groups
        </NavItem>
      </template>
      <template #subpages>
        <NavItem to="following">
          Following
        </NavItem>
        <NavItem to="organized">
          Organized
        </NavItem>
      </template>
    </PageNav>
    <NuxtChild class="page" />
  </div>
</template>

<script>
export default {
  created () {
    // Redirect user to first content since this page is empty
    const isCurrentPathAgenda = this.$router.currentRoute.path === '/agenda'

    if (isCurrentPathAgenda) {
      // Redirect to relevant content
      this.$router.replace('/agenda/events/following')
    }
  }
}
</script>

<style>

</style>
