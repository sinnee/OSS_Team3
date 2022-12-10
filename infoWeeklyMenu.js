const infoWeeklyMenu = function (rtm, channel) {
  const axios = require('axios');
  const cheerio = require('cheerio');

  async function webScraping(url, selector) {
    var week = 0;
    const res = [['월 : '], ['화 : '], ['수 : '], ['목 : '], ['금 : ']];
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);
    const l = $(selector).first();
    const current = $(l).find('td > ul');

    for (const v of $(current)) {
      for (const s of $(v).find('li')) {
        if ($(s).text() !== '' && $(s).text() !== '\n') {
          res[week][0] = `${res[week][0]} ${$(s).text()}`;
        }
      }
      week += 1;
    }
    console.log(res);

    return res;
  }

  const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
  const selector = 'table.tblType03 > tbody > tr';

  webScraping(url, selector).then((res) => {
    console.log(res);
    console.log(typeof (JSON.stringify(res)));
    var ret = JSON.stringify(res);
    ret = ret.replace(/\\n/g, '');
    console.log(ret);
    console.log(typeof (ret));
    rtm.sendMessage(ret, channel);
    return Promise.resolve('success');
  });
};

module.exports = infoWeeklyMenu;
