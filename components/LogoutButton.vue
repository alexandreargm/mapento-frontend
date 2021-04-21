<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script>
import { LogoutMutation } from '~/graphql/user/mutations.js'
export default {
  methods: {
    onClick () {
      this.onLogout()
      this.$emit('click')
    },
    async onLogout () {
      // Revoke auth token
      this.$apollo.mutate({ mutation: LogoutMutation })

      // Remove auth cookies
      await this.$apolloHelpers.onLogout()
        .then(() => {
          this.$cookies.remove('__mapento_user_id')
        })
    }
  }
}
</script>
