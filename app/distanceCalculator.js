export default class distanceCalculator {
    constructor(originLat, originLong) {
        this.originLat = originLat || null;
        this.originLong = originLong || null;
    }

    get earthRadius() {
        return 6371e3;
    }

    get originCoordinates() {
        return {
            latitude: this.originLat,
            longitude: this.originLong,
        }
    }

    toRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    circularDistance(targetLat, targetLong) {
        if(!targetLat || !targetLong) {
            throw 'Cannot calculate circular distance, no coordinates provided.';
        }

        const originLatRads    = this.toRadians(this.originLat);
        const targetLatRads    = this.toRadians(targetLat);
        const absoluteLatDiff  = this.toRadians(targetLat - this.originLat);
        const absoluteLongDiff = this.toRadians(targetLong - this.originLong);
    
        const chordLength = Math.sin(absoluteLatDiff / 2) * Math.sin(absoluteLatDiff / 2) + 
                            Math.cos(originLatRads) * Math.cos(targetLatRads) *
                            Math.sin(absoluteLongDiff / 2) * Math.sin(absoluteLongDiff / 2);
        const angularDistanceInRadians = 2 * Math.atan2(Math.sqrt(chordLength), Math.sqrt(1 - chordLength));
    
        return ((this.earthRadius * angularDistanceInRadians) / 1000).toPrecision(4);
    }
}
