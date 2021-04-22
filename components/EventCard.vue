<template>
  <article class="event-card bg-white rounded-md p-4 space-y-4">
    <div class="event-card__body">
      <div class="event-card__category text-xs mb-1">
        {{ category }}
      </div>
      <div class="event-card__title font-semibold">
        {{ title }}
      </div>
    </div>
    <div class="event-card__footer flex">
      <div class="event-card__user-avatar-wrapper w-12">
        <img :src="user.avatar" class="event-card__user-avatar w-8 h-8 flex-shrink-0 bg-brand rounded-full">
      </div>
      <div class="event-card__details text-t-light-secondary text-xs flex items-center ">
        {{ user.name }} · {{ date }} {{ city }} · {{ participants }} participants
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      category: 'Ocio',
      title: 'Tarde de rol de mesa en tienda de comics Megaland',
      date: 'Vier. 21 feb.',
      city: 'Torrevieja',
      participants: 16,
      user: {
        name: 'Luis Fontsera',
        avatar: 'https://picsum.photos/32'
      }
    }
  }
}
</script>

<style>

</style>
