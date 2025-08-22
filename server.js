const express = require("express");
const request = require("request");

const app = express();
const PORT = process.env.PORT || 3000;

// URL de tu stream Icecast
const STREAM_URL = "http://212.84.160.3:4914/stream";

app.get("/stream", (req, res) => {
  req.pipe(request(STREAM_URL)).pipe(res);
});

app.get("/", (req, res) => {
  res.send("🎶 Radio proxy funcionando 🎶");
});

app.listen(PORT, () => {
  console.log(`Servidor proxy escuchando en puerto ${PORT}`);
});
