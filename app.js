const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola, tu app funciona en ZAVALA - versión 2.0.0');
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});