import calculateCheapestChargingSchedule from './index.js'
import priceArray from './data/pricelist.mjs'
const batteryCapacity = 38
const batteryCurrentLevel = 0.75
const chargingPower = 3.5

console.log(calculateCheapestChargingSchedule({ batteryCapacity, batteryCurrentLevel, chargingPower, priceArray }))
