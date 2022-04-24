import test from 'ava'
import calculateChargingTime from '../lib/calculate-charging-time.mjs'

test('it should return the charging time in hours', t => {
  const batteryCapacity = 100
  const batteryCurrentLevel = 0.5
  const chargingPower = 1
  const expectedChargingTime = 50
  const chargingTime = calculateChargingTime({ batteryCapacity, batteryCurrentLevel, chargingPower })
  t.is(chargingTime, expectedChargingTime)
})

test('it should round up to closest full hour', t => {
  const batteryCapacity = 38
  const batteryCurrentLevel = 0.75
  const chargingPower = 3.5
  const expectedChargingTime = 3
  const chargingTime = calculateChargingTime({ batteryCapacity, batteryCurrentLevel, chargingPower })
  t.is(chargingTime, expectedChargingTime)
})
