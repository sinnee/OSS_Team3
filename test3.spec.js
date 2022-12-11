/* eslint-disable no-underscore-dangle */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');
const fs = require('fs');
const infoMenu = require('./infoMenu');
const infoWeeklyMenu = require('./infoWeeklyMenu');
const infoDeptOffice = require('./infoDeptOffice');
const schedule = require('./schedule');
const menuCalu = require('./menuCalu');

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
  const rdy1 = await rtm.sendMessage('3차 테스트 시작', test_channel);
  console.log('=============');
  console.log('통합테스트시작');
  console.log('=======WeeklyMenu======');
  const rdy2 = await rtm.sendMessage('이번주 뭐나와', test_channel);
  status++;
});

rtm.on('message', async (message) => {
  var { text } = message;
  switch (status) {
    case 1: {
      if (text.includes('주간 식단') && text.includes('점')) {
        console.log('WeeklyMenu test 성공');
        const rdy3 = await rtm.sendMessage('학과 사무실 안내', test_channel);
        status++;
      } else {
        console.log('WeeklyMenu test 실패');
        process.exit(1);
      }
      break;
    }
    case 2: {
      if (text == '원하시는 학과를 입력하세요.') {
        const rdy4 = await rtm.sendMessage('Architectural Engineer', test_channel);
        status++;
      } else {
        console.log('dept test 실패');
        process.exit(1);
      }
      break;
    }
    case 3: {
      if (text.includes('Architectural Engineering')) {
        console.log('dept test 성공');
        status++;
      } else {
        console.log('dept test 실패');
        process.exit(1);
      }
      break;
    }
    case 4: {
      const rdy5 = await rtm.sendMessage('종료', test_channel);
      Process.exit(1);
    }
  }
});
