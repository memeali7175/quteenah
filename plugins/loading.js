import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper-sosmed'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw ` مثال :\n*.شغل* فلسطين بلادي`
  let res = await yts(text)
  let vid = res.videos[0]
  await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })  
  if (!vid) throw 'لم يتم العثور عليه، حاول عكس العنوان والمؤلف'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
let vap = `*〔 يــوتيـــــوب بـــــــلاي 〕*

*عنوان المقطع:* ${title}
*رابط المقطع:* ${url}
*وصف المقطع:* ${description}
*تاريخ نشره:* ${publishedTime}
*مدته:* ${durationH}
*عدد المشاهدات:* ${viewH}`

conn.sendMessage(m.chat, {
text: vap,
contextInfo: {
externalAdReply: {
title: vap,
thumbnailUrl: thumbnail,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  const yt = await youtubedl(url).catch(async () => await youtubedlv2(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: "© 𝔞𝔩𝔦 𝔮𝔲𝔱𝔢𝔢𝔫𝔞𝔥",
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }
  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^تحميل$/i

handler.exp = 0
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
