const common = require('../../../common/utils.js');
const testCases = require('./testData/index.js');

/* 
 *  Arguments:
 *  route3DPointsArray: Array[i][j], 
 *  
 *  0 ≤ route3DPointsArray.length ≤ 100
 *  route3DPointsArray[i].length = 3 
 * 
 *  returns number as the minimum amount of energy required for the drone to complete its flight
 * 
 *  The drone burns 1 kWh (kilowatt-hour is an energy unit) for every mile it ascends, 
 *  and it gains 1 kWh for every mile it descends. 
 *  Flying sideways neither burns nor adds any energy.
 * 
 * eg. 
 * const route3DPointsArray = [
 *                 [0, 2, 10],
 *                 [3, 5, 0],
 *                 [9, 20, 6],
 *                 [10, 12, 15],
 *                 [10, 10, 8]
 *                ];
 * calcDroneMinEnergy(matrix) 
 * returns 5
*/

function calcDroneMinEnergy(route3DPointsArray = []) {
    return 0;
}


common.printTestResult(calcDroneMinEnergy, testCases.testRoute3DPoints, ' minimum amount of energy required for the drone to complete its flight ');
