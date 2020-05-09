const testNumbers = [
    {
        params: 0,
        expectedResult: [1],
        label: 'zero-row'
    },
    {
        params: 1,
        expectedResult: [1, 1],
        label: 'first-row'
    },
    {
        params: 2,
        expectedResult: [1, 2, 1],
        label: 'second-row'
    },
    {
        params: 5,
        expectedResult: [1, 5, 10, 10, 5, 1],
        label: 'fifth-row'
    },
    {
        params: 10,
        expectedResult: [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1],
        label: 'tenth-row'
    }
];

module.exports = {
    testNumbers,
};
