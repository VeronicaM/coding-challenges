const common = require('../../../common/utils.js');
const testCases = require('./testData/index.js');

/* 
 *  Arguments:
 *  n: integer
 *  
 *  returns integer, the nth element in a fibonacci series
 * 
 * eg. 
 * 
 * fibonacci(10) 
 * returns 34
*/

function fibonacci(n = 0) {
    return n;
}

common.printTestResult(fibonacci, testCases.testFibonacciNumbers, 'fibonacci element');
