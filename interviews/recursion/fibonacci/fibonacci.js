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

class FibNumber {
    memoizedValues = {};

    getFibNumber(n) {
        if (this.memoizedValues[n]) {
            return this.memoizedValues[n];
        }

        if (n === 1 || n === 0) return n;

        const result = this.getFibNumber(n - 1) + this.getFibNumber(n - 2);

        this.memoizedValues[n] = result;

        return result;
    }
};

const myFib = new FibNumber();

common.printTestResult(myFib.getFibNumber.bind(myFib), testCases.testFibonacciNumbers, 'fibonacci element');
