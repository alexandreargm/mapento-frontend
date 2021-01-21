<template>
  <div class="navbar__linklist linklist">
    <div class="linklist__inner">
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
          icon: 'github'
        },
        {
          title: 'Search',
          to: '/search'
        },
        {
          title: 'Agenda',
          to: '/agenda'
        },
        {
          title: 'Notifications',
          to: '/notifications'
        },
        {
          title: 'Account',
          to: '/account'
        }
      ]
    }
  }
}
</script>

<style>

</style>
