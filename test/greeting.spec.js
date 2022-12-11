/* eslint-disable no-return-assign */
/* eslint-disable no-undef */

const { RTMClient } = require('@slack/rtm-api');
const assert = require('assert');
const fs = require('fs');

const channel = 'D047E2WCP7X';

let token;

try {
  token = fs.readFileSync('../token').toString('utf-8');
} catch (err) {
  console.error(err);
}

console.log(token);

const rtm = new RTMClient(token);

(async () => {
  await rtm.start()
    .catch(console.error);
})();

const greeting = require('../greeting');

let res;

describe('mocha test', async () => {
  before(async () => res = await greeting(rtm, channel));

  it('test - greeting', (done) => {
    console.log(res);
    assert.equal(res, 'success');
    done();
  });
});
