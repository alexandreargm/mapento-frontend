<template>
  <div class="profile-security-edit bg-white">
    <form class="profile-security-edit__form space-y-6 bg-white p-4 max-w-md">
      <fieldset class="space-y-4">
        <legend class="legend">
          Change password
        </legend>
        <div class="profile-security-edit__field">
          <label for="password" class="profile-security-edit__label label">
            Current password
          </label>
          <input id="password" type="password" autocomplete="password" class="profile-security-edit__input input">
        </div>
        <div class="profile-security-edit__field">
          <label for="new-password" class="profile-security-edit__label label">
            New password
          </label>
          <input id="new-password" type="password" autocomplete="password" class="profile-security-edit__input input" placeholder="Must be at least 8 characters">
        </div>
        <div class="profile-security-edit__field">
          <label for="repeat-new-password" class="profile-security-edit__label label">
            Confirm new password
          </label>
          <input id="repeat-new-password" type="password" autocomplete="password" class="profile-security-edit__input input" placeholder="Must match the new password">
        </div>
      </fieldset>
      <div class="profile-security-edit__actions flex justify-end space-x-4">
        <button class="profile-security-edit__cancel btn btn--secondary">
          Cancel
        </button>
        <button type="submit" class="profile-security-edit__submit btn">
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
      avatar: 'https://picsum.photos/96'
    }
  }
}
</script>

<style lang="postcss">
.profile-security-edit__label {
  @apply mb-1
}
</style>
