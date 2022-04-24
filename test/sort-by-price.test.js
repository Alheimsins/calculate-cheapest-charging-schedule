import test from 'ava'
import sortByPrice from '../lib/sort-by-price.mjs'
import priceList from '../data/pricelist.mjs'

test('it should return an array of objects sorted by price from lowest to highest', t => {
  const expectedFirstEntry = {
    total: 1.0075,
    energy: 0.798,
    tax: 0.2095,
    startsAt: '2022-04-24T14:00:00.000+02:00'
  }
  const sortedPriceArray = sortByPrice(priceList)
  t.deepEqual(sortedPriceArray[0], expectedFirstEntry)
})
