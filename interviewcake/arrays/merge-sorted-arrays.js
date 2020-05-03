const colors = require('colors');
const common = require('../../common/utils.js');
const testCases = require('./testData/index.js');

/*
 * Arrays practice on interview cake 
 * https://www.interviewcake.com/question/javascript/merge-sorted-arrays?course=fc1&section=array-and-string-manipulation
 * 
 * Arguments: 
 * orders1 : already sorted Array<int> 
 * orders2: already sorted Array<int> 
 * 
 * returns: 1 sorted array of both orders arrays
 * 
 * eg. 
 *     const myArray = [3, 4, 6, 10, 11, 15];
 *     const alicesArray = [1, 5, 8, 12, 14, 19];
 *     console.log(mergeOrders(myArray, alicesArray));
 *     // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
 * 
 * assumption: order ids are unique and there won't be any duplicates
*/

function mergeOrders(orders1 = [], orders2 = []) {
    if (orders1.length < 2 && orders2.length < 2) return [...orders1, ...orders2];

    // merge using merge sort
    let i = 0;
    let j = 0;
    const mergedOrders = [];

    while (mergedOrders.length < (orders1.length + orders2.length)) {
        // choose which orderId needs to be pushed first from the 2 already sorted orders arrays
        if (i < orders1.length &&
            (orders1[i] < orders2[j] || j === orders2.length)
        ) {
            mergedOrders.push(orders1[i]);
            i++;
        } else {
            mergedOrders.push(orders2[j]);
            j++;
        }
    }

    return mergedOrders;
}

function assert(orders1, orders2, result, expected) {
    const resultMsg = `Input array of orders were ${orders1} and ${orders2} and after merging them toghether expected value is ${expected}`;
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
    const { testOrdersArrays } = testCases;

    testOrdersArrays.forEach(({ orders1, orders2, expectedResult, label = '' }, index) => {
        console.log(`${index + 1}. ${label}`.yellow);
        const isCorrect = assert(orders1, orders2, solutionFunc(orders1, orders2), expectedResult);

        if (!isCorrect) {
            count += 1;
        }
    });

    console.error(`You have ${count}/${testOrdersArrays.length} failling tests`.brightRed);
    console.error(`You have ${testOrdersArrays.length - count}/${testOrdersArrays.length} passing tests. Congrats!!!`.green);
}

printTestResult(mergeOrders);
