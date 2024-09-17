import { sticker } from "../src/libraries/sticker.js";
import axios from "axios";
const emj = /^[\p{Emoji}\u200d]+$/u;

const handler = async (m, { text }) => {
  if (!text) throw "*مثال: .ايموجي 🤣.*";
  //if (!emj.test(text)) throw "*🍟 Ingresa un emoji valido.*"
  try {
    const res = await axios.get(
      "https://deliriusapi-official.vercel.app/tools/mojito",
      {
        params: { emoji: text },
      },
    );
    const resultxd = res.data;
    const stiker = await sticker(
      Buffer.from(resultxd.result.split(",").map(Number)),
      null,
      global.packname,
      global.author,
    );
    conn.sendFile(m.chat, stiker, "sticker.webp", "", m, { asSticker: true });
  } catch (e) {
    m.reply("*🍟 يجب عليك ادخال رمز تعبيري مثل 😘.*");
  }
};
handler.help = ["moji"].map((v) => v + " emoji");
handler.tags = ["emoji"];
handler.command = /^(ايموجي|mojit)$/i;
//handler.rowner = true;
export default handler;
