const testMeetings = [
    {
        scheduledMeetings: [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }],
        expectedResult: [{ startTime: 1, endTime: 3 }],
        label: 'two-chained-meetings'
    },
    {
        scheduledMeetings: [],
        expectedResult: [],
        label: 'no-meeting-scheduled'
    },
    {
        scheduledMeetings: [{ startTime: 0, endTime: 4 }, { startTime: 1, endTime: 3 }],
        expectedResult: [{ startTime: 0, endTime: 4 }],
        label: 'two-overlapping-meetings-no-stretch'
    },
    {
        scheduledMeetings: [{ startTime: 1, endTime: 3 }, { startTime: 0, endTime: 4 }],
        expectedResult: [{ startTime: 0, endTime: 4 }],
        label: 'reversed-two-overlapping-meetings-no-stretch'
    },
    {
        scheduledMeetings: [{ startTime: 0, endTime: 4 }, { startTime: 1, endTime: 5 }],
        expectedResult: [{ startTime: 0, endTime: 5 }],
        label: 'two-overlapping-meetings-stretched1'
    },
    {
        scheduledMeetings: [{ startTime: 1, endTime: 4 }, { startTime: 2, endTime: 5 }],
        expectedResult: [{ startTime: 1, endTime: 5 }],
        label: 'two-overlapping-meetings-stretched2'
    },
    {
        scheduledMeetings: [{ startTime: 2, endTime: 5 }, { startTime: 0, endTime: 3 }],
        expectedResult: [{ startTime: 0, endTime: 5 }],
        label: 'two-overlapping-meetings-stretched3'
    },
    {
        scheduledMeetings: [{ startTime: 2, endTime: 3 }, { startTime: 6, endTime: 9 }],
        expectedResult: [{ startTime: 2, endTime: 3 }, { startTime: 6, endTime: 9 }],
        label: 'two-no-overlapping-meetings'
    },
    {
        scheduledMeetings: [{ startTime: 1, endTime: 2 }, { startTime: 3, endTime: 4 }, { startTime: 5, endTime: 6 }],
        expectedResult: [{ startTime: 1, endTime: 2 }, { startTime: 3, endTime: 4 }, { startTime: 5, endTime: 6 }],
        label: 'three-no-overlapping-meetings'
    },
    {
        scheduledMeetings: [{ startTime: 1, endTime: 4 }, { startTime: 2, endTime: 5 }, { startTime: 3, endTime: 6 }],
        expectedResult: [{ startTime: 1, endTime: 6 }],
        label: 'three-overlapping-meetings-one-block'
    },
    {
        scheduledMeetings: [
            { startTime: 0, endTime: 1 },
            { startTime: 3, endTime: 5 },
            { startTime: 4, endTime: 8 },
            { startTime: 10, endTime: 12 },
            { startTime: 9, endTime: 10 },
        ],
        expectedResult: [
            { startTime: 0, endTime: 1 },
            { startTime: 3, endTime: 8 },
            { startTime: 9, endTime: 12 }
        ],
        label: 'overlapping-meetings1'
    }];

const testArrays = [
    {
        chars: [],
        expectedResult: [],
        label: 'empty-array'
    },
    {
        chars: ['v'],
        expectedResult: [
            'v'
        ],
        label: 'one-char-array'
    },
    {
        chars: [
            'v',
            'e',
            'r',
            'a'
        ],
        expectedResult: [
            'a',
            'r',
            'e',
            'v'
        ],
        label: 'short-array1'
    },
    {
        chars: [
            'b',
            'u',
            'c',
            'u',
            'r',
            'e',
            's',
            't',
            'i'
        ],
        expectedResult: [
            'i',
            't',
            's',
            'e',
            'r',
            'u',
            'c',
            'u',
            'b'
        ],
        label: 'short-array2'
    },

];

