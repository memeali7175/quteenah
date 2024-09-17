import fg from 'api-dylux'

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {

  if (!text) throw `💝هـذا الامر يمكنك من تحميل صـوره حسب طلبك\n\n🇱🇰 مثال: *${usedPrefix + command}* 💝 .صوره اسم علي💝`

  let res = await fg.googleImage(text)

  conn.sendFile(m.chat, res.getRandom(), 'img.png', `

*╮ ──═┅─┅─┅═── ╭*
 •🇾🇪_ *الجنہـــــرال_بـوت*
*╯ ──═┅─┅─┅═── ╰*
*│❯طلبـــك* : *${text}*`.trim(), m)

}

handler.help = ['imagen']

handler.tags = ['img']

handler.command = /^(صورة|image|صوره|خلفيه)$/i

handler.diamond = false

export default handler



