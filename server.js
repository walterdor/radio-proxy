const express = require("express");
const request = require("request");

const app = express();
const PORT = process.env.PORT || 10000;

// Ruta para proxy de radio
app.get("/radio", (req, res) => {
  const streamUrl = "http://212.84.160.3:4914/stream";
  req.pipe(request(streamUrl)).pipe(res);
});

// Página simple para comprobar
app.get("/", (req, res) => {
  res.send("🎶 Radio proxy funcionando 🎶");
});

app.listen(PORT, () => {
  console.log(`Servidor proxy en puerto ${PORT}`);
});

