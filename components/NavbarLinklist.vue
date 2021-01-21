<template>
  <div class="navbar__linklist linklist xs:min-w-2xs border-t border-b-medium">
    <div class="linklist__inner flex xs:flex-col">
      <NavbarLink
        v-for="link in navbarLinks"
        :key="link.id"
        v-bind="link"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navbarLinks: [
        {
          title: 'Home',
          to: '/',
          icon: 'outline/home'
        },
        {
          title: 'Search',
          to: '/search',
          icon: 'outline/search'
        },
        {
          title: 'Agenda',
          to: '/agenda',
          icon: 'outline/bookmark'
        },
        {
          title: 'Notifications',
          to: '/notifications',
          icon: 'outline/bell'
        },
        {
          title: 'Account',
          to: '/account',
          icon: 'outline/user'
        }
      ]
    }
  }
}
</script>

<style>

</style>
