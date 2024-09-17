import {toDataURL} from 'qrcode';


const handler = async (m, {text, conn}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.herramientas_qrcode

  if (!text) throw tradutor.texto1;
  conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), {scale: 8}), 'qrcode.png', '💙الباركـود جاهـــز💙\n╮ ───═┅─┅─┅═─── ╭\n•🇾🇪_ علــي_قطينـــٓــة\n╯ ───═┅─┅─┅═─── ╰', m);
};
handler.help = ['', 'code'].map((v) => 'qr' + v + ' <teks>');
handler.tags = ['tools'];
handler.command = /^باركود(code)?$/i;
export default handler;
