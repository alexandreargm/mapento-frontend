<template>
  <div class="proximos-eventos" />
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    events: gql`
      query {
        events
        {
          id
          title
        }
      }
    `
  }
}
</script>

<style>

</style>
