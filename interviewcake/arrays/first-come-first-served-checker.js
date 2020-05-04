const colors = require('colors');
const common = require('../../common/utils.js');
const testCases = require('./testData/index.js');

/*
 * Arrays practice on interview cake 
 * https://www.interviewcake.com/question/javascript/cafe-order-checker?course=fc1&section=array-and-string-manipulation
 * 
 * Arguments: 
 *   takeOutOrders: Array<int>
 *   dineInOrders: Array<int>
 *   servedOrders: Array<int>
 * 
 * returns: bool to indicate if first come first served order has been respected
 * 
 * eg. 
 *     takeOutOrders: [1, 3, 5]
 *     dineInOrders: [2, 4, 6]
 *     servedOrders: [1, 2, 4, 6, 5, 3]
 * 
 *     console.log(isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders ));
 *     // logs false
 * 
 *      takeOutOrders: [17, 8, 24]
 *      dineInOrders: [12, 19, 2]
 *      servedOrders: [17, 8, 12, 19, 24, 2]
 * 
 *      console.log(isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders ));
 *      // logs true
 *
 * N.B. order ids are unique and they are in random order
*/

function isFirstComeFirstServed(takeOutOrders = [], dineInOrders = [], servedOrders = []) {
    // if there are orders that have not been served
    if (servedOrders.length < (takeOutOrders.length + dineInOrders.length)) return false;

    let isFirstComeFirstServed = true;

    let takeOutOrdersIndex = 0;
    let dineInOrdersIndex = 0;

    for (let i = 0; i < servedOrders.length; i++) {
        const isTakeOutOrder = takeOutOrdersIndex < takeOutOrders.length && servedOrders[i] === takeOutOrders[takeOutOrdersIndex];
        const isDineInOrder = dineInOrdersIndex < dineInOrders.length && servedOrders[i] === dineInOrders[dineInOrdersIndex];

        if (isTakeOutOrder) {
            takeOutOrdersIndex++;
        } else if (isDineInOrder) {
            dineInOrdersIndex++;
        } else {
            isFirstComeFirstServed = false;
            break;
        }
    }

    return isFirstComeFirstServed;
};

function assert(takeOutOrders, dineInOrders, servedOrders, result, expected) {
    const resultMsg = `Input orders array were takeOutOrders: ${takeOutOrders}, dineInOrders: ${dineInOrders}, servedOrders: ${servedOrders}, and they ${expected ? 'respected' : 'did not respect'} first come first served rule`;

    if (result === expected) {
        console.log(resultMsg.green)
        return true;
    } else {
        console.error(`${resultMsg}, found ${result}`.brightRed);
        return false;
    }
}

function printTestResult(solutionFunc) {
    let count = 0;
    const { testFirstComeFirstServed } = testCases;

    testFirstComeFirstServed.forEach(({ takeOutOrders, dineInOrders, servedOrders, expectedResult, label = '' }, index) => {
        console.log(`${index + 1}. ${label}`.yellow);
        const isCorrect = assert(takeOutOrders, dineInOrders, servedOrders, solutionFunc(takeOutOrders, dineInOrders, servedOrders), expectedResult);

        if (!isCorrect) {
            count += 1;
        }
    });

    ((testCases) => {
        console.error(`You have ${count}/${testCases.length} failling tests`.brightRed);
        console.error(`You have ${testCases.length - count}/${testCases.length} passing tests. Congrats!!!`.green);
    })(testFirstComeFirstServed);
}

printTestResult(isFirstComeFirstServed);
