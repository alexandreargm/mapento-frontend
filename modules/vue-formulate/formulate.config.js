import FormulateVSelectPlugin from '@cone2875/vue-formulate-select'

export default {
  plugins: [FormulateVSelectPlugin],
  locale: 'en',
  classes: {
    outer (context) {
      switch (context.classification) {
      case 'box':
        return ''
      default:
        return ''
      }
    },
    wrapper (context) {
      switch (context.classification) {
      case 'box':
        return 'flex space-x-3'
      default:
        return ''
      }
    },
    label (context) {
      switch (context.classification) {
      case 'box':
        return 'py-2 pr-3 select-none'
      default:
        return 'font-medium block mb-6'
      }
    },
    element: '',
    input (context) {
      switch (context.classification) {
      case 'box':
        return 'ml-4 mt-3'
      default:
        return ''
      }
    },
    help: 'text-xs mb-1 text-gray-600',
    error: 'text-red-700 text-xs mb-1'
  }
}
