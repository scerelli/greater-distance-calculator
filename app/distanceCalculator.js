const EARTH_RADIUS = '6371e3'
export function toRadians (degrees) {
  return degrees * Math.PI / 180
}

function angularDistanceToRadians (chordLength) {
  return 2 * Math.atan2(Math.sqrt(chordLength), Math.sqrt(1 - chordLength))
}

export default class distanceCalculator {
  constructor (originLat, originLong) {
    this.originLat = originLat || null
    this.originLong = originLong || null
  }

  circularDistance (targetLat, targetLong) {
    if (!targetLat || !targetLong) {
      throw new TypeError('Cannot calculate circular distance, no coordinates provided.')
    }

    const originLatRads = toRadians(this.originLat)
    const targetLatRads = toRadians(targetLat)
    const absoluteLatDiff = toRadians(targetLat - this.originLat)
    const absoluteLongDiff = toRadians(targetLong - this.originLong)

    const chordLength = Math.sin(absoluteLatDiff / 2) * Math.sin(absoluteLatDiff / 2) +
                        (Math.cos(originLatRads) * Math.cos(targetLatRads) *
                        Math.sin(absoluteLongDiff / 2) * Math.sin(absoluteLongDiff / 2))
    const angularDistanceInRadians = angularDistanceToRadians(chordLength)

    return ((EARTH_RADIUS * angularDistanceInRadians) / 1000).toPrecision(4)
  }
}
