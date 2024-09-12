import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="h-screen font-poppins  flex flex-col justify-center items-center"
    >
      <div id="hero-content" className="text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-blue-600 leading-tight">
          Welcome to RailMadad
        </h1>
        <p className="text-lg sm:text-2xl text-white mt-2 sm:mt-4">
          For complaints, Inquiry & Assistance
        </p>
        <a href="#form">
          <button className="bg-blue-500 text-white px-6 py-2 sm:px-8 sm:py-3 mt-4 hover:bg-blue-800 rounded-md">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
