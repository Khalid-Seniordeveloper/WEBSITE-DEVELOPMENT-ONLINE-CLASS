import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-purple-700">
          About Us
        </h1>
        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-gray-700">
          Discover the Essence of Elegance
        </h2>
        {/* Paragraph */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          At Elegant Attire, we believe that fashion is more than just clothing; it's a statement of individuality and confidence. Our mission is to offer a curated selection of high-quality branded clothing that resonates with your personal style and aspirations. From timeless classics to cutting-edge trends, each piece in our collection is chosen to elevate your wardrobe and enhance your everyday life. We are dedicated to providing a shopping experience that is both enjoyable and fulfilling, ensuring that every customer feels valued and inspired. Join us in celebrating fashion that empowers and expresses who you are.
        </p>
      </div>
    </div>
  );
};

export default About;