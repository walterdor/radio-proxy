const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("🚀 Proxy funcionando: prueba en /radio");
});

app.use(
  "/radio",
  createProxyMiddleware({
    target: "http://212.84.160.3:4914",  // IP y puerto de Listen2MyRadio
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      "^/radio": "/stream", // asegúrate que el mount sea exactamente 'stream'
    },
    logLevel: "debug", // 🔎 para ver qué pasa en los logs de Render
  })
);

app.listen(PORT, () => {
  console.log(`✅ Proxy escuchando en puerto ${PORT}`);
});

