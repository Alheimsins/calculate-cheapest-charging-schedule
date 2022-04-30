import test from 'ava'
import repackPriceArray from '../lib/repack-price-array.mjs'

const defaultPriceArray = [
  {
    total: 1.0,
    startsAt: '2022-04-24T14:00:00.000+02:00'
  },
  {
    total: 2.0,
    startsAt: '2022-05-24T14:00:00.000+02:00'
  }
]

test('it should return an unaltered array if no propertyMap is provided', t => {
  const expected = defaultPriceArray
  const actual = repackPriceArray(defaultPriceArray)
  t.deepEqual(actual, expected)
})

test('it should return an unaltered array if empty propertyMap is provided', t => {
  const expected = defaultPriceArray
  const actual = repackPriceArray(defaultPriceArray, {})
  t.deepEqual(actual, expected)
})

test('it should return an array of objects with the properties specified in the propertyMap', t => {
  const alternativePriceArray = [
    {
      pris: 1.0,
      starttid: '2022-04-24T14:00:00.000+02:00'
    },
    {
      pris: 2.0,
      starttid: '2022-05-24T14:00:00.000+02:00'
    }
  ]

  const propertyMap = {
    total: 'pris',
    startsAt: 'starttid'
  }

  const expected = defaultPriceArray
  const actual = repackPriceArray(alternativePriceArray, propertyMap)
  t.deepEqual(actual, expected)
})

test('it should handle a propertymap with only 1 property', t => {
  const alternativePriceArray = [
    {
      total: 1.0,
      starttid: '2022-04-24T14:00:00.000+02:00'
    },
    {
      total: 2.0,
      starttid: '2022-05-24T14:00:00.000+02:00'
    }
  ]

  const propertyMap = {
    startsAt: 'starttid'
  }

  const expected = defaultPriceArray
  const actual = repackPriceArray(alternativePriceArray, propertyMap)
  t.deepEqual(actual, expected)
})
