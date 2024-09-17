import axios from 'axios';
import cheerio from 'cheerio';
const handler = async (m, {command, conn}) => {
  const apikey = global.keysxxx;
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const name = await conn.getName[who];
  const fgif = m;

  if (command == 'جبال') {
    const anu = await wallpaper('mountain');
    const result = anu[Math.floor(Math.random() * anu.length)];
    const haha = result.image[0];
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*`.trim()}, {quoted: m});
  }

  if (command == 'بوبجي') {
    const pug = ['pubg', 'playerunknowns battlegrounds', 'pubg mobile'];
    const pug2 = pug[Math.floor(Math.random() * pug.length)];
    const anu = await wallpaper(pug2);
    const result = anu[Math.floor(Math.random() * anu.length)];
    const haha = result.image[0];
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*_`.trim()}, {quoted: m});
  }

  if (command == 'الفسفور') {
    const ga = ['gaming', 'gamers', 'video game'];
    const ga2 = ga[Math.floor(Math.random() * ga.length)];
    const anu = await wallpaper(ga2);
    const result = anu[Math.floor(Math.random() * anu.length)];
    const haha = result.image[0];
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*`.trim()}, {quoted: m});
  }

  if (command == 'خلفيات') {
    const anu = await wallpaper('aesthetic');
    const result = anu[Math.floor(Math.random() * anu.length)];
    const haha = result.image[0];
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*`.trim()}, {quoted: m});
  }

  if (command == 'خلفيات2') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/wprandom.json`)).data;
    const res2 = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res2}, caption: `*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*`.trim()}, {quoted: m});
  }

  if (command == 'coffee') {
    const haha = await conn.getFile(`https://coffee.alexflipnote.dev/random`);
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha.data}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'بنتول') {
    const anu = await wallpaper('milk y mocha');
    const result = anu[Math.floor(Math.random() * anu.length)];
    const haha = result.image[0];
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*`.trim()}, {quoted: m});
  }

  if (command == 'كاركتير') {
    const anu = await wallpaper('cartoon network');
    const result = anu[Math.floor(Math.random() * anu.length)];
    const haha = result.image[0];
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*`.trim()}, {quoted: m});
  }

  if (command == 'سبايسو') {
    const anu = await wallpaper('cyberspace');
    const result = anu[Math.floor(Math.random() * anu.length)];
    const haha = result.image[0];
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*`.trim()}, {quoted: m});
  }

  if (command == 'تكنولوجيا') {
    const anu = await wallpaper('technology');
    const result = anu[Math.floor(Math.random() * anu.length)];
    const haha = result.image[0];
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*`.trim()}, {quoted: m});
  }

  if (command == 'دورايمون') {
    const anu = await wallpaper('doraemon');
    const result = anu[Math.floor(Math.random() * anu.length)];
    const haha = result.image[0];
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*`.trim()}, {quoted: m});
  }

  if (command == 'هاكر') {
    const anu = await wallpaper('hacker');
    const result = anu[Math.floor(Math.random() * anu.length)];
    const haha = result.image[0];
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*`.trim()}, {quoted: m});
  }

  if (command == 'كوكب') {
    const anu = await wallpaper('planet');
    const result = anu[Math.floor(Math.random() * anu.length)];
    const haha = result.image[0];
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*`.trim()}, {quoted: m});
  }

  if (command == 'randomprofile') {
    const haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/profil?apikey=${apikey}`);
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha.data}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'wpaesthetic2') {
    const haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/aesthetic?apikey=${apikey}`);
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha.data}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'wpvehiculo') {
    const haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/mobil?apikey=${apikey}`);
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha.data}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'wallhp') {
    const haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/wallhp?apikey=${apikey}`);
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha.data}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'wpmoto') {
    const haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/motor?apikey=${apikey}`);
    await conn.reply(m.chat, global.wait, m);
    conn.sendMessage(m.chat, {image: {url: haha.data}, caption: `_${command}_`.trim()}, {quoted: m});
  }
};
handler.command = ['جبال', 'بوبجي', 'الفسفور', 'خلفيات', 'خلفيات2', 'coffee', 'بنتول', 'كاركتير', 'سبايسو', 'تكنولوجيا', 'دورايمون', 'هاكر', 'كوكب', 'randomprofile', 'wpaesthetic2', 'wpvehiculo', 'wallhp', 'wpmoto'];
export default handler;

async function wallpaper(title, page = '1') {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`).then(({data}) => {
      const $ = cheerio.load(data);
      const hasil = [];
      $('div.grid-item').each(function(a, b) {
        hasil.push({
          title: $(b).find('div.info > a > h3').text(),
          type: $(b).find('div.info > a:nth-child(2)').text(),
          source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
          image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')],
        });
      });
      resolve(hasil);
    });
  });
}
