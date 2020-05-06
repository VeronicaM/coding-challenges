const colors = require('colors');
const common = require('../../../common/utils.js');
const testCases = require('./testData/index.js');

/* 
 *  Arguments:
 *  arr: a nested Array of nth depth level
 * 
 * return a flattened array with 0 nested arrays
 * eg. 
 * const arr = [1, 2, 3, [4, 5], [5, 7,[8]]]
 * flatten(arr) 
 * return [ 1, 2, 3, 4, 5, 6, 7, 8 ]
*/

const flatten = (arr = []) => {
    let result = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item))
        } else {
            result.push(item)
        }
    });

    return result;
};

function assert(arr, result, expected) {
    const resultMsg = `Input array was initially ${JSON.stringify(arr)} and after being flattened the expected value is ${JSON.stringify(expected)}`;
    if (common.isArrayEqual(result, expected)) {
        console.log(resultMsg.green)
        return true;
    } else {
        console.error(`${resultMsg}, found ${JSON.stringify(result)}`.brightRed);
        return false;
    }
}

function printTestResult(solutionFunc) {
    let count = 0;
    const { testArray } = testCases;

    testArray.forEach(({ arr, expectedResult, label = '' }, index) => {
        console.log(`${index + 1}. ${label}`.yellow);

        const isCorrect = assert(arr, solutionFunc(arr), expectedResult);

        if (!isCorrect) {
            count += 1;
        }
    });

    console.error(`You have ${count}/${testArray.length} failling tests`.brightRed);
    console.error(`You have ${testArray.length - count}/${testArray.length} passing tests. Congrats!!!`.green);
}

printTestResult(flatten);