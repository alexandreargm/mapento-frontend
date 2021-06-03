<template>
  <div class="profile-page bg-b-light">
    <PageNav>
      <template #pages>
        <NavItem to="/profile/edit/details" :name="'profile'">
          Profile
        </NavItem>
      </template>
      <template #subpages>
        <NavItem to="details">
          Details
        </NavItem>
        <NavItem to="security">
          Security
        </NavItem>
      </template>
    </PageNav>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  created () {
    // Redirect user to first content since this page is empty
    const isCurrentPathDesired = this.$router.currentRoute.path === '/profile'

    if (isCurrentPathDesired) {
      // Redirect to relevant content
      this.$router.replace('/profile/edit/details')
    }
  }
}
</script>

<style>

</style>
