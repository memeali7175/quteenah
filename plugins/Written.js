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
        "اقتباس",
        "بحث",
        "كتب",
        "تنزيل"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|")
    if (!lister.includes(feature)) return m.reply("*مثال:*\n.كتابي بحث\n\n*يجب كتابة الاوامر بنفس الطريقة*\n" + lister.map((v, index) => "  ○ " + v).join("\n"))
    let regpdf = /^(?!.*-pdf$).*$/;

    if (lister.includes(feature)) {

        if (feature == "تنزيل") {
            if (regpdf.test(inputs)) return m.reply("طريقة الادخال\nمثال: .كتابي تنزيل|الرابط")
            try {
                let array = await getPdf(inputs)
                let resl = array[Math.floor(Math.random() * array.length)];
                let cap = `*العنوان:* ${resl.ogTitle}
*الوصف:* ${resl.ogDescription}
*الرابط:* ${resl.downloadLink} ( ${resl.downloadButtonText} )
*الرابط:* ${resl.readLink} ( ${resl.readButtonText} )

${wait}`
                await conn.sendFile(m.chat, resl.ogImage, "", cap, m)
                await conn.sendFile(m.chat, resl.downloadLink, resl.ogTitle, '', m, false, { asDocument: true })
            } catch (e) {
                await m.reply(eror)
            }
        }
        if (feature == "اقتباس") {
            try {
                let array = await getQuotes(inputs)
                let resl = array[Math.floor(Math.random() * array.length)];
                let cap = `*اقتباس:* ${resl.content}

*الكاتبة:* *${resl.author.name}*
*الرابط:* ${resl.author.url}
`
                await conn.sendFile(m.chat, resl.author.photo, "", cap, m)
            } catch (e) {
                await m.reply(eror)
            }
        }
        if (feature == "بحث") {
            try {
                let data = await getCategory()
                let result = '';
  data.forEach((section, index) => {
    result += `*[ ${index + 1}. ${section.title} ]*\n`;
    section.subSections.forEach((subSection, index) => {
      result += `${index + 1}. ${subSection.link} (${subSection.title})\n`;
    });
    result += "\n\n________________________\n\n";
  });
                await m.reply(result)
            } catch (e) {
                await m.reply(eror)
            }
        }
        if (feature == "كتب") {
        if (!regpdf.test(inputs)) return m.reply("طريقة الادخال\n مثال:.كتابي كتب|الرابط")
            try {
                let res = await getBooks(inputs)
                let teks = res.map((item, index) => {
                    return `*[ النتيجة ${index + 1} ]*
*العنوان:* ${item.title}
*الرابط:* ${item.link}
`
                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                
            }
        }
        
        
    }
}
handler.help = ["foulabook"]
handler.tags = ["internet"]
handler.command = /^(كتابي)$/i
export default handler

/* New Line */
async function getPdf(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);
    const elements = $('.col-md-4 .col-md-12');

    const dataArray = elements.map((index, element) => {
      const ogImage = $('meta[property="og:image"]').attr('content');
      const ogTitle = $('meta[property="og:title"]').attr('content');
      const ogDescription = $('meta[property="og:description"]').attr('content');
      const downloadLink = $('a[href^="https://foulabook.com/book/downloading/"]', element).attr('href');
      const downloadButtonText = $('a[href^="https://foulabook.com/book/downloading/"]', element).text().trim();
      const readLink = $('a[href^="https://foulabook.com/ar/read/"]', element).attr('href');
      const readButtonText = $('a[href^="https://foulabook.com/ar/read/"]', element).text().trim();

      return {
        ogImage,
        ogTitle,
        ogDescription,
        downloadLink,
        downloadButtonText,
        readLink,
        readButtonText
      };
    }).get();

    return dataArray;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function getQuotes(page) {
  try {
  let url = 'https://foulabook.com/ar/quotes'; // Ganti URL_HALAMAN_WEB dengan URL halaman web yang berisi kode HTML yang diberikan

    if (page !== '') {
      url += `?page=${page}`; // Menambahkan query parameter "page" jika parameter page tidak kosong
    }
    const response = await fetch(url);
    const body = await response.text();
    const $ = cheerio.load(body);
    const results = [];

    $('div.pi-testimonial.pi-testimonial-author-with-photo').each((index, element) => {
      const testimonial = {};
      testimonial.content = $(element).find('div.pi-testimonial-content p').text().trim();
      testimonial.author = {
        name: $(element).find('span.pi-testimonial-author-name strong').text().trim(),
        url: $(element).find('span.pi-testimonial-author-name a').attr('href').trim(),
        photo: $(element).find('span.pi-testimonial-author-photo a img').attr('src')
      };

      results.push(testimonial);
    });

    return results;
  } catch (error) {
    console.error(error);
  }
}

async function getCategory() {
  try {
  const url = 'https://foulabook.com/ar/categories'; // Ganti URL_HALAMAN_WEB dengan URL halaman web yang berisi kode HTML yang diberikan
    const response = await fetch(url);
    const body = await response.text();
    const $ = cheerio.load(body);
    const results = [];

    $('.row').each((index, element) => {
      const section = {};
      const heading = $(element).find('.v-heading-v2 h3 a');
      section.title = heading.text().trim();
      section.link = heading.attr('href');

      const subSections = [];
      $(element).find('.col-md-3').each((subIndex, subElement) => {
        const link = $(subElement).find('.v-li-v1 a');
        const title = link.find('span').text().trim();
        const subSection = { title, link: link.attr('href') };

        subSections.push(subSection);
      });

      if (subSections.length > 0) {
        section.subSections = subSections;
        results.push(section);
      }
    });

    return results;
  } catch (error) {
    console.error(error);
  }
}

async function getBooks(url) {
  try {
    const response = await fetch(url);
    const body = await response.text();
    const $ = cheerio.load(body);
    const results = [];

    $('figure.animated-overlay').each((index, element) => {
      const book = {};

      const img = $(element).find('img');
      book.imageSrc = img.attr('src');

      const link = $(element).find('a');
      book.link = link.attr('href');

      const title = $(element).next('h5').find('a');
      book.title = title.text();

      results.push(book);
    });

    return results;
  } catch (error) {
    console.error(error);
  }
    }
