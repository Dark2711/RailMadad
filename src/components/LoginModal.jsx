import React from "react";

const LoginModal = ({ closeModal }) => (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <input
        type="email"
        placeholder="User Id (Mobile No./Email)"
        className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded w-full hover:bg-blue-800 transition duration-300">
        Login
      </button>
      <button
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded w-full hover:bg-gray-600 transition duration-300"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
  </div>
);

export default LoginModal;
