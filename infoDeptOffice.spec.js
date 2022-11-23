require('dotenv').config();
const { RTMClient } = require('@slack/rtm-api');
const fs = require('fs');

const channel = 'D04BB08UHN2';
const assert = require('assert');
const infoDeptOffice = require('./infoDeptOffice');

let token;

try {
  token = fs.readFileSync('./test_token').toString('utf-8');
} catch (err) {
  console.error(err);
}

console.log(token);

const rtm = new RTMClient(token);

(async () => {
  await rtm.start().catch(console.error);
})();

let res;

describe('테스트를 시작합니다.', async () => {
  before(async () => res = await infoDeptOffice(rtm, 'Computer Science and Engineering', channel));

  it('학과 사무실 안내 모듈 테스트', (done) => {
    console.log(res);
    assert.equal(res, 'College of Engineering Building 7, 224\r');
    done();
  });
});
