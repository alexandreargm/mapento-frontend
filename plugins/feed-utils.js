export const extractObjectsOfType = function (dataArray, typename) {
  const isTargetTypename = ({ __typename }) => __typename === typename
  let target = null

  target = dataArray.filter(isTargetTypename)
  if (target && target.length > 0) { return target }

  return dataArray.flatMap((object) => {
    for (const attributeIndex in object) {
      if (Array.isArray(object[attributeIndex])) {
        return extractObjectsOfType(object[attributeIndex], typename)
      }
    }
    return null
  })
}

export const filterObjectDuplicatesByKey = function (dataArray, key) {
  return [...new Map(dataArray.map(item => [item[key], item])).values()]
}
