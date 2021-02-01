<template>
  <div class="proximos-eventos">
    <ApolloQuery
      :query="gql => gql`
        query {
          events {
            data {
              id
              title
            }
          }
        }
      `"
    >
      <!-- The result will automatically updated -->
      <template slot-scope="{ result: { data, loading } }">
        <!-- Some content -->
        <div v-if="loading">
          Loading...
        </div>
        <ul v-else>
          <li v-for="event of data.events.data" :key="event.id">
            {{ event.title }}
          </li>
        </ul>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
