import React from "react";
import logo from "../assets/logog20.png";

const Navbar = ({ openLoginModal, openSignupModal, user }) => {
  return (
    <nav className="w-full bg-white h-auto sm:h-20 flex flex-col sm:flex-row justify-between items-center sm:items-center py-4 px-5 sm:px-10 shadow-md">
      <div id="left" className="w-full sm:w-auto flex items-center">
        <a href="#hero" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-32 sm:h-16 sm:w-40 object-contain"
          />
          <div className="flex flex-col ml-3 sm:ml-4">
            <h1 className="text-[#263E67] text-xl sm:text-3xl font-bold">
              RailMadad
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">
              For complaints, Inquiry & Assistance
            </p>
          </div>
        </a>
      </div>
      <div
        id="right"
        className="w-full sm:w-auto flex flex-col sm:flex-row justify-center sm:justify-end items-center mt-4 sm:mt-0 space-y-3 sm:space-y-0 sm:space-x-4"
      >
        <select
          name="language"
          id="language"
          className="rounded-md px-3 py-1 sm:px-4 sm:py-2 border-[2px] sm:border-[3px] outline-blue-500 focus:shadow-2xl"
        >
          <option value="English">English</option>
          <option value="Hindi">हिन्दी</option>
          <option value="mr">मराठी</option>
          <option value="pa">ਪੰਜਾਬੀ</option>
          <option value="sa">संस्कृत</option>
        </select>
        {user ? (
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="text-gray-700 font-medium text-xs sm:text-base">
              {user.email}
            </span>
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNzLXdUUVYtTDFwaS1wLnBuZw.png"
              alt="Profile"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              className="bg-blue-500 px-4 py-2 text-xs sm:px-6 sm:py-2 sm:text-sm hover:bg-blue-800 rounded-md hover:text-white transition-colors"
              onClick={openLoginModal}
            >
              Log In
            </button>
            <button
              className="bg-blue-500 px-4 py-2 text-xs sm:px-6 sm:py-2 sm:text-sm hover:bg-blue-800 rounded-md hover:text-white transition-colors"
              onClick={openSignupModal}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
