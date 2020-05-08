const testMatrixes = [
    {
        params: [],
        expectedResult: false,
        label: 'empty-array'
    },
    {
        params: [[1, 2, 3, 4],
        [5, 1, 2, 3],
        [6, 5, 1, 2]],
        expectedResult: true,
        label: 'toeplitz-matrix'
    },
    {
        params: [[1, 2, 3, 4],
        [5, 1, 9, 3],
        [6, 5, 1, 2]],
        expectedResult: false,
        label: 'non-toeplitz-matrix'
    },
];

module.exports = {
    testMatrixes,
};
