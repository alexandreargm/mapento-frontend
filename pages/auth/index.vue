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
    <div v-if="successfulData">
      {{ login.user }}
    </div>
  </div>
</template>

<script>
import { LoginMutation } from '~/graphql/user/mutations.js'
import { LoginQuery } from '~/graphql/user/queries.js'
export default {
  data () {
    return {
      isAuthenticated: false,
      submitting: false,
      login: null,
      error: null,
      credentials: {
        email: '',
        password: ''
      },
      successfulData: null
    }
  },
  apollo: {
    login: {
      query: LoginQuery
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
        // await this.$apolloHelpers.onLogin(res.access_token, undefined, { expires: 7 })
        this.successfulData = res
        this.isAuthenticated = true
      } catch (e) {
        window.console.error(e)
        this.error = e
      }
    },
    async onLogout () {
      await this.$apolloHelpers.onLogout()
      this.isAuthenticated = false
    }
  }
}
</script>
