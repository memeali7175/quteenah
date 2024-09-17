import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

    let lister = [
        "بحث",
        "تنزيل"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|")
    if (!lister.includes(feature)) return m.reply("هذا الامر خاص بتحميل التطبيقات من موقع \n https://uapk.pro\nيمكنك تحميل التطبيقات من هذا الامر من خلال كتابة \n*.تطبيقات بحث|facebook*\n بعد ان تحصل على رابط التطبيق تعود للبوت وتكتب له هذا الامر لتنزيلة\n*.تطبيقات تنزيل|*(رابط التطبيق) \n\n\n*يجب كتابة نفس الاوامر*\n" + lister.map((v, index) => "  ○ " + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "بحث") {
            if (!inputs) return m.reply("مثال:\n.تطبيقات بحث|WhatsApp")
            await m.reply(wait)
            try {
                let res = await searchUapkpro(inputs)
                let teks = res.map((item, index) => {
                    return `🔍 *[ النتيجـة ${index + 1} ]*

🔗 *رابط التطبيق:* ${item.url}
📝 *اسم التطبيق:* ${item.title}
📥 *تنزيل التطبيق:* ${item.downloadUrl}
🏷️ *الفئــة:* ${item.category}
⭐ *التقييم:* ${item.rating}
`
                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply('error')
            }
        }

        if (feature == "تنزيل") {
            if (!inputs) return m.reply("مثال:\n.تطبيقات تنزيل|https://uapk.pro/hermit-a%c2%80%c2%94-lite-apps-browser/")
            try {
                let resl = await getUapkpro(inputs)
                
                let cap = "*الاسم:* " + resl.supportedAndroid + "\n" + "*الرابط:* " + resl.downloadLink + "\n\n" + wait
                await conn.sendFile(m.chat, resl.ogImageUrl, "", cap, m)
                await conn.sendFile(m.chat, resl.downloadLink, resl.supportedAndroid, null, m, true, {
                    quoted: m,
                    mimetype: "application/vnd.android.package-archive"
                })
            } catch (e) {
                await m.reply('error')
            }
        }
    }
}
handler.help = ["uapkpro"]
handler.tags = ["applications"]
handler.command = /^(تطبيقات)$/i
handler.premium = false
export default handler

/* New Line */
async function searchUapkpro(q) {
const url = 'https://uapk.pro/?s=' + q; // Ganti dengan URL yang sesuai
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const result = [];

  $('.col-md-2.col-sm-4.col-xs-6').each((index, element) => {
    const obj = {
      title: $(element).find('.inner-box a[href]').text().trim(),
      url: $(element).find('.inner-box a[href]').attr('href'),
      category: $(element).find('.detail .sub-detail a').text().trim(),
      rating: $(element).find('.detail .display-rating').text().trim(),
      downloadUrl: $(element).find('a[href].anchor-hover').attr('href')
    };

    result.push(obj);
  });

  return result;
}

async function getUapkpro(url) {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const ogImageUrl = $('meta[property="og:image"]').attr('content');

  const supportedAndroid = $('p strong').text();
  const title = $('h1').text();
  const downloadLink = $('p a').attr('href');

  const obj = {
    supportedAndroid,
    title,
    downloadLink,
    ogImageUrl
  };

  return obj;
}
