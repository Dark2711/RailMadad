import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import Footer from "./components/Footer";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null); // State for user

  const openLoginModal = () => setShowLogin(true);
  const closeLoginModal = () => setShowLogin(false);

  const openSignupModal = () => setShowSignup(true);
  const closeSignupModal = () => setShowSignup(false);

  const handleLoginSuccess = (userData) => {
    setUser(userData); // Set user data after successful login
    closeLoginModal();
  };

  const handleAdminLogin = () => {
    closeLoginModal();
  };

  return (
    <div className="bg-[url('./assets/bg-2.jpg')] bg-fixed bg-center ">
      <Navbar
        openLoginModal={openLoginModal}
        openSignupModal={openSignupModal}
        user={user}
      />
      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          closeModal={closeLoginModal}
          onLoginSuccess={handleLoginSuccess}
          onAdminLogin={handleAdminLogin} // Pass admin login handler
        />
      )}

      {/* Signup Modal */}
      {showSignup && <SignupModal closeModal={closeSignupModal} />}

      {/* The main content, like the Hero component */}
      <Hero />

      <Footer />
    </div>
  );
}

export default App;
