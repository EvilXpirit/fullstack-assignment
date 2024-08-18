import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-gray-200 border border-gray-300 shadow-md rounded-lg m-4 transition ease-in-out hover:scale-105">
      <h3 className="text-lg font-bold mb-2 px-4 mt-3">{title}</h3>
      <hr className='border-1 border-gray-300'></hr>
      <p className="text-gray-600 px-5 mt-1 mb-4">{description}</p>
    </div>
  );
};

export default Card;
