[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

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

## priceArray format

The module expects an array of objects with the following properties as priceArray:
  
```JavaScript
[
  {
    "startsAt": "2020-04-24T04:00:00.000+02:00",
    "total": 0.5
  },
  {
    "startsAt": "2020-04-24T13:00:00.000+02:00",
    "total": 0.6
  }
]
```

if your priceArray is not in this format you can supply a propertyMap

```JavaScript

import calculateCheapestChargingSchedule from '@alheimsins/calculate-cheapest-charging-schedule'

const batteryCapacity = 38
const batteryCurrentLevel = 0.75
const chargingPower = 3.5

const priceArray = [
  {
    "starttid": "2020-04-24T04:00:00.000+02:00",
    "pris": 0.5
  },
  {
    "starttid": "2020-04-24T13:00:00.000+02:00",
    "pris": 0.6
  }
]

const propertyMap = {
  startsAt: 'starttid',
  total: 'pris'
}

console.log(calculateCheapestChargingSchedule({ batteryCapacity, batteryCurrentLevel, chargingPower, priceArray, propertyMap }))

// returns ['2022-04-24T04:00:00.000+02:00', '2022-04-24T13:00:00.000+02:00']

```

# Related

- [tibber-get-price-info](https://github.com/Alheimsins/tibber-get-price-info) Retrieve price info from tibber for your current subscription
- [zaptec-go-start-stop](https://github.com/Alheimsins/zaptec-go-start-stop) A module for starting and stopping your Zaptec Go EV charger
- [bmw-is-connected-to-charger](https://github.com/Alheimsins/bmw-is-connected-to-charger) Answers the question: is my BMW connected to a charger?
- [leaf-connect](https://github.com/Alheimsins/leaf-connect) Node.js client library for the Nissan Leaf API

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" height="150px" width="150px" />

