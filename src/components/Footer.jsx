import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We are committed to providing the best railway service. RailMadad is
            your one-stop solution for complaints, inquiries, and assistance.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@railmadad.com</li>
            <li>Phone: +91-1234567890</li>
            <li>Address: Railway Street, New Delhi, India</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-sm">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Additional Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-blue-400">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Info */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} RailMadad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
