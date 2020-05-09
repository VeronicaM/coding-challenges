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

function pascalTriangleRow(n) {
    if (n === 0) return [1];
    if (n === 1) return [1, 1];

    const prevRow = pascalTriangleRow(n - 1);
    const currentCombinedValue = [1];

    for (let i = 0; i < n - 1; i++) {
        currentCombinedValue.push(prevRow[i] + prevRow[i + 1])
    }

    currentCombinedValue.push(1);
    return currentCombinedValue;
}


common.printTestResult(pascalTriangleRow, testCases.testNumbers, 'pascal triangle row', 'array');
