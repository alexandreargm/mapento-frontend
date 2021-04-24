<template>
  <div class="already-loggedin space-y-4">
    <span class="already-loggedin__title text-2xl">You are logged in!</span>
    <button type="button" class="already-loggedin__go-main login-form__go-home btn px-12" @click="redirect">
      Go to main page
    </button>
    <LogoutButton class="already-loggedin__logout btn btn--secondary px-12">
      Logout
    </LogoutButton>
  </div>
</template>

<script>
export default {
  methods: {
    redirect () {
      this.$router.push('/')
    }
  }
}
</script>
