<template>
  <div class="feed-filter-item">
    <button class="feed-filter-item__toggle" @click="openModal">
      {{ label }}
      <svg-icon
        class="feed-filter-item__toggle-icon svg-16"
        name="solid/chevron-down"
      />
    </button>
    <div v-show="isOpen" class="feed-filter-item__modal">
      <div
        class="feed-filter-item__modal-inner flex flex-col justify-between p-6 space-y-6"
      >
        <div class="feed-filter-item__content overflow-y-auto">
          <slot />
        </div>
        <div class="feed-filter-item__actions flex space-x-4 justify-end">
          <slot name="actions" />
          <button class="btn btn--simple" @click="closeModal">
            Cancel
          </button>
          <button class="btn" @click="closeModal">
            Apply
          </button>
        </div>
      </div>
    </div>
    <div
      v-show="isOpen"
      class="feed-filter-item__modal-overlay"
      @click="closeModal"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Filter'
    }
  },
  data () {
    return {
      focused: false,
      isOpen: false
    }
  },
  methods: {
    openModal () {
      this.isOpen = true
    },
    closeModal () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss">
.feed-filter-item {
  &__toggle {
    text-transform: capitalize;
    @apply flex items-center font-semibold text-xs text-brand px-3 h-10 rounded-md cursor-pointer select-none whitespace-no-wrap;
  }

  &__modal {
    $gap-width: 16px;
    @apply rounded-md bg-b-light fixed left-0 bottom-0 z-30 w-full;
    @screen xs {
      @apply min-w-sm max-w-md bottom-auto;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__modal-inner {
    max-height: 80vh;
    min-height: 80vh;
    @screen xs {
      min-height: auto;
    }
  }

  &__content {
    @apply overflow-y-auto;
  }

  &__modal-overlay {
    background: rgba(0, 0, 0, 0.2);
    content: "";
    height: 9999px;
    left: 0;
    position: fixed;
    top: 0;
    width: 9999px;
    z-index: 10;
  }
}
</style>
