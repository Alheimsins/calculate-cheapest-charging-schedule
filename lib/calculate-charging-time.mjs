function calculateChargingTime ({ batteryCapacity, batteryCurrentLevel, chargingPower }) {
  const powerNeeded = batteryCapacity - (batteryCapacity * batteryCurrentLevel)
  const chargingTime = Math.ceil(powerNeeded / chargingPower)
  return chargingTime
}

export default calculateChargingTime
