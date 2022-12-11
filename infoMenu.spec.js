require('dotenv').config();
const { RTMClient } = require('@slack/rtm-api');
const fs = require('fs');

const channel = 'D04BB08UHN2';
const assert = require('assert');
const infoMenu = require('./infoMenu');

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
  before(async () => res = await infoMenu(rtm, channel));
  
  it('금일 메뉴 알림 테스트', (done) => {
    assert.equal(res, 'success');
    done();
  });
});
