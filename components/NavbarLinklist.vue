<template>
  <div class="navbar__linklist linklist">
    <div class="linklist__inner flex xs:flex-col xs:space-y-2">
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
          to: '#',
          icon: 'outline/user'
        }
      ]
    }
  }
}
</script>

<style>

</style>
