<template>
  <div
    v-show="isOpen"
    class="modal__wrapper"
    :open="isOpen"
    @click.self="close"
  >
    <div
      role="dialog"
      aria-modal="true"
      class="modal"
      :class="getVariant"
    >
      <h2 v-if="title" class="modal__title font-semibold text-xl mb-6">
        {{ title }}
      </h2>

      <div class="modal__body">
        <slot name="default" />
      </div>

      <div v-if="$slots.actions" class="modal__actions flex space-x-4 justify-end">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script>
import { variantPropDefinition, getVariantString } from '~/plugins/component-utils'
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    variant: variantPropDefinition
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    getVariant () {
      return getVariantString('modal', this.variant)
    }
  },
  methods: {
    show () {
      this.isOpen = true
    },
    close () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss">
  .modal {
    max-height: 80vh;
    @apply w-full rounded-t-md bg-b-light p-4;

    @screen xs {
      @apply rounded-b-md p-6;
    }

    &__wrapper {
      background: rgba($color: #000000, $alpha: 0.3);
      content: " ";
      @apply flex fixed top-0 right-0 bottom-0 left-0 z-30 justify-center items-end;

      @screen xs {
        @apply p-6 items-center;
      }
    }

    &__body {
      @apply overflow-y-auto;
    }
  }

  .modal--sm {
    @apply min-w-sm max-w-md;
  }
  .modal--lg {
    @apply min-w-lg max-w-xl;
  }
  .modal--xl {
    @apply min-w-2xl max-w-3xl;
  }

  .modal--no-scroll {
    .modal__body {
      @apply overflow-y-visible;
    }
  }
</style>
