import React, { useState } from "react";
import axios from "axios";

const SignupModal = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility state
  const [isAdmin, setIsAdmin] = useState(false); // State to differentiate admin signup

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSignUp(false);
      setError("");

      const response = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
        isAdmin, // Send the isAdmin field to the backend
      });

      if (response.status === 201) {
        setSignUp(true);
        setError("");
      }
    } catch (err) {
      if (
        err.response &&
        err.response.status === 400 &&
        err.response.data.message === "Email is already registered"
      ) {
        setError("This email is already registered.");
      } else {
        setError("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative w-full mb-4">
            <input
              type={passwordVisible ? "text" : "password"} // Toggle between "text" and "password"
              placeholder="Password"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
            >
              {passwordVisible ? "Hide" : "Show"} {/* Toggle button text */}
            </button>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)} // Toggle admin state
                className="form-checkbox"
              />
              <span className="ml-2">Sign up as Admin</span>
            </label>
          </div>
          {signUp && (
            <h3 className="text-green-600">Registered Successfully</h3>
          )}
          {error && <h3 className="text-red-600">{error}</h3>}

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded w-full hover:bg-blue-800 transition duration-300"
          >
            Signup
          </button>
        </form>
        <button
          type="button"
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded w-full hover:bg-gray-600 transition duration-300"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
