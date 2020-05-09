const testRoute3DPoints = [
    {
        params: [],
        expectedResult: 0,
        label: 'empty-array'
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
];

module.exports = {
    testRoute3DPoints,
};
