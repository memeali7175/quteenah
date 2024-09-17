import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const img = await res.json();
    const caption = `
*╮ ───═┅─┅─┅═─── ╭*      🇾🇪_ *الجنہـــــرال* \n* 😎. \n*╯ ───═┅─┅─┅═─── ╰*
`.trim();
    conn.sendFile(m.chat, img[0].url, 'cat.jpg', caption, m);
  } catch (e) {
    console.log(e);
    throw '*Error!*';
  }
};
handler.help = ['cat'];
handler.tags = ['random'];
handler.command = /^قط$/i;
handler.fail = null;
export default handler;
