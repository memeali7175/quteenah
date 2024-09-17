import fetch from 'node-fetch';
import { FormData, Blob } from 'formdata-node';
import { fileTypeFromBuffer } from 'file-type';

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime) {
        throw 'قم بالإشارة لصورة ما تريد ان تستخرج النص الذي فيها ثم اكتب \n*.طباعه*';
    }
    let media = await q.download();

    try {
        let data = await generateText(media)
        if (data) {
                await m.reply(data);
            }
    } catch (e) {
        await m.reply('حدثت مشكلة راسل صاحب البوت\ninstagram.com/ali_quteenah')
    }
}
handler.help = ["blackboximg"]
handler.tags = ["ai"];
handler.command = /^(طباعة|طباعه)$/i
handler.premium = false
export default handler

/* New Line */
async function generateText(imageBuffer) {
  try {
  const { ext, mime } = await fileTypeFromBuffer(imageBuffer) || {};
        if (!ext || !mime) {
            return null;
        }
        let form = new FormData();
        const blob = new Blob([imageBuffer.toArrayBuffer()], { type: mime });
        form.append('image', blob, 'image.' + ext);
        form.append('userId', '');

        const response = await fetch("https://www.blackbox.ai/api/upload", {
            method: 'POST',
            body: form,
        });

        const data = await response.json();
        return data.response
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
