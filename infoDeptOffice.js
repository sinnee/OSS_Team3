const infoDeptOffice = function (rtm, text, channel) {
  const fs = require('fs');
  const data = fs.readFileSync('./dept.txt').toString().split('\n');
  for (i in data) {
    const str = data[i].split(' - ');
    if (str[0] === text) {
      rtm.sendMessage(str[1], channel);
      return str[1];
    }
  }
  rtm.sendMessage('This department Office Address does not exist', channel);
  return 'This department Office Address does not exist';
};

module.exports = infoDeptOffice;
