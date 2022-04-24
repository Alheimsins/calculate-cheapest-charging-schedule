function sortByPrice (priceArray) {
  return priceArray.sort((a, b) => parseFloat(a.total) - parseFloat(b.total))
}

export default sortByPrice
