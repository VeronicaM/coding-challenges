const colors = require('colors');
const common = require('../../common/utils.js');
const testCases = require('./testData/index.js');

/*
 * Arrays practice on interview cake 
 * https://www.interviewcake.com/question/javascript/reverse-words?course=fc1&section=array-and-string-manipulation
 * Arguments: 
 * message : Array<char> 
 * 
 * assume the message contains only letters and spaces, and all words are separated by one space
 * 
 * returns:void and the argument words array are reversed in place
 * 
 * eg. 
 *   const message = [ 'c', 'a', 'k', 'e', ' ',
 *               'p', 'o', 'u', 'n', 'd', ' ',
 *               's', 't', 'e', 'a', 'l' ];
 *   reverseWords(message);
 *   console.log(message.join('')); // Prints: 'steal pound cake'
 * 
*/

function reverseWords(chars = []) {
    const hasWords = chars.indexOf(' ') > -1;

    if (hasWords) {
        /*
         * reverse all the characters in the entire message
         * This gives us the right word order but with each word backward
         */
        reverseWord(0, chars.length - 1, chars);

        //reversing each word's characters

        let wordStartIndex = 0;

        for (let i = 0; i <= chars.length; i++) {
            // found a word ending
            if (chars[i] === ' ' || i === chars.length) {
                reverseWord(wordStartIndex, i - 1, chars);

                wordStartIndex = i + 1;
            }
        }
    }
}

function reverseWord(leftIndex, rightIndex, chars) {
    while (leftIndex < rightIndex) {
        const temp = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }
}

function assert(chars, result, expected) {
    const resultMsg = `Input array was initially ${chars} and after being reversed the expected value is ${expected}`;
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
    const { testWordsArrays } = testCases;

    testWordsArrays.forEach(({ chars, expectedResult, label = '' }, index) => {
        console.log(`${index + 1}. ${label}`.yellow);
        const copyInitialArr = [...chars];
        solutionFunc(chars);
        const isCorrect = assert(copyInitialArr, chars, expectedResult);

        if (!isCorrect) {
            count += 1;
        }
    });

    console.error(`You have ${count}/${testWordsArrays.length} failling tests`.brightRed);
    console.error(`You have ${testWordsArrays.length - count}/${testWordsArrays.length} passing tests. Congrats!!!`.green);
}

printTestResult(reverseWords);
