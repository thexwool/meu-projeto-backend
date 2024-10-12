const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const products = require('./products.json');

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/report', (req, res) => {
  res.json({ totalProducts: products.length });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
