import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ closeModal, onLoginSuccess, onAdminLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // State to differentiate admin login
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        if (isAdmin) {
          // Redirect to admin dashboard
          onAdminLogin();
          navigate("/admin");
        } else {
          onLoginSuccess({ email }); // Pass user data to parent component
        }
        setLoginSuccess(true);
        setError("");
        closeModal();
      } else {
        setLoginSuccess(false);
        setError("Invalid email or password.");
      }
    } catch (err) {
      setLoginSuccess(false);
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative w-full mb-4">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          {loginSuccess && <h3 className="text-green-600">Login Successful</h3>}
          {error && <h3 className="text-red-600">{error}</h3>}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded w-full hover:bg-blue-800 transition duration-300"
          >
            Login
          </button>
          <div className="mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)}
                className="form-checkbox"
              />
              <span className="ml-2">Admin Login</span>
            </label>
          </div>
        </form>
        <button
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded w-full hover:bg-gray-600 transition duration-300"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
