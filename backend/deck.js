const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const generateDeck = () =>
  suits.flatMap(suit => values.map(value => `${value} of ${suit}`));

const shuffleDeck = (deck) => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const sortDeckMethod1 = (deck) => deck.slice().sort();

const sortDeckMethod2 = (deck) => {
  const valueOrder = Object.fromEntries(values.map((v, i) => [v, i]));
  const suitOrder = Object.fromEntries(suits.map((s, i) => [s, i]));

  return [...deck].sort((a, b) => {
    const [valA, suitA] = a.split(' of ');
    const [valB, suitB] = b.split(' of ');
    if (suitOrder[suitA] !== suitOrder[suitB]) {
      return suitOrder[suitA] - suitOrder[suitB];
    }
    return valueOrder[valA] - valueOrder[valB];
  });
};

const sortDeckRandom = (deck = generateDeck()) => {
  return Math.random() > 0.5 ? sortDeckMethod1(deck) : sortDeckMethod2(deck);
};

module.exports = {
  shuffleDeck,
  sortDeckRandom,
};