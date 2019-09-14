const solver = require('./sumOfTwoNumbersNearestToTarget');
const samples = {
    1: [-1, 3, 8, 2, 9, 5],
    2: [4, 1, 2, 10, 5, 20],
    target: 24,
};

test('solver should return', () => {
    expect(solver(samples[1], samples[2], samples.target)).toBe(25);
});
