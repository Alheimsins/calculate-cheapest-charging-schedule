import sortByPrice from './lib/sort-by-price.mjs'
import calculateChargingTime from './lib/calculate-charging-time.mjs'

function calculateCheapestChargingSchedule ({ batteryCapacity, batteryCurrentLevel, chargingPower, priceArray }) {
  const hoursToCharge = calculateChargingTime({ batteryCapacity, batteryCurrentLevel, chargingPower })
  const sortedSchedule = sortByPrice(priceArray)
  const cheapestChargingTimes = sortedSchedule.map(item => item.startsAt)
  return cheapestChargingTimes.slice(0, hoursToCharge).sort()
}

export default calculateCheapestChargingSchedule
