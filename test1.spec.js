/* eslint-disable no-underscore-dangle */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');
<<<<<<< Updated upstream:test.spec.js
=======
const infoMenu = require('./infoMenu');
const infoWeeklyMenu = require('./infoWeeklyMenu');
const infoDeptOffice = require('./infoDeptOffice');
const schedule = require('./schedule');
const menuCalu = require('./menuCalu');
>>>>>>> Stashed changes:test1.spec.js

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
  const rdy1 = await rtm.sendMessage('1차 테스트 시작', test_channel);
  console.log('=============');
  console.log('통합테스트시작');
  console.log('greeting test');
  const rdy2 = await rtm.sendMessage('Hi', test_channel);
});

rtm.on('message', async (message) => {
  var { text } = message;
<<<<<<< Updated upstream:test.spec.js

  console.log('받은메세지 : ', text);

=======
>>>>>>> Stashed changes:test1.spec.js
  switch (status) {
    case 0:
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
<<<<<<< Updated upstream:test.spec.js
    case 2:
    {
      const rdy3 = await rtm.sendMessage('종료', test_channel);
      console.log('======테스트 종료=======');
      process.exit(1);
    }
  }
});
=======
    case 1: {
      console.log(text);
      const rdy3 = await rtm.sendMessage('학사일정', test_channel);
      status++;
      break;
    }
    case 2: {
      console.log('==============');
      if (text == '원하시는 날짜를 입력하세요.') {
        const rdy4 = await rtm.sendMessage('12/21', test_channel);
        status++;
      } else {
        console.log('현재 메세지 : ', text);
        process.exit(1);
      }
      break;
    }
    case 3: {
      console.log('메세지1 : ', text);
      const rdy4 = await rtm.send();
      console.log('메세지2 : ', text);
      status++;
      break;
    }
    case 4: {
      console.log('메세지3 : ', text);
      status++;
      const rdy4 = await rtm.sendMessage('종료', test_channel);
      process.exit(1);
    }
  }
});

/*
    case 4:
    {
      const rdy5 = await rtm.sendMessage('오늘 밥 뭐야', test_channel);
      const txtDaily = infoMenu(rtm, test_channel);
      console.log('받은메세지 : ', text);
      if (text.includes('오늘의 식단')) {
        console.log('오늘의 식단 성공');
        process.exit(1);
      } else {
        console.log('식단 실패');
        process.exit(1);
      }
      break;
    }
  /*  case 4:
    {
      txtSch = schedule(text);
      if (text == txtSch) {
        console.log('schedule test1 성공');
        console.log('=============');
        status++;
      } else {
        console.log('실패');
      }
      break;
    }

    case 5:
    {
      if (text == mainMessage) {
        console.log('======main=======');
        const rdy3 = await rtm.sendMessage('오늘 밥 뭐야', test_channel);
        status++;
      } else {
        console.log('실패!');
        process.exit(1);
      }
      break;
    }
    /*
    case 3:
    {
      console.log('받은메세지 : ', text);
      if (text == '원하시는 날짜를 입력하세요.') {
        console.log('==================');
        const rdy4 = await rtm.sendMessage('10/15', test_channel);
        console.log('받은메세지 : ', text);
      } else {
        console.log('schedule test1 실패');
        process.exit(1);
      }
      status++;
      break;
    }
    case 4:
    {
      txtSch = schedule(text);
      if (text == txtSch) {
        console.log('schedule test 성공');
        console.log('=============');
        status++;
        console.log('======오늘의 식단 안내======');
        const rdy5 = await rtm.sendMessage('오늘 밥 뭐야', test_channel);
      } else {
        console.log('schedule test2 실패');
        process.exit(1);
      }
      break;
    }

    case 3:
    {
      const txtDaily = infoMenu(rtm, channel);
      if (text == txtDaily) {
        console.log('infoMenu test 성공');
        console.log('=================');
        status++;
      } else {
        console.log('infoMenu test 실패');
        console.log('=================');
        process.exit(1);
      }
    }
    */
>>>>>>> Stashed changes:test1.spec.js
