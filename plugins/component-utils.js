'use strict;'

export const variantPropDefinition = {
  type: [Array, String],
  default: ''
}

export const getVariantString = function (name, variant) {
  const addComponentPrefix = variant => `${name}--${variant}`

  if (typeof variant === 'string') {
    return addComponentPrefix(variant)
  }

  return variant.map(variant => addComponentPrefix(variant))
}
