const colors = require('colors');
const common = require('../../common/utils.js');
const testCases = require('./testData/index.js');

/*
 * Arrays practice on interview cake 
 * https://www.interviewcake.com/question/javascript/merge-sorted-arrays?course=fc1&section=array-and-string-manipulation
 * 
 * Arguments: 
 * orders :  Array<[int]> 
 * 
 * returns: 1 sorted array of all orders arrays
 * 
 * eg. 
 *     const orders = [
 *          [3, 4, 6, 10, 11, 15],
 *          [1, 5, 8, 12, 14, 19],
 *          [20, 21]
 *     ];
 * 
 *     console.log(mergeOrders(orders));
 *     // logs [
 *           1, 3, 4, 5, 6, 8, 
 *           10, 11, 12, 14, 15, 19,
 *           20, 21
 *         ]
 * 
 * assumption: order ids are unique and there won't be any duplicates
*/

function mergeOrders(orders = []) {
    return orders.reduce((result, ordersArary) => result.concat(ordersArary), []).sort((a, b) => (a - b));
}

function assert(orders, result, expected) {
    const resultMsg = `Input array of orders were ${JSON.stringify(orders)} and after merging them toghether expected value is ${expected}`;
    if (common.isArrayEqual(result, expected)) {
        console.log(resultMsg.green)
        return true;
    } else {
        console.error(`${resultMsg}, found ${result}`.brightRed);
        return false;
    }
}

function printTestResult(solutionFunc) {
    let count = 0;
    const { testMultipleOrdersArrays } = testCases;

    testMultipleOrdersArrays.forEach(({ orders, expectedResult, label = '' }, index) => {
        console.log(`${index + 1}. ${label}`.yellow);
        const isCorrect = assert(orders, solutionFunc(orders), expectedResult);

        if (!isCorrect) {
            count += 1;
        }
    });

    console.error(`You have ${count}/${testMultipleOrdersArrays.length} failling tests`.brightRed);
    console.error(`You have ${testMultipleOrdersArrays.length - count}/${testMultipleOrdersArrays.length} passing tests. Congrats!!!`.green);
}

printTestResult(mergeOrders);
