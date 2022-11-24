/* eslint-disable consistent-return */
/* eslint-disable func-names */
const greeting = function (rtm, channel) {
  console.log('greeting!');
  const num = Math.floor(Math.random() * 3) + 1;
  console.log(num);
  switch (num) {
    case 1:
      rtm.sendMessage('Hello!', channel);
      return Promise.resolve('success');
    case 2:
      rtm.sendMessage('Hi!', channel);
      return Promise.resolve('success');
    case 3:
      rtm.sendMessage('What`s up!', channel);
      return Promise.resolve('success');
    default:
      rtm.sendMessage('error! : say "hi" ', channel);
  }
};

module.exports = greeting;
