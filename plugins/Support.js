let handler = async (m, { conn, command, text }) => {
let love = `

*1_قنـاة دعـم البـ،ـوت 🖥️ لمعرفه تحديث الاوامر.↯↯*
*https://whatsapp.com/channel/0029VaJWgziC6ZvfdIpx5922*
 

`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الدعم|القناة)$/i
export default handler
