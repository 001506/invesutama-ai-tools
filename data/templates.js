export const templates = {
  Penjualan: {
    hook: [
      "Capek jualan tapi gak laku?",
      "Penjualan seret akhir-akhir ini?",
      "Masih sepi pembeli?"
    ],
    body: [
      "Dengan {product}, Anda bisa {benefit} khusus untuk {target}.",
      "{product} hadir untuk membantu Anda {benefit} untuk {target}.",
    ],
    cta: [
      "Pesan sekarang sebelum kehabisan!",
      "Yuk mulai sekarang juga!",
      "Klik sekarang dan rasakan hasilnya!"
    ]
  },

  Branding: {
    hook: [
      "Bangun brand yang dipercaya sejak hari ini.",
      "Brand kuat bukan kebetulan.",
    ],
    body: [
      "{product} membantu Anda tampil lebih profesional di mata {target}.",
    ],
    cta: [
      "Kenali lebih lanjut sekarang!",
      "Mulai bangun brand Anda hari ini!"
    ]
  },

  Edukasi: {
    hook: [
      "Tahukah Anda?",
      "Banyak yang belum tahu ini...",
    ],
    body: [
      "{product} bisa membantu Anda memahami {benefit} untuk {target}.",
    ],
    cta: [
      "Pelajari selengkapnya di sini!",
      "Yuk mulai belajar sekarang!"
    ]
  }

};

  export const modes = {
  instagram: {
    hook: [
      "Pernah ngalamin ini?",
      "Gak nyangka banget...",
      "Ini yang lagi viral sekarang!"
    ],
    body: [
      "{product} bisa bantu kamu {benefit} buat {target}.",
    ],
    cta: [
      "Tag teman kamu!",
      "Comment pendapat kamu!",
      "Save biar gak lupa!"
    ]
  },

  ads: {
    hook: [
      "⚠️ PROMO TERBATAS!",
      "Diskon spesial hari ini!",
      "Kesempatan emas untuk Anda!"
    ],
    body: [
      "{product} membantu Anda {benefit} khusus untuk {target}.",
    ],
    cta: [
      "Beli sekarang!",
      "Klik sekarang juga!",
      "Dapatkan sebelum kehabisan!"
    ]
  },

  video: {
    hook: [
      "Stop scroll!",
      "Tunggu dulu!",
      "Jangan skip video ini!"
    ],
    body: [
      "Bayangkan Anda bisa {benefit} dengan {product} untuk {target}.",
    ],
    cta: [
      "Follow untuk tips lainnya!",
      "Coba sekarang juga!",
      "Link di bio!"
    ]
  }

};

export const hooks = [
  "Capek jualan tapi gak laku?",
  "Rahasia yang jarang diketahui pebisnis...",
  "Bayangkan jika Anda bisa..."
];

export const benefits = [
  "meningkatkan penjualan",
  "menarik lebih banyak pelanggan",
  "membangun kepercayaan pelanggan",
  "membuat bisnis Anda berkembang"
];

export const ctas = [
  "Yuk mulai sekarang!",
  "Jangan sampai ketinggalan!",
  "Coba sekarang juga!"
];

export const tones = {
  Santai: {
    prefix: "🔥",
    suffix: "Yuk gas sekarang!"
  },
  Profesional: {
    prefix: "",
    suffix: "Hubungi kami untuk informasi lebih lanjut."
  },
  "Hard Selling": {
    prefix: "⚠️ PROMO!",
    suffix: "Beli sekarang sebelum terlambat!"
  },
  Storytelling: {
    prefix: "Dulu banyak yang mengalami ini...",
    suffix: "Sekarang giliran Anda."
  }
};
