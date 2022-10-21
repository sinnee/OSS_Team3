const {RTMClinet} = require('@slack/rtm-api')

var token = 'xoxb-4242200898914-4257509219044-hHwblGSJG4jH8YHQwtRipEsx'

var rtm = new RTMClinet(token);
rtm.start();

rtm.on('message', function (message){
    var channel = message.channel;
    var text = message.text;

    if (text == 'hello')
        rtm.sendMessage('hi', channel);
    else
        rtm.sendMessage('what?', channel);
});