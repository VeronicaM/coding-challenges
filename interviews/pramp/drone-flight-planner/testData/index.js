const testRoute3DPoints = [
    {
        params: [],
        expectedResult: 0,
        label: 'empty-array'
    },
    {
        params: [[0, 2, 10]],
        expectedResult: 0,
        label: 'one-point-array'
    },
    {
        params: [
            [0, 2, 10],
            [3, 5, 0],
            [9, 20, 6],
            [10, 12, 15],
            [10, 10, 8]
        ],
        expectedResult: 5,
        label: 'route1'
    },
    {
        params: [
            [0, 2, 10],
            [3, 5, 0],
            [9, 20, 6],
            [10, 12, 15],
            [3, 5, 18],
            [1, 10, 0],
        ],
        expectedResult: 8,
        label: 'route2'
    },
];

module.exports = {
    testRoute3DPoints,
};
