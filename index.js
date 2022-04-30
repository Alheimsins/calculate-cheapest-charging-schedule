import sortByPrice from './lib/sort-by-price.mjs'
import calculateChargingTime from './lib/calculate-charging-time.mjs'
import repackPriceArray from './lib/repack-price-array.mjs'

function calculateCheapestChargingSchedule ({ batteryCapacity, batteryCurrentLevel, chargingPower, priceArray, propertyMap }) {
  const hoursToCharge = calculateChargingTime({ batteryCapacity, batteryCurrentLevel, chargingPower })
  const sortedSchedule = sortByPrice(repackPriceArray(priceArray, propertyMap))
  const cheapestChargingTimes = sortedSchedule.map(item => item.startsAt)
  return cheapestChargingTimes.slice(0, hoursToCharge).sort()
}

export default calculateCheapestChargingSchedule
