'use strict;'

export const variantPropDefinition = {
  type: [Array, String],
  default: ''
}

export const getVariantString = function (name, variant) {
  if (!variant) { return '' }

  const addComponentPrefix = modifier => `${name}--${modifier}`

  if (typeof variant === 'string') {
    return addComponentPrefix(variant)
  }

  return variant.map(modifier => addComponentPrefix(modifier))
}
