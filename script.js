function generateCaption(){

let produk = document.getElementById("produk").value;

let caption =
"🔥 Promo spesial untuk " + produk + "!\n\n" +
"Produk berkualitas dengan harga terbaik.\n" +
"Buruan pesan sekarang sebelum kehabisan!\n\n" +
"#promo #diskon #bisnis";

document.getElementById("hasil").innerText = caption;

}
