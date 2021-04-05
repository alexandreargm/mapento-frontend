<template>
  <div class="profile-preview">
    <nuxt-link to="/profile" class="provile-preview__header select-none flex flex-row justify-between py-4">
      <ProfilePhoto :src="photoUrl" class="profile-preview__photo w-24 h-24" />
      <div class="profile-preview__profile-link text-brand">
        See profile
      </div>
    </nuxt-link>
    <div class="profile-preview__body py-4 space-y-4">
      <div class="profile-preview__details">
        <div v-if="login" class="profile-preview__name text-xl">
          {{ login.user.name }}
        </div>
        <div v-if="login" class="profile-preview__id text text-t-light-secondary font-normal">
          {{ login.user.email }}
        </div>
      </div>
      <div class="profile-preview__footer text-sm">
        <div class="profile-preview__events-on-course">
          {{ eventsOnCourse }} <span class="font-normal">Events on course</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginQuery } from '~/graphql/user/queries'
export default {
  data () {
    return {
      login: null,
      photoUrl: 'https://picsum.photos/96',
      name: 'Jesús García',
      account: '@JesusG',
      eventsOnCourse: 2
    }
  },
  apollo: {
    login: {
      query: LoginQuery,
      update: data => data.login
    }
  }
}
</script>

<style>

</style>
