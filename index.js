import sortByPrice from './lib/sort-by-price.mjs'

function calculateCheapestChargingSchedule ({ batteryCapacity, batteryCurrentLevel, chargingPower, priceArray }) {
  const sortedSchedule = sortByPrice(priceArray)
  const cheapestChargingTimes = sortedSchedule.map(item => item.startAt)
  return cheapestChargingTimes
}

export default calculateCheapestChargingSchedule
