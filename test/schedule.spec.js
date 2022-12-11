/* eslint-disable import/extensions */
require('dotenv').config();
const assert = require('assert');

const schedule = require('../schedule.js');

describe('schedule', () => {
  describe('findSchedule', () => {
    it('it should proper schedule of acdemy', () => {
      assert.equal(schedule('8/4'), ' 2학기 수강신청\r\n');
    });
  });
});
