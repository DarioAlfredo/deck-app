const express = require('express');
const cors = require('cors');
const { shuffleDeck, sortDeckRandom } = require('./deck');

const app = express();
const PORT = 5000;

app.use(cors());

let deck = sortDeckRandom();

app.get('/deck', (req, res) => {
  res.json(deck);
});

app.post('/shuffle', (req, res) => {
  deck = shuffleDeck(deck);
  res.json(deck);
});

app.post('/sort', (req, res) => {
  deck = sortDeckRandom(deck);
  res.json(deck);
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));