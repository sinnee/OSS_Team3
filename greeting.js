const greeting = function (rtm, channel) {
  console.log('greeting!');
  const num = Math.floor(Math.random() * 3) + 1;
  console.log(num);

  switch (num) {
    case 1:
      rtm.sendMessage('Hello!', channel);
      break;
    case 2:
      rtm.sendMessage('Hi!', channel);
      break;
    case 3:
      rtm.sendMessage('What`s up!', channel);
      break;
    default:
      rtm.sendMessage('error! : say "hi" ', channel);
  }
};

module.exports = greeting;
