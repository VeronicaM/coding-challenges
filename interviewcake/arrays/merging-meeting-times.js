const colors = require('colors');
const common = require('../../common/utils.js');
const testCases = require('./testData/index.js');

/*
 * Arrays practice on interview cake 
 * https://www.interviewcake.com/concept/javascript/dynamic-array?course=fc1&section=array-and-string-manipulation 
 * Arguments: 
 * scheduledMeetings : Array<{startTime: int, endTime: int}> 
 * startTime and endTime represent the number of 30-minute blocks past 9:00am.
 * e.g. 
 *  { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
 *  { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm
 * 
 * returns: 
 *  an array of condensed ranges.
 * 
 * eg. 
 * mergeRanges(  [
 *       { startTime: 0,  endTime: 1 },
 *       { startTime: 3,  endTime: 5 },
 *       { startTime: 4,  endTime: 8 },
 *       { startTime: 10, endTime: 12 },
 *       { startTime: 9,  endTime: 10 },
 *   ])
 * returns
 *   [
 *       { startTime: 0, endTime: 1 },
 *       { startTime: 3, endTime: 8 },
 *       { startTime: 9, endTime: 12 },
 *   ]
 * 
 * Meetings times are not order by the time they occur
 * startTime and endTime should not have an upper bound
*/

function mergeRanges(scheduledMeetings = []) {
    if (scheduledMeetings.length === 2) {
        let startTime, endTime;

        const { startTime: s1, endTime: e1 } = scheduledMeetings[0];
        const { startTime: s2, endTime: e2 } = scheduledMeetings[1];

        // merge overlapping meeting intervals
        if (s2 <= e1) {
            if (s1 < s2) {
                startTime = s1;
            } else {
                startTime = s2;
            }

            if (e1 > e2) {
                endTime = e1;
            } else {
                endTime = e2;
            }

            return [{ startTime, endTime }];
        }
    }

    return scheduledMeetings;
}


function assert(scheduledMeetings, result, expected) {
    const resultMsg = `Scheduled meetings are ${JSON.stringify(scheduledMeetings)} and their expected condensed ranges are ${JSON.stringify(expected)}`;
    if (common.isArrayOfObjectsEqual(result, expected)) {
        console.log(resultMsg.green)
        return true;
    } else {
        console.error(`${resultMsg}, found ${JSON.stringify(result)}`.brightRed);
        return false;
    }
}


function printTestResult(solutionFunc) {
    let count = 0;
    const { testMeetings } = testCases;

    testMeetings.forEach(({ scheduledMeetings, expectedResult, label = '' }, index) => {
        console.log(`${index + 1}. ${label}`.yellow);
        const isCorrect = assert(scheduledMeetings, solutionFunc(scheduledMeetings), expectedResult);

        if (!isCorrect) {
            count += 1;
        }
    });

    console.error(`You have ${count}/${testMeetings.length} failling tests`.brightRed);
    console.error(`You have ${testMeetings.length - count}/${testMeetings.length} passing tests. Congrats!!!`.green);
}

printTestResult(mergeRanges);
