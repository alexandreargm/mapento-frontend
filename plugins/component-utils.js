'use strict;'

export const getComponentVariantString = function (componentName, variant) {
  const addComponentPrefix = variant => `${componentName}--${variant}`

  if (typeof this.variant === 'string') {
    return addComponentPrefix(variant)
  }

  return this.variant.map(variant => addComponentPrefix(variant))
}
