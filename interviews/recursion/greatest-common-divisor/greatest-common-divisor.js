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
    if (num2 == 0 || num1 === 0) return 0;

    let max = num1 < num2 ? num2 : num1;
    let greatestCD = -1;

    for (let i = 0; i < max; i++) {
        if (num1 % i === 0 && num2 % i === 0 && i > greatestCD) {
            greatestCD = i;
        }
    }

    return greatestCD;
}


common.printTestResult(greatestCommonDivisor, testCases.testNumbers, 'greatest common divisor');
