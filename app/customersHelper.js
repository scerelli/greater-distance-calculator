import customersRaw from './resources/gistfile1.txt'
import DistanceCalculator from './distanceCalculator'

const calculator = new DistanceCalculator(
  53.339428,
  -6.257664,
)

export function customersRawToJSON (customersTxt) {
  if (!customersTxt) {
    throw new TypeError('No customers txt provided')
  }

  const customersToString = customersTxt
    .trim()
    .split('\n')
    .join(',')

  return JSON.parse(`[${customersToString}]`)
}

export function customersInRange (maxRange) {
  if (Number.isNaN(parseInt(maxRange))) {
    throw new TypeError('maxRange should be a number')
  }

  const customers = customersRawToJSON(customersRaw)

  return customers.filter(customer =>
    calculator.circularDistance(
      customer.latitude,
      customer.longitude,
    ) <= Number(maxRange))
    .sort((a, b) => b.user_id - a.user_id)
}
