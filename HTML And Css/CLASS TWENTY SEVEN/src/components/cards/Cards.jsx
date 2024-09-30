import React from "react";

const Card = ({ title, description, link, onShowMore }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <figure>
        <img src={link} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={onShowMore} // Call onShowMore when clicked
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;