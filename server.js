const express = require("express");
const app = express();
const PORT = 3000;

// Baca file static (HTML kamu)
app.use(express.static(__dirname));

// Route test API
app.get("/api/test", (req, res) => {
  res.json({ message: "Server aktif 🚀" });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
