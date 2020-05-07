const colors = require('colors');
const common = require('../../../common/utils.js');
const testCases = require('./testData/index.js');

/* 
 *  Arguments:
 *  str: String
 * 
 * returns string in reverse
 * eg. 
 * const str = 'Vera';
 * reverse(str) 
 * return 'areV'
*/

const reverse = (str = "", index = -1) => {
    let innerIndex = index === -1 ? str.length - 1 : index;

    if (innerIndex <= 0) return str.charAt(innerIndex);
  
    return str.charAt(innerIndex) + reverse(str, innerIndex - 1);
};

function assert(str, result, expected) {
    const resultMsg = `Input str was initially ${str} and after being reversed the expected value is ${expected}`;
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
    const { testStrings } = testCases;

    testStrings.forEach(({ str, expectedResult, label = '' }, index) => {
        console.log(`${index + 1}. ${label}`.yellow);

        const isCorrect = assert(str, solutionFunc(str), expectedResult);

        if (!isCorrect) {
            count += 1;
        }
    });

    ((testData) => {
        console.error(`You have ${count}/${testData.length} failling tests`.brightRed);
        console.error(`You have ${testData.length - count}/${testData.length} passing tests. Congrats!!!`.green);
    })(testStrings);
}

printTestResult(reverse);