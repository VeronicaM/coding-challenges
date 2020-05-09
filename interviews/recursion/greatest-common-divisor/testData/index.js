const testNumbers = [
    {
        params: [0, 0],
        expectedResult: 0,
        label: 'zero-numbers'
    },
    {
        params: [0, 6],
        expectedResult: 0,
        label: 'one-zero-number'
    },
    {
        params: [6,9],
        expectedResult: 3,
        label: 'numbers-1'
    },
    {
        params: [42, 56],
        expectedResult: 14,
        label: 'numbers-2'
    },
    {
        params: [11, 121],
        expectedResult: 11,
        label: 'numbers-3'
    }
];

module.exports = {
    testNumbers,
};
