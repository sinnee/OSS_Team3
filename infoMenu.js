const infoMenu = function (rtm, channel) {
  const axios = require('axios');
  const cheerio = require('cheerio');

  async function webScraping(url, week, selector) {
    const res = [];
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);
    const l = $(selector).first();
    const current = $(l).find('td > ul').get(week);

    for (const v of $(current).find('li')) {
      if ($(v).text() !== '') {
        res.push($(v).text());
      }
    }
    console.log(res);

    return res;
  }

  const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
  const selector = 'table.tblType03 > tbody > tr';
  const now = new Date();
  const week = now.getDay() - 1;
  if (week === -1 || week === 5) {
    return rtm.sendMessage('주말에는 운영하지 않습니다', channel);
  }
  webScraping(url, week, selector).then((res) => {
    console.log(res);
    console.log(typeof (JSON.stringify(res)));
    return rtm.sendMessage(JSON.stringify(res), channel);
  });
};

module.exports = infoMenu;