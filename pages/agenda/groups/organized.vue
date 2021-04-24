<template>
  <FeedList :items="groups" class="agenda-groups-organized">
    <GroupCard
      v-for="group in groups"
      :key="group.id"
      :name="group.name"
      :city="group.city"
      :image="group.image"
      :category="group.category.name"
    />
    <template #empty class="agenda-events__empty">
      No groups created yet
    </template>
  </FeedList>
</template>

<script>
import { UserGroupOwnerQuery } from '~/graphql/user/queries'
export default {
  layout: 'agenda',
  data () {
    return {
      groups: null
    }
  },
  apollo: {
    groups: {
      query: UserGroupOwnerQuery,
      update: data => data.me.group_owner
    }
  }
}
</script>

<style>

</style>
