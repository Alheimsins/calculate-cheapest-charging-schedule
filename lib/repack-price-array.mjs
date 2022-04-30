function repackPriceArray (priceArray, propertyMap) {
  return !propertyMap
    ? priceArray
    : priceArray.map(item => Object.assign({}, {
      total: propertyMap.total ? item[propertyMap.total] : item.total,
      startsAt: propertyMap.startsAt ? item[propertyMap.startsAt] : item.startsAt
    }))
}

export default repackPriceArray
