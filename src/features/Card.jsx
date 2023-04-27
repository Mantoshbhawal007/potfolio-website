import React from 'react';

function Card({ title }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-900 text-gray-300 hover:bg-black hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center">
      <div className="px-6 py-4 text-center">
        <h2 className="font-bold text-2xl mb-2 text-yellow-400">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
