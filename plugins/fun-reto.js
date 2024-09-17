
const handler = async (m, {conn}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.fun_reto

  global.bucin = tradutor.texto1;

  conn.reply(m.chat, `*┌───🧑‍🦯 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 𝚊𝚕𝚒 𝚚𝚞𝚝𝚎𝚎𝚗𝚊𝚑 」─*`, m);
};
handler.help = ['reto'];
handler.tags = ['fun'];
handler.command = /^تحدي/i;
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}


