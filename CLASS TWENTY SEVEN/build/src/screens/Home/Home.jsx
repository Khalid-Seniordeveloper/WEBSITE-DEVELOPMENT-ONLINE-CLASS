import React from 'react';
import { Link } from 'react-router-dom';

// Import images from the assets folder


const Home = () => {


  return (
    <div className="min-h-screen flex">
      {/* Left Side with Company Name and Text */}
      <div className="w-full md:w-1/2 text-gray-800 flex flex-col justify-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Elegant Attire
        </h1>
        <p className="text-lg md:text-xl mb-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora reiciendis totam id itaque libero, commodi quod inventore et adipisci deleniti odit pariatur magni omnis praesentium illum debitis fugiat, saepe, rem nihil rerum nisi.
       
        </p>
        <Link to="/contact">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
            Shop Now
          </button>
        </Link>
      </div>

     
    </div>
  );
};

export default Home;