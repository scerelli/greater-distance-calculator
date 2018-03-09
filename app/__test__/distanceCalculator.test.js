import DistanceCalculator, {
  toRadians,
} from '../distanceCalculator'
const calculator = new DistanceCalculator(
  53.339428,
  -6.257664,
)

it('Returns 0.000 if the distance is the same as the origin', () => {
  const distance = calculator.circularDistance(
    53.339428,
    -6.257664,
  )
  expect(distance).toBe('0.000')
})

it('Calculates distance between two points', () => {
  const distance = calculator.circularDistance(
    52.240382,
    -6.972413,
  )
  expect(distance).toBe('131.3')
})

it('Throw an error if lat or long are missing from the params', () => {
  expect(() => calculator.circularDistance()).toThrow(TypeError)
})

it('Convert degree to radians', () => {
  expect(toRadians(90)).toBe(1.5707963267948966)
})
