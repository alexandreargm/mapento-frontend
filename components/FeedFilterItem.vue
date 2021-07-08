<template>
  <div class="feed-filter-item" :class="getComponentVariant">
    <button class="feed-filter-item__toggle" @click="openModal">
      {{ label }}
      <Icon
        class="feed-filter-item__toggle-icon"
        name="solid/chevron-down"
        variant="sm"
      />
    </button>
    <div v-show="isOpen" class="feed-filter-item__modal">
      <div
        class="feed-filter-item__modal-inner flex flex-col justify-between p-6 space-y-6"
      >
        <div class="feed-filter-item__content">
          <slot />
        </div>
        <div class="feed-filter-item__actions flex space-x-4 justify-end">
          <slot name="actions" />
          <Button :variant="['secondary','simple']" @click="closeModal">
            Cancel
          </Button>
          <Button variant="primary" @click="closeModal">
            Apply
          </Button>
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
import { variantPropDefinition, getVariantString } from '~/plugins/component-utils'
export default {
  props: {
    label: {
      type: String,
      default: 'Filter'
    },
    variant: variantPropDefinition
  },
  data () {
    return {
      focused: false,
      isOpen: false
    }
  },
  computed: {
    getComponentVariant () {
      return getVariantString('feed-filter-item', this.variant)
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
    @apply flex items-center font-semibold text-sm text-brand px-3 h-10 rounded-md cursor-pointer select-none whitespace-no-wrap;
  }

  &__modal {
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

.feed-filter-item--no-scroll .feed-filter-item {
  &__content {
    @apply overflow-y-visible;
  }
}
</style>
