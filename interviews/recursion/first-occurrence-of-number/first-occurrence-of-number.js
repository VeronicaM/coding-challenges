const colors = require('colors');
const common = require('../../../common/utils.js');
const testCases = require('./testData/index.js');

/* 
 *  Arguments:
 *  arr: Array<int>
 *  startIndex: int
 *  value: int
 * 
 * returns index of first occurrence of value in arr
 * eg. 
 * const arr = [1, 2, 3, 4, 5];
 * startIndex = 0
 * value 4
 * console.log(findIndex(arr, startIndex, value))
 * return '3'
*/

function findIndex(arr, startIndex, value) {
    for (let i = startIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

function assert(arr, startIndex, value, result, expected) {
    const resultMsg = `Input arr is ${arr}, startIndex is ${startIndex} and value is ${value}. The expected number of vowels value is ${expected}`;
    if (result === expected) {
        console.log(resultMsg.green)
        return true;
    } else {
        console.error(`${resultMsg}, found ${result}`.brightRed);
        return false;
    }
}

function printTestResult(solutionFunc) {
    let count = 0;
    const { testArrays } = testCases;

    ((testData) => {
        testData.forEach(function loopUnitTests({ arr, startIndex, value, expectedResult, label = '' }, index) {
            console.log(`${index + 1}. ${label}`.yellow);

            const isCorrect = assert(arr, startIndex, value, solutionFunc(arr, startIndex, value), expectedResult);

            if (!isCorrect) {
                count += 1;
            }
        });

        console.error(`You have ${count}/${testData.length} failling tests`.brightRed);
        console.error(`You have ${testData.length - count}/${testData.length} passing tests. Congrats!!!`.green);
    })(testArrays);
}

printTestResult(findIndex);