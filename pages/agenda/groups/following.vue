<template>
  <FeedList noresults="You are not following any group" class="agenda-groups-following">
    <GroupCard
      v-for="group in groups"
      :key="group.id"
      :name="group.name"
      :city="group.city"
      :image="group.image"
      :isprivate="group.private"
      :category="group.category.name"
    />
  </FeedList>
</template>

<script>
import { UserGroupsQuery } from '~/graphql/user/queries'
export default {
  layout: 'agenda',
  data () {
    return {
      groups: null
    }
  },
  apollo: {
    groups: {
      query: UserGroupsQuery,
      update: data => data.me.groups
    }
  }
}
</script>

<style>

</style>
