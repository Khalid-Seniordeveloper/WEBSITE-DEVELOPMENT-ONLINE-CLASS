import React from 'react';

const ShowMore = ({ card, onBack }) => {
  return (
    <div className="flex justify-center items-center h-screen mt-11">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <img src={card.image} alt={card.title} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-center">{card.title}</h2>
        <p className="text-gray-600 text-center mb-4">{`Price: $${card.price}`}</p>
        <p className="text-gray-700 text-center mb-4">{card.description}</p>
        <div className="flex justify-center">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={onBack} // Call onBack when clicked
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowMore;