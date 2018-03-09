import {
  customersRawToJSON,
  customersInRange,
} from '../customersHelper'
import customersRaw from '../resources/gistfile1.txt'

const JSONMock = [
  {
    latitude: '52.986375',
    user_id: 12,
    name: 'Christina McArdle',
    longitude: '-6.043701',
  },
  {
    latitude: '51.92893',
    user_id: 1,
    name: 'Alice Cahill',
    longitude: '-10.27699',
  },
]

it('Returns a valid JSON containing the structure of JSONMock', () => {
  const customersJSON = customersRawToJSON(customersRaw)
  expect(customersJSON).toEqual(JSONMock)
})

it('Throw an error if no txt is passed as customersRawToJSON argument', () => {
  expect(() => customersRawToJSON()).toThrow(TypeError)
})

it('Given a max range it should return an array of filtered customers', () => {
  const customers = customersInRange(100)
  expect(customers.length).toBe(1)
  expect(customers[0].user_id).toBe(12)
})

it('Throw an error if the argument passed in customersInRange isNaN', () => {
  expect(() => customersInRange('ciao')).toThrow(TypeError)
})
