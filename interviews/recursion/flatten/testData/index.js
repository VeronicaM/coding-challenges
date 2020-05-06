const testArray = [
    {
        arr: [],
        expectedResult: [],
        label: 'empty-array'
    },
    {
        arr: [1],
        expectedResult: [1],
        label: 'one-element-array'
    },
    {
        arr: [1, [2]],
        expectedResult: [1, 2],
        label: 'one-depth--nesting-array'
    },
    {
        arr: [1, [2], 3, 4, [5, [6]]],
        expectedResult: [1, 2, 3, 4, 5, 6],
        label: 'three-depth--nesting-array'
    },
    {
        arr: [[[[1]]]],
        expectedResult: [1],
        label: 'fourth-depth--nesting-array'
    },
];

module.exports = {
    testArray,
};
