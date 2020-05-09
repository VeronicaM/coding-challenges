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
 * 
*/

function pascalTriangleRow(n) {
    return n;
}


common.printTestResult(pascalTriangleRow, testCases.testNumbers, 'pascal triangle row', 'array');
