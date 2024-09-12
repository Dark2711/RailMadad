import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const Hero = () => {
  const location = useLocation(); // Get location state
  const navigate = useNavigate(); // Hook to navigate without reloading
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    if (location.state && location.state.referenceId) {
      setReferenceId(location.state.referenceId); // Set reference ID from location state
      setIsModalOpen(true); // Open modal if reference ID exists
    }
  }, [location]);

  const handleCloseModal = () => {
    setIsModalOpen(false);

    // Remove referenceId from the state
    navigate("/", { state: null, replace: true }); // This removes the state without reloading
  };

  return (
    <div
      id="hero"
      className="h-screen font-poppins  flex flex-col justify-center items-center"
    >
      {isModalOpen && (
        <div className="modal bg-white w-[40%] h-[30%] p-4 text-center rounded-xl flex justify-center items-center">
          <div className="modal-content">
            <h2 className="text-xl font-bold text-blue-500">
              Complaint Submitted
            </h2>
            <p>
              Your complaint reference ID is:{" "}
              <span className="text-red-600">{referenceId}</span>
            </p>
            <button
              className="bg-blue-400 p-2 rounded-md text-white mt-4 hover:bg-blue-800"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div id="hero-content" className="text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-blue-600 leading-tight">
          Welcome to RailMadad
        </h1>
        <p className="text-lg sm:text-2xl text-white mt-2 sm:mt-4">
          For complaints, Inquiry & Assistance
        </p>
        <Link to="/form">
          <button className="bg-blue-500 text-white px-6 py-2 sm:px-8 sm:py-3 mt-4 hover:bg-blue-800 rounded-md">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
