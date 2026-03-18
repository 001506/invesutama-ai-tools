function generateCaption(topic, platform, tone){

let captions = [

`🚀 ${topic} bisa menjadi peluang besar di ${platform}. Mulai sekarang dan kembangkan bisnis Anda.`,

`Jika Anda serius di dunia ${topic}, maka ${platform} adalah tempat terbaik untuk berkembang.`,

`${topic} bukan hanya tren, ini peluang nyata di ${platform}. Saatnya Anda mulai.`,

`Banyak orang sukses dari ${topic}. Anda bisa memulainya lewat ${platform} hari ini.`,

`Rahasia sukses di ${platform}? Konsisten membuat konten tentang ${topic}.`
];

if(tone === "Fun"){

captions.push(
`🔥 Siapa bilang ${topic} membosankan? Di ${platform} semuanya bisa jadi viral!`
)

}

if(tone === "Story"){

captions.push(
`Awalnya hanya mencoba ${topic}, sekarang berkembang besar lewat ${platform}.`
)

}

if(tone === "Professional"){

captions.push(
`${topic} merupakan peluang bisnis yang berkembang pesat di platform ${platform}.`
)

}

return captions;

}
