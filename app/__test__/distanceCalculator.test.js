import DistanceCalculator from '../distanceCalculator';

it('Returns 0.000 if the distance is the same as the origin', () => {
    const calculator = new DistanceCalculator(
        53.339428, 
        -6.257664
    );
    const distance = calculator.circularDistance(
        53.339428, 
        -6.257664
    )

    expect(distance).toBe("0.000");
});

it('Calculates distance between two points', () => {
    const calculator = new DistanceCalculator(
        53.339428, 
        -6.257664
    );
    const distance = calculator.circularDistance(
        52.240382, 
        -6.972413
    )

    expect(distance).toBe("131.3");
});

it('Convert degree to radians', () => {
    const calculator = new DistanceCalculator();

    expect(calculator.toRadians(90)).toBe(1.5707963267948966);
});

