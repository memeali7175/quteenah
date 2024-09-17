import  { readdirSync, rmSync } from 'fs'

let handler = async (m, { conn, text }) => {
 const dir = 'https://raw.githubusercontent.com/BrunoSobrino/ali-Bot-MD(10)/master/src/tmp'
 
 let pesan = "تم تنظيف المجلد tmp"
 await m.reply(pesan)
}
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.owner = true
handler.command = /^(كلير)$/i

export default handler
