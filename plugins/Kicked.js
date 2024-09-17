let handler = async (m, { conn, participants, usedPrefix, command }) => {

let kickte = `*مــنشـن ع الشخص الي بتطرده !*`

if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
m.reply(`*✓┃🚫┃تم طردو عشانك ✦*`) 

}

handler.help = ['طرد @user']
handler.tags = ['group']
handler.command = ['انطر', 'طرد'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
