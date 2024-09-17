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
        "السور",
        "سوره",
        "تفسير"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return m.reply("*مثال:*\n.القرآن السور\n\n*تكتب بعد كلمة القرآن*\n" + lister.map((v, index) => "  ○ " + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "السور") {
            await m.reply(wait)
            try {
                let res = await surahList()
                let teks = res.surahList.map((item, index) => {
                    return `🔍 *[ النتيجه ${index + 1} ]*

📚 السوره: ${item.name}
🔗 الرابط: ${item.link}
📝 الرقم: ${item.number}
  `
                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply(eror)
            }
        }

        if (feature == "سوره") {
            if (!inputs) return m.reply("Input query link\nExample: .القرآن سوره 5\nList: .القران السور")
            await m.reply(wait)
            try {
                let res = await surahList()
                let data = await surahAyah(res.surahList[parseInt(inputs) + 1].link)
                let teks = data.map((item, index) => {
                    return `🔍 *[ النتيجه ${index + 1} ]*

📖 العربية: ${item.quranTitle}
🌐 اللاتينية: ${item.quranLatin}
🌍 الترجمة: ${item.quranTranslate}
🔗 الرابط: ${item.url}
`
                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply(eror)
            }
        }
        
        if (feature == "تفسير") {
            if (!inputs) return m.reply("طريفة الادخال\nمثال: .القران 2 5\nالسور: .القران السور")
            if (!inputs_) return m.reply("استعلام الادخال\nمثال: .القران 2 5\nالسور: .القران السور")
            await m.reply(wait)
            try {
                let res = await surahList()
                let data = await surahAyah(res.surahList[parseInt(inputs) + 1].link)
                let item = await surahTafsir(data[parseInt(inputs_) + 1].url)
                let teks = `🔍 *[ النتيجة ]*

📖 تفسير تحليلي: ${item.firstText}
📘 تفسير وجيز: ${item.secondText}
`
                await m.reply(teks)

            } catch (e) {
                await m.reply(eror)
            }
        }
        
        
    }
}
handler.help = ["nu"]
handler.tags = ["internet"]
handler.command = /^(القران|coran)$/i
export default handler

/* New Line */

// Fungsi untuk memeriksa apakah format input adalah nomor
function isNumberFormat(input) {
    return /^\d+$/.test(input);
}

async function surahList() {
  try {
  	const url = 'https://quran.nu.or.id/al-fatihah'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);

    const surahList = $('.flex.justify-center .mr-1 select option').map((index, element) => ({
      name: $(element).val().split('/')[1],
      number: $(element).text().trim().split('.')[0],
      link: 'https://quran.nu.or.id' + $(element).val(),
    })).get();

    const ayahList = $('#ayah-select option').map((index, element) => $(element).val()).get();

    return { surahList, ayahList };
  } catch (error) {
    console.log(error);
    return null;
  }
};

async function surahAyah(query){
  try {
  const url = query; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);

    const data = [];

    $('div[id^="ayah"]').each((index, element) => {
      const url = 'https://quran.nu.or.id' + $(element).find('a[href^="/"]').attr('href');
      const tafsir = $(element).find('a[href^="/"]').next().text().trim();
      const quranTitle = $(element).find('.text-right.font-omar.text-3xl').text().trim();
      const quranLatin = $(element).find('.font-omar.text-2xl').text().trim();
      const quranTranslate = $(element).find('.font-inter').text().trim();

      data.push({ url, tafsir, quranTitle, quranLatin, quranTranslate });
    });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

async function surahTafsir(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);

    const firstText = $('#first').find('p.font-inter').text().trim();
    const secondText = $('#second').find('p.font-inter').text().trim();

    return { firstText, secondText };
  } catch (error) {
    console.log(error);
    return null;
  }
};
