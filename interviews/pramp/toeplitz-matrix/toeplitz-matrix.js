const common = require('../../../common/utils.js');
const testCases = require('./testData/index.js');

/* 
 *  Arguments:
 *  matrix: Array[i][j] 
 *  
 *  0 ≤ matrix.length ≤ 20
 *  0 ≤ matrix[i].length ≤ 20
 *  0 ≤ matrix[i][j] ≤ 20
 * 
 * returns boolean if matrix is of type Toeplitz, i.e. has the same number on its descending diagonal from left to rigth
 * 
 * eg. 
 * const matrix = [[1,2,3,4],
 *                 [5,1,2,3],
 *                 [6,5,1,2]];
 * isToeplitzMatrix(matrix) 
 * returns true
 * 
 * const matrix = [[1,2,3,4],
 *                 [5,1,9,3],
 *                 [6,5,1,2]];
 * 
 * isToeplitzMatrix(matrix) 
 * returns false
*/

function isToeplitzMatrix(matrix) {
    return true;
}


common.printTestResult(isToeplitzMatrix, testCases.testMatrixes, 'result to the question is it a toeplitz matrix ?');
