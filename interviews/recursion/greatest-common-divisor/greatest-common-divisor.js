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

function greatestCommonDivisor([num1, num2] = []) {
    return num1;
}


common.printTestResult(greatestCommonDivisor, testCases.testNumbers, 'greatest common divisor');
