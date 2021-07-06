<template>
  <section class="profile space-y-6 bg-white p-4">
    <div class="profile__head xs:flex xs:space-x-6 xs:items-end">
      <ProfilePhoto :src="avatar" class="profile__avatar" />
      <div class="profile__details">
        <div class="profile__name text-2xl font-semibold">
          {{ name }}
        </div>
      </div>
    </div>
    <div class="profile_description text-sm">
      {{ description }}
    </div>
    <div class="profile__actions flex space-x-6">
      <button class="profile__follow btn">
        Follow
      </button>
      <button class="profile__alert btn btn--icon btn--secondary">
        <Icon name="outline/bell" />
      </button>
      <button class="profile__edit btn btn--secondary">
        Edit
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: 'No description.'
    }
  }
}
</script>

<style>

</style>
