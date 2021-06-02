<template>
  <article class="group-card flex rounded-md bg-b-light overflow-hidden">
    <div class="group-card__image flex-shrink-0">
      <img :src="image" alt="" class="group-card__image bg-brand h-40 w-40">
    </div>
    <div class="group-card__content p-4 xs:pl-6">
      <div class="group-card__head flex flex-wrap mb-1">
        <div class="group-card__category text-xs mr-3">
          {{ category }}
        </div>
        <div v-if="isprivate" class="group-card__private flex">
          <span class="group-card__private-title px-1 bg-b-dark text-xs font-semibold rounded-md">
            Private
          </span>
        </div>
      </div>
      <div class="group-card__body mb-1">
        <div class="group-card__title font-semibold text-t-dark overflow-ellipsis overflow-hidden">
          {{ name }}
        </div>
      </div>
      <div class="group-card__footer">
        <span class="group-card__city text-t-dark-secondary text-xs">
          {{ city }}
        </span>
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
    },
    image: {
      type: String,
      default: 'Missing author'
    },
    isprivate: {
      type: Boolean,
      default: false
    },
    category: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss">
.group-card__title {
  max-height: 4.5em;
  text-overflow: ellipsis;
}
</style>
