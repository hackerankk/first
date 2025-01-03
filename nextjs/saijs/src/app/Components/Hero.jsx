import React from 'react';
import Image from 'next/image'; // Make sure you're importing Image correctly

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-8 bg-gray-100">
      {/* Left Section */}
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-snug sm:leading-tight">
          Empowering Academic Success Together
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
          At Sai Associates, we provide exceptional thesis editing, project development, 
          and research assistance. Our experts are dedicated to guiding you towards 
          academic excellence.
        </p>
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center md:items-start gap-4 mt-6">
          <button className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-lg hover:bg-gray-800">
            <a href="tel:+918979645714">Jump on a call</a>
          </button>
          <button className="bg-white text-black border-2 border-black px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-lg hover:bg-gray-200">
            <a href="##">Register</a>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 mt-8 md:mt-0 lg:mt-0">
        <Image
          src="/saihero.jpeg" // Ensure the image is in the 'public' folder
          alt="Sai Associates Hero" 
          width={600} // Provide width
          height={400} // Provide height
          className="w-full sm:rounded-md md:rounded-lg lg:rounded-xl shadow-md sm:shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
