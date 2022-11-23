const { RTMClient } = require('@slack/rtm-api');
const fs = require('fs');

const CuChannel = 'D04BV746J5A';

let token;

try {
  token = fs.readFileSync('./token').toString('utf-8');
} catch (err) {
  console.error(err);
}

console.log(token);

const rtm = new RTMClient(token);
rtm.start();

let status = 0;

const infoDeptOffice = require('./infoDeptOffice');

rtm.on('ready', async () => {
  const rdy = await rtm.sendMessage("1. 인사를 원하시면 'Hi'\n2. 학사 일정을 원하시면 '학사일정'\n3. 오늘의 메뉴 안내를 원하시면 '오늘 밥 뭐야'\n4. 학과 사무실 안내를 원하시면 '학과 사무실 안내'", CuChannel);
});

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  switch (status) {
    case 0:
      switch (text) {
        case '학과 사무실 안내':
          rtm.sendMessage('원하시는 학과를 입력하세요.', channel);
          status = 4;
          break;
        case '종료':
          process.exit(1);
      }
      break;

    case 4:
      infoDeptOffice(rtm, text, channel);
      status = 0;
      rtm.sendMessage("더 하실 명령이 있으신가요?\n1. 인사를 원하시면 'Hi'\n2. 학사 일정을 원하시면 '학사일정'\n3. 오늘의 메뉴 안내를 원하시면 '오늘 밥 뭐야'\n4. 학과 사무실 안내를 원하시면 '학과 사무실 안내'\n5. 종료를 원하시면 '종료'를 입력하세요", channel);
      break;
  }
});
