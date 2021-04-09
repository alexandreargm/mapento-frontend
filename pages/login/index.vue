<template>
  <div>
    This is the landing page. Please log in to get credentials to visit secret
    page 'Page A'

    <form v-if="!isAuthenticated" @submit.prevent="onSubmit">
      <table>
        <tbody>
          <tr>
            <td>
              <label>Username</label>
            </td>
            <td>
              <input v-model="credentials.email" type="text" required>
            </td>
          </tr>
          <tr>
            <td>
              <label>Password</label>
            </td>
            <td>
              <input v-model="credentials.password" type="password" required>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="submitting">
        Submitting ....
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
    <div v-else>
      You are logged in!
      <button type="button" @click="onLogout">
        Logout
      </button>
    </div>
    <div v-if="error" style="color: red">
      {{ error }}
    </div>
    <div v-if="isAuthenticated">
      <!-- {{ login.user }} -->
      <!-- Hola mundo -->
    </div>
  </div>
</template>

<script>
import { LoginMutation, LogoutMutation } from '~/graphql/user/mutations.js'
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
  mounted () {
    this.isAuthenticated = !!this.$apolloHelpers.getToken()
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
              window.console.error(e)
              this.error = e
            }
          }
        }).then(({ data: { login } }) => login)
        await this.$apolloHelpers.onLogin(res.access_token)
          .then(() => {
            const maxAge = 60 * 60 * 24 * 7
            this.$cookies.set('__mapento_user_id', res.user.id, { maxAge, sameSite: 'strict' })
          })
        this.isAuthenticated = true
        this.$router.push('/')
      } catch (e) {
        window.console.error(e)
        this.error = e
      }
    },
    async onLogout () {
      // Revoke auth token
      this.$apollo.mutate({ mutation: LogoutMutation })

      // Remove auth cookies
      await this.$apolloHelpers.onLogout()
        .then(() => {
          this.$cookies.remove('__mapento_user_id')
          this.isAuthenticated = false
        })
    }
  }
}
</script>
