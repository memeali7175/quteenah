import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `اكتب اسم الصور المراد البحث عنها وعدد الصور, مثال:${usedPrefix}صور قط 4`;
  }
  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  const match = text.match(/(\d+)/);
  const numberOfImages = match ? parseInt(match[1]) : 1;

  try {
    m.reply('*_يرجـي الانتـظار_*');

    const images = [];

    for (let i = 0; i < numberOfImages; i++) {
      const endpoint = `https://www.guruapi.tech/api/googleimage?text=${encodeURIComponent(text)}`;
      const response = await fetch(endpoint);

      if (response.ok) {
        const imageBuffer = await response.buffer();
        images.push(imageBuffer);
      } else {
        throw '*فشل انشاء صوره اعد المحاولة*';
      }
    }


    for (let i = 0; i < images.length; i++) {
      await conn.sendFile(m.chat, images[i], `image_${i + 1}.png`, null, m);
    }
  } catch {
    throw '*حـدث خطأ أثناء تحميل الصور اعد المحاوله لاحقا.*';
  }
};

handler.help = ['image'];
handler.tags = ['fun'];
handler.command = ['خلفيات', 'صور'];

export default handler;
