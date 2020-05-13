const colors = require('colors');
const TreeNode = require('./TreeNode.js').TreeNode;

const buildTree = (multiplierFactor = 1) => {
    const emptyNode = new TreeNode(null, null, null);

    const firstNodeLeftTree = new TreeNode(2 * multiplierFactor, emptyNode, emptyNode);
    const secondNodeLeftTree = new TreeNode(3 * multiplierFactor, firstNodeLeftTree, emptyNode);

    const leftTree = new TreeNode(4 * multiplierFactor, secondNodeLeftTree, emptyNode)

    const firstNodeRightTree = new TreeNode(6 * multiplierFactor, emptyNode, emptyNode);
    const secondNodeRightTree = new TreeNode(11 * multiplierFactor, emptyNode, emptyNode);

    const rightTree = new TreeNode(10 * multiplierFactor, firstNodeRightTree, secondNodeRightTree);

    return new TreeNode(5 * multiplierFactor, leftTree, rightTree);
};

const isArrayEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};

const isArrayOfObjectsEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) {
            return false;
        }
    }

    return true;
};


function assert(params, result, expected, expectedResultLabel, checkType) {
    const resultMsg = `Passed in params were ${JSON.stringify(params)} and the expected ${expectedResultLabel} is ${JSON.stringify(expected)}`;

    let checkCondition;

    switch (checkType) {
        case 'array':
            checkCondition = isArrayEqual(result, expected);
            break;
        case 'array-of-objects':
            checkCondition = isArrayOfObjectsEqual(result, expected);
            break;
        default:
            checkCondition = result === expected;

    }

    if (checkCondition) {
        console.log(resultMsg.green)
        return true;
    } else {
        console.error(`${resultMsg}, found ${JSON.stringify(result)}`.brightRed);
        return false;
    }
}

function printTestResult(solutionFunc, testData, expectedResultLabel, checkType = '') {
    let count = 0;

    testData.forEach(function loopUnitTests({ params, expectedResult, label }, index) {
        console.log(`${index + 1}. ${label}`.yellow);

        const isCorrect = assert(params, solutionFunc(params), expectedResult, expectedResultLabel, checkType);

        if (!isCorrect) {
            count += 1;
        }
    });

    console.error(`You have ${count}/${testData.length} failling tests`.brightRed);
    console.error(`You have ${testData.length - count}/${testData.length} passing tests. Congrats!!!`.green);
}

function printMatrix(matrix) {
    for (let colIndex = 0; colIndex < matrix.length; colIndex++) { // iterate over columns
        let rowString = '';

        for (let rowIndex = 0; rowIndex < matrix[0].length; rowIndex++) { // iterate over rows
            rowString += `${matrix[colIndex][rowIndex]}`;
        }

        console.log(`${rowString}`);
    }
    console.log('\n');
}

module.exports = {
    isArrayEqual,
    isArrayOfObjectsEqual,
    printTestResult,
    printMatrix,
    buildTree
}