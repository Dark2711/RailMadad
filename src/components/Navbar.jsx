import React from "react";
import logo from "../assets/logog20.png";
const Navbar = ({ openLoginModal, openSignupModal, user }) => {
  return (
    <nav className="w-full bg-white h-28 sm:h-20 flex flex-col sm:flex-row justify-between items-center sm:items-center">
      <div id="left" className="w-full sm:w-auto">
        <div id="logo" className="ml-5 sm:ml-10">
          <a href="#hero" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-32 sm:h-16 sm:w-40 p-2"
            />
            <div className="flex flex-col ml-4">
              <h1 className="text-[#263E67] text-3xl sm:text-4xl font-bold">
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
        <div>
          <label htmlFor="language"></label>
          <select
            name="language"
            id="language"
            className="rounded-md px-4 py-2 border-[3px] outline-blue-500 focus:shadow-2xl"
          >
            <option value="English">English</option>
            <option value="Hindi">हिन्दी</option>
            <option value="mr">मराठी</option>
            <option value="pa">ਪੰਜਾਬੀ</option>
            <option value="sa">संस्कृत</option>
          </select>
        </div>
        {user ? (
          <div className="flex items-center space-x-4 mx-5 sm:mx-10">
            <span className="text-gray-700 font-medium">{user.email}</span>
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" // Replace with your profile icon URL
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        ) : (
          <div id="login-signUp" className="flex space-x-4 mx-5 sm:mx-10">
            <button
              className="bg-blue-500 px-6 py-2 text-sm sm:px-8 sm:text-base hover:bg-blue-800 rounded-md hover:text-white transition-colors"
              onClick={openLoginModal}
            >
              Log In
            </button>
            <button
              className="bg-blue-500 px-6 py-2 text-sm sm:px-8 sm:text-base hover:bg-blue-800 rounded-md hover:text-white transition-colors"
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
