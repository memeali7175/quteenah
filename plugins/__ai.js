async function handler(m, { conn }) {
  try {
            //m.reply(wait)
       let response = await axios.post('https://statistical-bethany-bomiro-491f656f.koyeb.app/api/chat', {
            messages: [{ role: 'user', content: m.text }]
        });

        let result = response.data.result;
            if (!result) return m.reply(response.data.error)
            m.reply(result)
            } catch (e) {
                m.reply("Error!")
            }
}
handler.help = ['chatgpt']
handler.tags = ['AI']
handler.command = ['ai', 'بوت'] 

export default handler