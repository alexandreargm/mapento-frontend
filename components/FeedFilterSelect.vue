<template>
  <select v-model="selected" class="feed-filter-select" @change="handleChange">
    <FeedFilterOption
      v-for="(option, index) in options"
      :key="`${selected}_${index}`"
      :value="option"
      :selected="value === option"
    />
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: this.value,
      selectWidth: ''
    }
  },
  mounted () {
    this.updateSelectWidth()
  },
  methods: {
    handleChange () {
      this.$emit('change', this.selected)
      this.updateSelectWidth()
    },
    updateSelectWidth () {
      const targetText = this.$el.value
      this.$el.style.width = _getResizeSelectWidth(targetText)

      function _getResizeSelectWidth (targetText) {
        const getSimulatedTextWidth = _getTestDummyTextWidth(targetText)
        const newSelectWitdh = `${getSimulatedTextWidth}px`

        return newSelectWitdh
      }

      function _getTestDummyTextWidth (targetText) {
        let dummyText = document.createElement('span') // eslint-disable-line 
        dummyText.innerHTML = targetText
        dummyText.style = { visibility: 'none', position: 'absolute' }
        document.body.appendChild(dummyText)
        const getSelectTextLength = dummyText.offsetWidth
        document.body.removeChild(dummyText)

        return getSelectTextLength
      }
    }
  }
}
</script>

<style lang="postcss">
.feed-filter-select {
    @apply block m-0 font-semibold text-sm text-brand px-4 pr-8 h-10 rounded-full box-content bg-b-dark outline-none shadow-none cursor-pointer select-none bg-no-repeat;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 5.91667L5.09966e-07 0.0833388L10 0.0833397L5 5.91667Z' fill='%233B7AF7'/%3E%3C/svg%3E");
    background-position: right 1rem top 50%, 0 0;
    background-size: 0.65em auto, 100%;
    transition: background 400ms ease-out;
  }
  .feed-filter-select::-ms-expand {
    display: none;
  }
  .feed-filter-select:focus{
    @apply outline-none shadow-none;
  }
  .feed-filter-select:active {
    @apply bg-opacity-100 !important;
    transition: background 0ms;
  }
  .feed-filter-select:hover {
    @apply bg-b-light bg-opacity-0;
  }
  .feed-filter-select option {
    @apply font-normal bg-b-light py-2 text-t-dark;
  }
  .feed-filter-select:disabled,
  .feed-filter-select[aria-disabled="true"] {
    @apply text-b-medium;
  }
  .feed-filter-select:disabled:hover,
  .feed-filter-select[aria-disabled="true"] {
    @apply bg-b-medium text-t-light-secondary;
  }
</style>
