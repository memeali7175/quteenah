import axios from 'axios';

let handler = m => m
handler.all = async function(m, { conn }) {
    if (m.text === 'مطورك شخص يدعى علي قطينة') return

        const textodem = m.text;
    
    if (!global.db.data.users[m.sender].chatyin){
        global.db.data.users[m.sender].chatyin = false
        }
    const chatbot = global.db.data.users[m.sender].chatyin
    
            if (textodem === 'تفعيل') {
                                global.db.data.users[m.sender].chatyin = true

                m.reply("مرحبا يا صديقي انت الان قمت بتفيل خاصية الرد الالي يمكنك التحدث معي كصديق او سؤالي عن أي شي 🌹❤️\nلإلغاء ميزة التحدث التلقائية كل ماعليك سوا ان ترسل كلمة\nتعطيل")
                return
                }
            
            if (textodem === 'تعطيل') {global.db.data.users[m.sender].chatyin = false
                m.reply("تم تعطيل التحدث التلقائي")
                return
                }
    
    if (!m.isGroup && !m.fromMe && chatbot) {
       
        
        try {
            
            const response = await axios.post('https://statistical-bethany-bomiro-491f656f.koyeb.app/api/chat', {
                messages: [{ role: 'user', content: textodem }]
            });
            const result = response.data.result;
            m.reply(result.trim());
            return;
        } catch (error) {
            console.error('Error:', error);
            m.reply('حدث خطأ أثناء معالجة الطلب.'+error);
        }
    }
    return true;
};

export default handler;
