const testMeetings = [{
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
    scheduledMeetings: [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }],
    expectedResult: [{ startTime: 1, endTime: 3 }],
    label: 'two-chained-meetings'
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
];

module.exports = {
    testMeetings
}