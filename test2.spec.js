/* eslint-disable no-underscore-dangle */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');
const fs = require('fs');

var status = 0;
let token;

try {
  token = fs.readFileSync('./test_token').toString('utf-8');
} catch (err) {
  console.error(err);
}

token = token.trim();
var test_channel = 'C04F0BDRBG8';

console.log(token);

const rtm = new RTMClient(token);

rtm.start();

rtm.on('ready', async () => {
  const rdy1 = await rtm.sendMessage('2차 테스트 시작', test_channel);
  console.log('=============');
  console.log('통합테스트시작');
  console.log('=======DailyMenu======');
  const rdy2 = await rtm.sendMessage('오늘 밥 뭐야', test_channel);
});

rtm.on('message', async (message) => {
  var { text } = message;
  if (text.includes('오늘의 식단')) {
    console.log('DailyMenu test 성공');
    const rdy3 = await rtm.sendMessage('종료', test_channel);
  } else {
    console.log('DailyMenu test 실패');
    process.exit(1);
  }
  process.exit(1);
});
