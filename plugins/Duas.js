let handler  = async (m, { conn }) => {
conn.reply(m.chat,`🍃🌹 *مسجـــات أدعيـــة* 🍃🌹\n          *ꔹ━━━ꔹ❰ 🍃_🌸 ❱ꔹ━━━ꔹ*\n*『${pickRandom(global.mskdjd)}』*\n       *ꔹ━━━ꔹ❰ 🍃_🌸 ❱ꔹ━━━ꔹ*`, m)
}
handler.help = ['bzmzjdks']
handler.tags = ['fun']
handler.command = /ادعية|ادعيه/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.mskdjd = [ 
 " ‏لك الحمد يارب حمدًا يوافي نعمك.",
" ‏اللهُّم صبرًا ، اللهُّم جبرًا ، اللهُّم قوة .!",
"‏رَبِّ ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ 💖",
"‏اللهُّم هذا القلب تداركه بلُطفك 💕",
"‏يارب امورٌ مُيسّره وقلبٌ مُطمئن.🤎.",
"‏ اللَّهُم قربنا إليكَ حتىٰ نصبَح كقُرب المَلائكة 💗.!",
"‏اللهُم وكلتُ إليك كل أيامي، اللهُم تولّني.✨ ",
"‏اللَّهُم إنَّا تَوكلنا عليك وفوضنَا أمرنا إليك ✨ ",
"ربي رجوتك فرحة تسر بها خاطري🍃.. ",
"‏ - ‏اللهم أرحم أرواحًا غادرتنا إليك .❤️🌹",
"يَارب أرِني وجهتي دُلّني ولا تُضلّني 🌺",
"اللهـم أصلحني ،وأصلح بي  🙏🏻🩵",
"‏اشرح صدري يالله  فإنك تعلم وهُم لا يعلمون ❤️",
" يارب اشرح صدري بعمق هذه الايه",
"سَخّر لِرُوحي ما يُبقيها في اخضرارٍِ دائمِِ وسعه 😿.",
"مُحَمَّد قَلبي عَليك صَلَّى، -ﷺ-. 💞 ",
"- وَإني يَا رب وليتـك ڪل مَا في قلبـي 💙.",
"‏ربي إني أسعى فارزقني لذة الوصُول 💞",
"‏لك الحمد يارب حمدًا يوافي نعمك ..... 💚 ",
"‏ ‏اللّهم حقق كُل أمنية ترفرف في صدرِ صاحبها🧡 .!",
"‏من ترك أمرهُ لله، أعطاه الله فوق ما يتمنَّاه💙 ",
"‏ اللهم_غزّة ، هيّ بحفظك فإحفظها يا الله💜. »💛",
"‏‏أن تمطر على جفاف قلوبنا بالمسرّات، آمين 💙 ",
"‏ يا الله إنَّ اليسر والسعادة جُندٌ مِن جنودك فسخرها لنا وأيدنا بها. ",
"‏ ‏رَبِّ ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ. 💝",
"‏ اِجْعلْنَا لِقضائك وقدْرك صَابرِين يَاحِي ياقْيوم.💖.!",
"‏اللهّم لاَ ترُدّ لنَا دُعـــاءٰ..وَلا تُخيّب لنَا رَجاء  ♡. ! ❤️",
"‏ ‏ياربّ من خيرٍ إلى خير ، ومن جميلٍ إلى أجمل🤍.💜 ",
"‏ اللهمَّ إني أحسنتُ بكَ الظَّن فاجبُرني 🪐.",
"‏ اللهُم نورك إن بات كل شيء مُظلماً 🪐. ",
"‏ ‏وأجعلنيّ خيراً لِنفّسي ولِمن حوليّ يا الله.💖 ",
"‏ ‏‏وأجعلنيّ خيراً لِنفّسي ولِمن حوليّ يا الله🖇️ ",
"‏ ‏يارب دبر لنا من الجبر والعوض ما ينسينا ويرضينا 🤍💕",
" ‏‏يَـارب السّعه والسعاده أينما أتجهنا 🤍..💖",
"الجمال يلفت الأنظار لكن الطيبه تلفت القلوب 😁",
"كما تدين تدان 😊",
"عامل الناس بأخلاقك ولا بأخلاقهم 🙂",
"‏ اللهُم لا يمسّ قلوبنا ضرّ وأنت ربها. 💕",
" اللهم كما اتيت موسى سؤله آتني سؤلي إنك على كل شيء قدير.",
" الحمدلله على كل نعمة أحاطت بيّ",
"اللهُم جازنا بحلوُ الحياة، وطيب المقام 💞 ",
" اللهم توفيقا يرافقني في الدرب خطوة خطوة.💞 ",
" ‏يارب الأيام القادمة تحتويني أفَراح متتالية♥️✨ ",
"‏اللهَّم عافية تصاحب عائلتي كظلهم 🤍🏃‍♂️",
" ‏فَرَحًا يُصيبُ دِيارَنا، يَا ربّ.❤️",
"واجعلني يا وَدُود ريّاً، أسقي ولا أحتاج سُقيا. .! ",
"وَجعّلي مِن جبر الخَواطِر ، نصيب . .! ",
" أعِنّي عَليَّ، فَإنِّي عَدوِّي. ❤️.",
"الله يوفق ويرزق كل إنسان محتاج 🫂. 💗",                    
"‏من ترك أمرهُ لله، أعطاه الله فوق ما يتمنَّاه💙 ", 
"‏‏يارب الأيام القادمة تحتويني أفَراح متتالية♥️✨ ! ",
"‏ اِجْعلْنَا لِقضائك وقدْرك صَابرِين يَاحِي ياقْيوم.🫀🤍",
"‏ ‏اللهمَّ اِسْتَجِبْ لنا ما نَعجَزُ عن قَوْلِهِ وأنتَ عَالِمٌ بِهِ .♥️",
"‏ ‏‏اللهم خفّة الأيام ورضا القلب❤️.",
"‏ ‏اللهم لا تدع لي أمراً إلا يسرته ، ولا حلماً إلا حققته  💜",
"‏ اللهم أعنا على ترك مالا يرضيك.♥️",
"‏ اللهَم عوضاً يمحي مُر ما رأيت. .🍍",
"‏‏اللهم الأبديه مع الأشخاص اللي لٌطفهم مايغيّره الوقت ✨",
"‏ اللهُم‌حُسن‌الخِتام‌إن‌دنى‌وقت‌ُالرحِيل.💐 .",
"‏ ‏⊹ اللهــم إجعل لنا من جبر الخواطر نصيــب ⊹ .",
"‏ ‏يَا ربّ نَسّألكَ اليُسْر فِي كُل أمرّ.💕",
"يا رَبّ المُتَعثِرين ، نَسألُكَ الخُطوة الآمِنة.✨",
"‏ وَفاضَت القلوب بِما فيها فاللهم جبرًا.❤️ ",
"‏ ‏اللَّهُمَّ الرّضا الذي يجعلُ قلوبِنا هادئة. 💙",
"‏ ‏- يارب نذُوق لذّة تِمنيت و نلّت🖤..",
"‏ - اللهم الرضا الذي يجعل أرواحنا مُطمئنة💙.",
"‏ اللَّهُمَّ الرّضا الذي يجعلُ قلوبِنا هادئة..",
"‏ ‏- الله يُقر كل عين بمًا تمنت🖤..",
"‏ ‏اللهُم قلبًا لا يخاف في الله لومة لائم.❣️.",
"‏ جَبَرَ الله قلوبِكُم ، وقَلبِي .🍫",
"‏ ‏يَارب السّعه والسعاده أينما أتجهنا 🤍..💖",
"‏ ‏فردوساً عالياً ياخالقي إسكن به والدي 🤍. 🖤",
"‏ ‏اللهم وفقني على ما أنا مقبلٌ عليه 🤍..",
"‏ ‏- لا تدري لعل الله يُحدث بعد ذلك أمرا 🤍. ؟",
"‏ لا تعودني على دفء شمسك، إذا كان في نيتك الغروب .َ",
"‏ وانتهت صداقة الخمس سنوات بموقف.",
"‏ ‏لا تحب أحداً لِدرجة أن تتقبّل أذاه.",
"‏ إنعدام الرّغبة أمام الشّيء الّذي أدمنته ، انتصار.",
"‏مش جايز , ده اكيد التأخير وارهاق القلب ده وراه عوضاً عظيماً !💙 ",
" مش جايز , ده اكيد التأخير وارهاق القلب ده وراه عوضاً عظيماً !💙",
"فـ بالله صبر  وبالله يسر وبالله عون وبالله كل شيئ ♥️. ",
"‏﴿وَقُلِ الْحَمْدُ لِلَّهِ﴾🌹💖 ",
"ولا تبتليني في مطلبي يارب »💝 ",
"‏اللهُم قوني بك حين يقِل صبري... ",
"‏‏القرآن هو المسرّات التي تُرمّم أرواحنا المُتهالكة♥️. 💙",
"‏وإن عظم المطلوب فالله أعظم .🌺 ! ",
"•‏إلهِي، ✨دُلَّ قلبِي التائِه إلى نُورِكَ فإنِّي مُبتلىٰ•✨ .. ",
"{وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ}💕.. ",
" ‏«كُل دُعاءٍ مُجابٍ كانَ اليقين سابقهُ»❣️.",
"‏‏ويُؤنسني أنّكَ عليمٌ بمّا يَخفى♥️.. ",
" ‏- ‏﴿ إِنَّا ‌ هَدَيْنَاهُ⁩‌ السَّبِيلَ⁩إِمَّا شَاكِرًا وَإِمَّا كَفُورًا ﴾🍃🌺!",
"﴿لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ﴾❣️ ", 
"{وَاصْبِرْ لِحُكْمِ رَبِّكَ فَإِنَّكَ بِأَعْيُنِنَا} ❤️. ",
"تُب فِي شَبابك،قَد لَا يَكونُ لكَ مشِيب . ❤. ",
"‏إن الصدقة لتطفئ غضب الرب وتدفع ميتة السوء.❤️ ",
"- ‏{وَلَنْ يَجْعَلَ اللَّهُ لِلْكَافِرِينَ عَلَى الْمُؤْمِنِينَ سَبِيلًا} ! ",
"‏{رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي}",
"والْعَصْر إِنَّ الْإِنْسَان لَفِي خُسْر إِلَّا الَّذِينَ آمَنُوا وعَمِلُوا الصَّالِحَات وتَوَاصَوْا بِالْحَقِّ وتَوَاصَوْا بِالصَّبْرِ✨🌹 ",
"إقْرَأْ كِتَابك كَفَى بِنَفْسِك الْيَوْم عَلَيْك حَسِيبًا .🤍🌱. ",
" ﴿‏وَأَنذِرْ بِهِ الَّذِينَ يَخَافُونَ أَن يُحْشَرُواْ إِلَى رَبِّهِمْ لَيْسَ لَهُم مِّن دُونِهِ وَلِيٌّ وَلاَ شَفِيعٌ لَّعَلَّهُمْ يَتَّقُونَ﴾ 💙",
"‏﴿وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ﴾ 🌷.. ",
"- ‏{وَمَنْ يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَحِيمًا } 💗. . ",
"‏‏{ وَاصبِر عَلى ما أَصابَكَ إِنَّ ذلِكَ مِن عَزمِ الأُمورِ }🍃 .. ",
"{وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ}. 💙 ",
"الحمد لله على أيامٍ مليئة بلُطف الله، وحنَانه.. 💛 ", 
   
 ] 