<template>
  <div class="profile-preview space-y-4">
    <nuxt-link to="/profile" class="provile-preview__header select-none flex flex-row justify-between">
      <ProfilePhoto :src="me.avatar" class="profile-preview__photo w-24 h-24" />
      <div class="profile-preview__profile-link text-brand">
        Edit profile
      </div>
    </nuxt-link>
    <div class="profile-preview__body">
      <div class="profile-preview__name text-xl font-semibold">
        {{ me.name }}
      </div>
      <div class="profile-preview__email text text-t-light-secondary font-normal">
        {{ me.email }}
      </div>
    </div>
    <div class="profile-preview__footer text-sm py-4">
      <div class="profile-preview__events-on-course">
        {{ eventsOnCourse }} <span class="font-normal">Events on course</span>
      </div>
    </div>
  </div>
</template>

<script>
import { MeQuery } from '~/graphql/user/queries'
export default {
  data () {
    return {
      me: null,
      photoUrl: 'https://picsum.photos/96',
      eventsOnCourse: 2
    }
  },
  apollo: {
    me: {
      query: MeQuery
    }
  }
}
</script>

<style>

</style>
