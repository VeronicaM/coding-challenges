const utils = require('../../../../common/utils.js');

const testTrees = [
    {
        params: utils.buildTree(1),
        expectedResult: [2, 3, 4, 5, 6, 10, 11],
        label: 'tree-1'
    },
    {
        params: utils.buildTree(2),
        expectedResult: [4, 6, 8, 10, 12, 20, 22],
        label: 'tree-2'
    },
    {
        params: utils.buildTree(3),
        expectedResult: [6, 9, 12, 15, 18, 30, 33],
        label: 'tree-3'
    },
    {
        params: utils.buildTree(4),
        expectedResult: [8, 12, 16, 20, 24, 40, 44],
        label: 'tree-4'
    },
    {
        params: utils.buildTree(5),
        expectedResult: [10, 15, 20, 25,30, 50, 55],
        label: 'tree-5'
    },
];

module.exports = {
    testTrees,
};
