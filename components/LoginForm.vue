<template>
  <div class="w-full select-none space-y-6">
    <h1 class="text-3xl font-extrabold leading-10">
      Log in to Mapento
    </h1>
    <div v-if="!isAuthenticated" class="login-form__wrapper space-y-6">
      <form class="login-form space-y-4 w-full" @submit.prevent="onSubmit">
        <div class="login-form__username flex flex-col">
          <label class="label">Username</label>
          <input v-model="credentials.email" type="text" required autocomplete="username" class="input">
        </div>
        <div class="login_form__pasword flex flex-col">
          <label class="label">Password</label>
          <input v-model="credentials.password" type="password" required autocomplete="current-password" class="input">
        </div>

        <button :disabled="false" class="login-form__submit btn px-12" type="submit">
          <span v-if="!submitting" class="login-form__submit-button">Submit</span>
          <span v-else class="login-form__submit-submitting">Submitting...</span>
        </button>
        <div v-if="error" class="login-form__error" style="color: red">
          {{ error }}
        </div>
      </form>
      <HSeparator />
      <nav class="more-actions space-y-2">
        <NavItem to="/register" class="more-actions__register">
          Register
        </NavItem>
        <NavItem to="/password" class="more-actions__forgot-password">
          Forgot your password?
        </NavItem>
      </nav>
    </div>
    <AlreadyLoggedin v-else />
  </div>
</template>

<script>
import { isAuthenticatedQuery } from '~/graphql/user/localQueries'
import { LoginMutation } from '~/graphql/user/mutations'
export default {
  layout: 'login',
  data () {
    return {
      isAuthenticated: false,
      submitting: false,
      error: null,
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  apollo: {
    isAuthenticated: {
      query: isAuthenticatedQuery
    }
  },
  methods: {
    async onSubmit () {
      this.submitting = true
      const credentials = this.credentials
      try {
        const res = await this.$apollo.mutate({
          mutation: LoginMutation,
          variables: credentials,
          update: (cache, { data: { login } }) => {
            try {
              cache.writeData({ data: { login } })
            } catch (e) {
              this.error = e
            }
          }
        }).then(({ data: { login } }) => login)
        await this.$apolloHelpers.onLogin(res.access_token)
          .then(() => {
            const maxAge = 60 * 60 * 24 * 7
            this.$cookies.set('__mapento_user_id', res.user.id, { maxAge, sameSite: 'strict' })
          })
        this.$router.push('/')
      } catch (e) {
        this.submitting = false
        this.error = e
      }
    }
  }
}
</script>

<style>

</style>
