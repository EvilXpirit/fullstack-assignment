import React, { useEffect, useState } from 'react';
import Card from './Card';

const HelpCenter = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fullstack-assignment-25kc.onrender.com/cards')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-violet-200 pt-16 pb-20">
        <h1 className="text-5xl font-semibold text-center mb-8">How can we help?</h1>
        <div className="flex justify-center">
          <div className="relative w-3/5 sm:w-2/5">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 border border-gray-700 drop-shadow-lg rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 text-bold cursor-pointer">
            &#x2794;
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 mb-12 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredCards.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
