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
        label: 'non-toeplitz-matrix1'
    },
    {
        params: [[1, 2, 3, 4],
        [5, 1, 2, 3],
        [6, 4, 1, 2]],
        expectedResult: false,
        label: 'non-toeplitz-matrix2'
    },
    {
        params: [[3, 7, 0, 9, 8],
        [5, 3, 7, 0, 9],
        [6, 5, 3, 7, 0],
        [4, 6, 5, 3, 7]],
        expectedResult: true,
        label: 'toeplitz-matrix2'
    }, {
        params: [[4, 0], [9, 4]],
        expectedResult: true,
        label: 'toeplitz-matrix3'
    },
];

module.exports = {
    testMatrixes,
};
