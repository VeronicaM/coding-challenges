const testStrings = [
    {
        str: '',
        expectedResult: '',
        label: 'empty-string'
    }, {
        str: 'a',
        expectedResult: 'a',
        label: 'single-letter-word'
    }, {
        str: 'ab',
        expectedResult: 'ba',
        label: 'two-letters-word'
    }, {
        str: 'Vera',
        expectedResult: 'areV',
        label: 'str1'
    }, {
        str: 'racecar',
        expectedResult: 'racecar',
        label: 'str1'
    },
];

module.exports = {
    testStrings
};
