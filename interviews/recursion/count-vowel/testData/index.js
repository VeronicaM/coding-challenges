const testStringsWithVowels = [
    {
        str: "",
        expectedResult: 0,
        label: 'empty-array'
    },
    {
        str: "v",
        expectedResult: 0,
        label: 'one-letter-string-no-vowel'
    },
    {
        str: "ve",
        expectedResult: 1,
        label: 'two-letter-string-one-vowel'
    },
    {
        str: "veronica",
        expectedResult: 4,
        label: 'str1'
    },
    {
        str: "javascript",
        expectedResult: 3,
        label: 'str2'
    },
    {
        str: "javascript",
        expectedResult: 3,
        label: 'str3'
    },
];

module.exports = {
    testStringsWithVowels,
};
