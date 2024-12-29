// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: 'Product 1', price: 500, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 1000, image: 'https://via.placeholder.com/150' },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
