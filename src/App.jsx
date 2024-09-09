import React, { useState } from "react";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import Footer from "./components/Footer";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLoginModal = () => setShowLogin(true);
  const closeLoginModal = () => setShowLogin(false);

  const openSignupModal = () => setShowSignup(true);
  const closeSignupModal = () => setShowSignup(false);
  return (
    <div className="bg-[url('./assets/bg-2.jpg')] bg-fixed bg-center ">
      <Navbar
        openLoginModal={openLoginModal}
        openSignupModal={openSignupModal}
      />
      {/* Login Modal */}
      {showLogin && <LoginModal closeModal={closeLoginModal} />}

      {/* Signup Modal */}
      {showSignup && <SignupModal closeModal={closeSignupModal} />}
      <Hero />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
