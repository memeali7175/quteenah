

const handler = async (m, {conn, text, isROwner, isOwner}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.gc_setwelcome

  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply(tradutor.texto1);
  } else throw `${tradutor.texto2[0]}\n*- @user (تذكير)*\n*- @group (اسم المجموعة)*\n*- @desc (وصف المجموعة)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['ترحيب'];
handler.admin = true;
export default handler;
