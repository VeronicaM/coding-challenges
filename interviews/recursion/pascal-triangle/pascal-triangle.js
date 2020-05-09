const common = require('../../../common/utils.js');
const testCases = require('./testData/index.js');

/* 
 *  Arguments: int, row number in a Pascal triangle
 *  
 * returns Array<int> the nth Pascal triangle row, where n is the given input param
 * 
 * eg. 
 * pascalTriangleRow(3)
 * return [1,3,3,1]
*/

class PascalTriangle {
    memo = {};

    getPascalRow(n) {
        if (n === 0) return [1];
        if (n === 1) return [1, 1];

        let prevRow = [];

        if (this.memo[n - 1] && this.memo[n - 1].length) {
            prevRow = this.memo[n - 1];
            console.log('providing memoized row value', n - 1);
        } else {
            prevRow = this.getPascalRow(n - 1);
            console.log('building prev row', n - 1);
        }

        const currentCombinedValue = [1];

        for (let i = 0; i < n - 1; i++) {
            currentCombinedValue.push(prevRow[i] + prevRow[i + 1])
        }

        currentCombinedValue.push(1);

        // save current built row
        this.memo[n] = currentCombinedValue;

        return currentCombinedValue;
    }
}

const myPascalTriangle = new PascalTriangle();

common.printTestResult(myPascalTriangle.getPascalRow.bind(myPascalTriangle), testCases.testNumbers, 'pascal triangle row', 'array');
