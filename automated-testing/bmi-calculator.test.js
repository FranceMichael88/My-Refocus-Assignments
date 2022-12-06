const convertion = require('./bmi-calculator')

test('155 divided by 100 equals 1.55 meter', () => {
    expect(convertion(155,  100)).toBe(1.55);
});

const kgByMeter = require('./bmi-calculator')

test('155 divided by 100 equals 1.55 meter', () => {
    expect(kgByMeter(63,  1.55)).toBeCloseTo(40.65);
});
