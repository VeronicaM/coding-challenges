const colors = require('colors');
const common = require('../../../common/utils.js');
const testCases = require('./testData/index.js');

/* 
 *  Arguments:
 *  str: String
 * 
 * returns number as count of the vowels (a,e, i, o, u ) found in the string
 * eg. 
 * const str = 'Veronica';
 * countVowels(str) 
 * return '4'
*/

function isVowel(character) { // function to check whether input character is a vowel
    const vowels = { 'a': true, 'e': true, 'i': true, 'o': true, 'u': true }; // use an object with vowels as keys

    return Boolean(vowels[character.toLocaleLowerCase()]);
}

function countVowels(str, index = -1) { //function that returns the count of vowels ve, -1
    let innerIndex = index === -1 ? 0 : index;

    if (!str.length) return 0;

    // Base case
    if (innerIndex == str.length - 1) {
        return isVowel(str[innerIndex]) ? 1 : 0;
    }

    // Recursive case
    let currentCharCount = isVowel(str[innerIndex]) ? 1 : 0;
    return countVowels(str, innerIndex + 1) + currentCharCount;
}


function assert(str, result, expected) {
    const resultMsg = `Input str was initially ${str} and the expected number of vowels value is ${expected}`;
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
    const { testStringsWithVowels } = testCases;

    ((testData) => {
        testData.forEach(function loopUnitTests({ str, expectedResult, label = '' }, index) {
            console.log(`${index + 1}. ${label}`.yellow);

            const isCorrect = assert(str, solutionFunc(str), expectedResult);

            if (!isCorrect) {
                count += 1;
            }
        });

        console.error(`You have ${count}/${testData.length} failling tests`.brightRed);
        console.error(`You have ${testData.length - count}/${testData.length} passing tests. Congrats!!!`.green);
    })(testStringsWithVowels);
}

printTestResult(countVowels);