# calculate-cheapest-charging-schedule

Simple module for calculating the cheapest charging schedule for your EV

# Usage

```JavaScript

import calculateCheapestChargingSchedule from '@alheimsins/calculate-cheapest-charging-schedule'
import priceArray from './data/pricelist.mjs'
const batteryCapacity = 38
const batteryCurrentLevel = 0.75
const chargingPower = 3.5

console.log(calculateCheapestChargingSchedule({ batteryCapacity, batteryCurrentLevel, chargingPower, priceArray }))

// returns ['2022-04-24T04:00:00.000+02:00', '2022-04-24T13:00:00.000+02:00', '2022-04-24T14:00:00.000+02:00']

```

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" height="150px" width="150px" />

