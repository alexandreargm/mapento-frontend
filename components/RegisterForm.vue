<template>
  <div class="w-full select-none space-y-6 max-w-tablet">
    <h1 class="text-3xl font-extrabold leading-10">
      Create a Mapento account
    </h1>
    <div v-if="!isAuthenticated" class="register-form__wrapper space-y-6">
      <form class="register-form space-y-4 w-full" @submit.prevent="onSubmit">
        <div class="register-form__username flex flex-col">
          <label class="label">Username</label>
          <input v-model="credentials.email" type="text" required autocomplete="username" class="input">
        </div>
        <div class="register_form__pasword flex flex-col">
          <label class="label">Password</label>
          <input v-model="credentials.password" type="password" required autocomplete="current-password" class="input">
        </div>

        <button :disabled="submitting" class="register-form__submit btn px-12" type="submit">
          <span v-if="!submitting" class="register-form__submit-button">Submit</span>
          <span v-else class="register-form__submit-submitting">Submitting...</span>
        </button>
        <div v-if="error" class="register-form__error" style="color: red">
          {{ error }}
        </div>
      </form>
      <HSeparator />
      <nav class="more-actions space-y-2">
        <NavItem to="/login" class="more-actions__register">
          Log in with an existing account
        </NavItem>
      </nav>
    </div>
    <AlreadyLoggedin v-else />
  </div>
</template>

<script>
import { isAuthenticatedQuery } from '~/graphql/user/localQueries'
export default {
  data () {
    return {
      credentials: {
        email: '',
        password: '',
        repeatPassword: ''
      },
      isAuthenticated: false,
      submitting: false,
      error: null
    }
  },
  apollo: {
    isAuthenticated: { query: isAuthenticatedQuery }
  },
  methods: {
    onSubmit () {
      return true
    }
  }
}
</script>
