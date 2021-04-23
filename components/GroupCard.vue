<template>
  <article class="group-card flex rounded-md bg-b-light overflow-hidden">
    <div class="group-card__image flex-shrink-0">
      <img :src="image" alt="" class="group-card__image bg-brand h-40 w-40">
    </div>
    <div class="group-card__body  flex flex-col p-4 xs:pl-6">
      <div class="group-card__title font-semibold text-t-dark overflow-ellipsis overflow-hidden">
        {{ name }}
      </div>
      <div class="group-card__city text-t-dark-secondary">
        {{ city }}
      </div>
      <div class="group-card__member-count text-t-dark-secondary text-xs mt-2">
        {{ members }} members
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Missing name'
    },
    city: {
      type: String,
      default: 'Missing city'
    }//,
    // image: {
    //   type: String,
    //   default: 'Missing author'
    // },
    // members: {
    //   type: Number,
    //   default: 0
    // }
  },
  data () {
    return {
      image: 'https://picsum.photos/160',
      members: 12
    }
  }
}
</script>

<style lang="postcss">
.group-card__title {
  max-height: 4.5em;
  text-overflow: ellipsis;
}
.group-card__image {}
</style>
