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
  const rdy1 = await rtm.sendMessage('테스트 시작', test_channel);
  console.log('=============');
  console.log('통합테스트시작');
  console.log('=======greeting======');
  const rdy2 = await rtm.sendMessage('Hi', test_channel);
  status++;
});

rtm.on('message', async (message) => {
  var { text } = message;

  console.log('받은메세지 : ', text);

  switch (status) {
    case 1:
    {
      if (text == 'Hello!' || text == 'Hi!' || text == 'What`s up!') {
        console.log('greeting test 성공');
        console.log('=============');
      } else {
        console.log('greeting test 실패');
        process.exit(1);
      }
      status++;
      break;
    }
    case 2:
    {
      console.log('======학사일정=======');
      const rdy3 = await rtm.sendMessage('학사일정', test_channel);
      status++;
      break;
    }
    case 3:
    {
      console.log('받은 메세지 : ', text);
      if (text == '원하시는 날짜를 입력하세요.') {
        const rdy4 = await rtm.sendMessage('12/21', test_channel);
        status++;
      } else {
        console.log('schedule test 실패');
        process.exit(1);
      }
      break;
    }
    case 4:
    {
      if (text == '종강') {
        console.log('schedule test 성공');
        process.exit(1);
      } else {
        console.log('schedule test 실패');
        process.exit(1);
      }
    }
  }
});
