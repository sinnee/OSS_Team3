/* eslint-disable no-undef */
/* eslint-disable global-require */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const infoDeptOffice = function (rtm, text, channel) {
  const fs = require('fs');
  const data = fs.readFileSync('./dept.txt').toString().split('\n');
  const TextV = text.replace(/(\s*)/g, '').toLowerCase();
  console.log(text);
  for (i in data) {
    const str = data[i].split(' - ');
    str[0] = str[0].replace(/(\s*)/g, '').toLowerCase();
    console.log(str[0]);
    if (str[0] === TextV) {
      // rtm.sendMessage(str[1], channel);
      return str[1];
    }
  }
  // rtm.sendMessage('This department Office Address does not exist', channel);
  return 'This department Office Address does not exist';
};

module.exports = infoDeptOffice;
