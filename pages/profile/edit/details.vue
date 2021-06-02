<template>
  <div class="profile-details-edit ">
    <form class="profile-details-edit__form space-y-6 p-4">
      <div class="profile-details-edit__avatar">
        <label for="avatar" class="profile-details-edit__avatar-label label mb-2">
          Avatar
        </label>
        <div class="profile-details-edit__avatar-input space-y-2">
          <ProfilePhoto class="h-16 w-16 sm:w-24 sm:h-24" />
          <input
            id="avatar"
            class="input-file"
            type="file"
            accept="image/png, image/jpeg"
            @change="changeAvatar"
          >
        </div>
      </div>
      <div class="profile-details-edit__name">
        <label for="name" class="profile-details-edit__name-label label mb-2">
          Name
        </label>
        <input id="name" type="text" autocomplete="name" class="profile-details-edit__name-input input">
      </div>
      <div class="profile-details-edit__description">
        <label for="description" class="profile-details-edit__description-label label mb-2">
          Description
        </label>
        <textarea id="description" type="text" class="profile-details-edit__description-textarea textarea" :value="description" rows="3" />
      </div>
      <div class="profile-details-edit__actions flex justify-end space-x-4">
        <button class="profile-details-edit__cancel btn btn--simple">
          Cancel
        </button>
        <button type="submit" class="profile-details-edit__submit btn">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'profileEdit',
  data () {
    return {
      name: 'Alexandre Argibay',
      avatar: 'https://picsum.photos/96',
      description: 'Lorem ipsum officia quis minim cupidatat cillum incididunt consequat dolore.'
    }
  },
  methods: {
    changeAvatar (event) {
      console.log(event)
    }
  }
}
</script>

<style>

</style>
