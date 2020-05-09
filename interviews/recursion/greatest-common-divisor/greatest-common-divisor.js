const common = require('../../../common/utils.js');
const testCases = require('./testData/index.js');

/* 
 *  Arguments: Array<int>: [num1, num2]
 *  array.length = 2
 * 
 * returns number as the greatest number that can divide both num1 and num2
 * 
 * eg. 
 * greatestCommonDivisor([9, 6]) retuns 3
 * 
*/

function greatestCommonDivisor([num1, num2] = [], i = 1) {
    if (num2 == 0 || num1 === 0) return 0;

    let min = num1 < num2 ? num1 : num2;
    let innerIndex = i == 1 ? Math.round(min / 2) : i;

    if (innerIndex <= 0) {
        return -1;
    }

    if (num1 % innerIndex === 0 && num2 % innerIndex === 0) return innerIndex;

    return greatestCommonDivisor([num1, num2], innerIndex - 1);
}


common.printTestResult(greatestCommonDivisor, testCases.testNumbers, 'greatest common divisor');
