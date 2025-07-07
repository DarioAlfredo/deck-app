import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000';

function App() {
  const [deck, setDeck] = useState([]);

  const fetchDeck = async () => {
    const res = await fetch(`${API_URL}/deck`);
    const data = await res.json();
    setDeck(data);
  };

  const handleShuffle = async () => {
    const res = await fetch(`${API_URL}/shuffle`, { method: 'POST' });
    const data = await res.json();
    setDeck(data);
  };

  const handleSort = async () => {
    const res = await fetch(`${API_URL}/sort`, { method: 'POST' });
    const data = await res.json();
    setDeck(data);
  };

  useEffect(() => {
    fetchDeck();
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Card Deck by Dario Alfredo</h1>
      <div className="flex justify-center gap-4 mb-4">
        <button onClick={handleShuffle} className="px-4 py-2 bg-blue-500 text-white rounded">Shuffle</button>
        <button onClick={handleSort} className="px-4 py-2 bg-green-500 text-white rounded">Sort</button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {deck.map((card, i) => (
          <div key={i} className="border p-2 bg-white shadow rounded">{card}</div>
        ))}
      </div>
    </div>
  );
}

export default App;