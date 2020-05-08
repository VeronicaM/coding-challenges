const common = require('../../../common/utils.js');
const testCases = require('./testData/index.js');

/* 
 *  Arguments:
 *  matrix: Array[i][j] 
 *  
 *  0 ≤ matrix.length ≤ 20
 *  0 ≤ matrix[i].length ≤ 20
 *  0 ≤ matrix[i][j] ≤ 20
 * NB: matrix is not necessarily square, i.e. with the same number of columns and rows
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

function isToeplitzMatrix(matrix = []) {
    common.printMatrix(matrix);

    const diagonalStart = matrix[0] && matrix[0][0] || '';

    if (!diagonalStart) return false;

    for (let i = 0; i < matrix.length - 1; i++) { // iterate over rows
        for (let j = 0; j < matrix[0].length - 1; j++) { // iterate over columns
            console.log(`matrix[${i}][${j}]`, matrix[i][j], `matrix[${i + 1}][${j + 1}]`, matrix[i + 1][j + 1]);
            if (matrix[i][j] !== matrix[i + 1][j + 1]) {
                return false;
            }
        }
    }

    return true;
}


common.printTestResult(isToeplitzMatrix, testCases.testMatrixes, 'result to the question is it a toeplitz matrix ?');
