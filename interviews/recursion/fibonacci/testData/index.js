const testFibonacciNumbers = [
    {
        params: 0,
        expectedResult: 0,
        label: 'first-fib-number'
    },
    {
        params: 1,
        expectedResult: 1,
        label: 'second-fib-number'
    },
    {
        params: 2,
        expectedResult: 1,
        label: 'third-fib-number'
    },
    {
        params: 7,
        expectedResult: 8,
        label: 'seventh-fib-number'
    },
    {
        params: 10,
        expectedResult: 34,
        label: 'tenth-fib-number'
    }
];

module.exports = {
    testFibonacciNumbers,
};