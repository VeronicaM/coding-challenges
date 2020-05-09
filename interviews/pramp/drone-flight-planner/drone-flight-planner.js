const common = require('../../../common/utils.js');
const testCases = require('./testData/index.js');

/* 
 *  Arguments:
 *  route3DPointsArray: Array[i][j], 
 *  
 *  0 ≤ route3DPointsArray.length ≤ 100
 *  route3DPointsArray[i].length = 3 
 * 
 *  returns number 
 *  The return value reproesents the minimum amount of energy required at starting point for the drone to complete its flight 
 *  so that at any given point in its route, the drone’s level of energy balance doesn't go below zero. Otherwise, it’ll crash.
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
 *   less than 5 kWh and the drone would crash before the finish line. 
 *   More than `5` kWh and it’d end up with excess energy
*/

function calcDroneMinEnergy(route3DPointsArray = []) {
    let energyConsumption = 0;
    let largestDeficit = 0;

    for (let i = 0; i < route3DPointsArray.length - 1; i++) {
        // consider only Z indexes for measuring energy consumption
        if (route3DPointsArray[i][2] < route3DPointsArray[i + 1][2]) { // the drone is ascending
            energyConsumption -= (route3DPointsArray[i + 1][2] - route3DPointsArray[i][2]);
        } else { // the drone is descending
            energyConsumption += (route3DPointsArray[i][2] - route3DPointsArray[i + 1][2]);
        }

        if (energyConsumption < largestDeficit) {
            largestDeficit = energyConsumption;
        }
    }

    return largestDeficit !==0 ? -1 * (largestDeficit) : 0; // turn positive
}


common.printTestResult(calcDroneMinEnergy, testCases.testRoute3DPoints, ' minimum amount of energy required for the drone to complete its flight ');
