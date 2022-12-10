require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');
const channel = 'C04BL0Y36PN';

let token;

try {
    token = fs.readFileSync('./token').toString('utf-8');
} catch (err) {
    console.error(err);
}

const rtm = new RTMClient(token);

(async () => {
    await rtm.start().catch(console.error);
})();


const schedule = require('./schedule.js');

describe('schedule', () => {
    describe('findSchedule', () => {
        it('it should proper schedule of acdemy', () => {
            assert.equal(schedule.findSchedule('8/4', rtm, channel), "2학기 수상신청");
        })
    })
})