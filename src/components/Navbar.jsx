import React from "react";

const Navbar = ({ openLoginModal, openSignupModal }) => {
  return (
    <nav className="w-full bg-white h-28 sm:h-20 flex flex-col sm:flex-row justify-between items-center sm:items-center">
      <div id="left" className="w-full sm:w-auto">
        <div id="logo" className="ml-5 sm:ml-10">
          <a href="#hero" className="flex items-center">
            <img
              src="https://railmadad.indianrailways.gov.in/madad/final/images/logog20.png"
              alt="logo"
              className="h-12 w-32 sm:h-16 sm:w-40"
            />
            <div className="flex flex-col ml-4">
              <h1 className="text-blue-800 text-3xl sm:text-4xl font-bold">
                RailMadad
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                For complaints, Inquiry & Assistance
              </p>
            </div>
          </a>
        </div>
      </div>
      <div
        id="right"
        className="mt-4 sm:mt-0 w-full sm:w-auto flex justify-center sm:justify-end"
      >
        <div id="login-signUp" className="flex space-x-4 mx-5 sm:mx-10">
          {/* Login Button */}
          <button
            className="bg-blue-300 px-6 py-2 text-sm sm:px-8 sm:text-base hover:bg-blue-800 rounded-md hover:text-white transition-colors"
            onClick={openLoginModal}
          >
            Log In
          </button>

          {/* Sign Up Button */}
          <button
            className="bg-blue-300 px-6 py-2 text-sm sm:px-8 sm:text-base hover:bg-blue-800 rounded-md hover:text-white transition-colors"
            onClick={openSignupModal}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
