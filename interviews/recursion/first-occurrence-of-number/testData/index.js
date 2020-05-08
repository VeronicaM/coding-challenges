const testArrays = [
    {
        arr: [],
        startIndex: 0,
        value: 1,
        expectedResult: -1,
        label: 'empty-array'
    },
    {
        arr: [1],
        startIndex: 0,
        value: 2,
        expectedResult: -1,
        label: 'not-found-value1'
    },
    {
        arr: [1, 2, 3, 4],
        startIndex: 1,
        value: 1,
        expectedResult: -1,
        label: 'not-found-value2'
    },
    {
        arr: [1, 2, 3, 4, 5],
        startIndex: 1,
        value: 4,
        expectedResult: 3,
        label: 'found-value1'
    },
    {
        arr: [1, 2, 3, 4, 5],
        startIndex: 3,
        value: 5,
        expectedResult: 4,
        label: 'found-value2'
    },
    {
        arr: [9, 8, 1, 8, 1, 7],
        startIndex: 0,
        value: 1,
        expectedResult: 2,
        label: 'found-value1'
    },
];

module.exports = {
    testArrays,
};
