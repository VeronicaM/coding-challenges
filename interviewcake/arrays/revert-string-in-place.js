const colors = require('colors');
const common = require('../../common/utils.js');
const testCases = require('./testData/index.js');

/*
 * Arrays practice on interview cake 
 * https://www.interviewcake.com/question/javascript/reverse-string-in-place?course=fc1&section=array-and-string-manipulation
 * Arguments: 
 * chars : Array<char> 
 * 
 * returns:void and the argument array is reversed in place
 * 
 * eg. 
 * const nameArray =  [
 *      'v',
 *      'e',
 *      'r',
 *      'a'
 *   ];
 * reverseArray(nameArray)
 * results in nameArray being now:
 * 
 *   [  
 *      'a',
 *      'r',
 *      'e',
 *      'v'
 *   ]
 * 
*/

function reverseArray(chars = []) {
    const len = chars.length;

    if (len >= 2) {
        let leftIndex = 0;
        let rightIndex = len - 1;
        while (leftIndex < rightIndex) {
            const temp = chars[leftIndex];
            chars[leftIndex] = chars[rightIndex];
            chars[rightIndex] = temp;

            leftIndex++;
            rightIndex--;
        }
    }
}

function assert(chars, result, expected) {
    const resultMsg = `Input array was initially ${chars} and after being reversed the expected value is ${expected}`;
    if (common.isArrayEqual(result, expected)) {
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

    testArrays.forEach(({ chars, expectedResult, label = '' }, index) => {
        console.log(`${index + 1}. ${label}`.yellow);
        const copyInitialArr = [...chars];
        solutionFunc(chars);
        const isCorrect = assert(copyInitialArr, chars, expectedResult);

        if (!isCorrect) {
            count += 1;
        }
    });

    console.error(`You have ${count}/${testArrays.length} failling tests`.brightRed);
    console.error(`You have ${testArrays.length - count}/${testArrays.length} passing tests. Congrats!!!`.green);
}

printTestResult(reverseArray);