const testWordsArrays = [
    {
        chars: [],
        expectedResult: [],
        label: 'empty-array'
    },
    {
        chars: ['v'],
        expectedResult: [
            'v'
        ],
        label: 'one-char-array'
    },
    {
        chars: [
            'v',
            'e',
            'r',
            'a'
        ],
        expectedResult: [
            'v',
            'e',
            'r',
            'a'
        ],
        label: 'one-word-array'
    },
    {
        chars: [
            'v',
            'e',
            'r',
            'o',
            'n',
            'i',
            'c',
            'a',
            ' ',
            'm',
            'i',
            'h',
            'a',
            'i'
        ],
        expectedResult: [
            'm',
            'i',
            'h',
            'a',
            'i',
            ' ',
            'v',
            'e',
            'r',
            'o',
            'n',
            'i',
            'c',
            'a',
        ],
        label: 'two-words-array'
    },
    {
        chars: [
            'v',
            'e',
            'r',
            'a',
            ' ',
            'm',
            'i',
            'h',
            'a',
            'i'
        ],
        expectedResult: [
            'm',
            'i',
            'h',
            'a',
            'i',
            ' ',
            'v',
            'e',
            'r',
            'a',
        ],
        label: 'two-words-array'
    },
    {
        chars: [
            'c', 'a', 'k', 'e', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            's', 't', 'e', 'a', 'l'
        ]
        ,
        expectedResult: [
            's', 't', 'e', 'a', 'l', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            'c', 'a', 'k', 'e',
        ],
        label: 'three-words-array'
    },
];

const testOrdersArrays = [
    {
        orders1: [],
        orders2: [],
        expectedResult: [],
        label: 'two-empty-orders'
    },
    {
        orders1: [],
        orders2: [1, 5, 8, 12, 14, 19],
        expectedResult: [
            1, 5, 8, 12, 14, 19
        ],
        label: 'one-empty-order'
    },
    {
        orders1: [3, 4, 6, 10, 11, 15],
        orders2: [1, 5, 8, 12, 14, 19],
        expectedResult: [
            1, 3, 4, 5, 6, 8,
            10, 11, 12, 14, 15, 19
        ],
        label: 'overlapping-arrays'
    },
    {
        orders1: [1, 2, 3, 4, 5, 6],
        orders2: [7, 8, 9, 10, 11, 12],
        expectedResult: [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12
        ],
        label: 'non-overlapping-arrays'
    },
    {
        orders1: [7, 8, 9, 10, 11, 12],
        orders2: [1, 2, 3, 4, 5, 6],
        expectedResult: [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12
        ],
        label: 'reversed-non-overlapping-arrays'
    },
    {
        orders1: [7, 8, 9, 12],
        orders2: [1, 2, 3, 4, 5, 6],
        expectedResult: [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 12
        ],
        label: 'non-equal-number-of-orders'
    }, {
        orders1: [7, 8, 9, 12],
        orders2: [1, 6],
        expectedResult: [
            1, 6,
            7, 8, 9, 12
        ],
        label: 'non-equal-number-of-orders2'
    }
];

const testMultipleOrdersArrays = [
    {
        orders: [[], [], []],
        expectedResult: [],
        label: 'three-empty-orders'
    },
    {
        orders: [[], [1, 5, 8, 12, 14, 19], [15, 16, 17]],
        expectedResult: [
            1, 5, 8, 12, 14, 15, 16, 17, 19
        ],
        label: 'one-empty-order'
    },
    {
        orders: [[3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19], [20, 21]],
        expectedResult: [
            1, 3, 4, 5, 6, 8,
            10, 11, 12, 14, 15, 19, 20, 21
        ],
        label: 'overlapping-arrays'
    },
    {
        orders: [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14]],
        expectedResult: [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12,
            13, 14
        ],
        label: 'non-overlapping-arrays'
    },
    {
        orders: [[7, 8, 9, 10, 11, 12], [1, 2, 3, 4, 5, 6], [20, 21]],
        expectedResult: [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12,
            20, 21
        ],
        label: 'reversed-non-overlapping-arrays'
    },
    {
        orders: [[7, 8, 9, 12], [1, 2, 3, 4, 5, 6], [13, 14]],
        expectedResult: [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 12,
            13, 14
        ],
        label: 'non-equal-number-of-orders'
    }, {
        orders: [[7, 8, 9, 12, 13], [1, 2, 3, 4, 5, 6], [15, 18], [14, 16]],
        expectedResult: [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 12,
            13, 14, 15, 16, 18
        ],
        label: '4-arrays'
    }
];

module.exports = {
    testMeetings,
    testArrays,
    testWordsArrays,
    testOrdersArrays,
    testMultipleOrdersArrays
};
