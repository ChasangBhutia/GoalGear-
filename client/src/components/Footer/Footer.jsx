import React from 'react';
import "./Footer.css"
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {

  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="footerContainer container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Your go-to destination for the latest football kits, gear, and accessories. We bring you the best quality at affordable prices.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/shop" className="text-white">Shop</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/faq" className="text-white">FAQ</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-white me-3"><Facebook fontSize="large" /></a>
              <a href="https://twitter.com" className="text-white me-3"><Twitter fontSize="large" /></a>
              <a href="https://instagram.com" className="text-white me-3"><Instagram fontSize="large" /></a>
              <a href="https://linkedin.com" className="text-white"><LinkedIn fontSize="large" /></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">© 2025 GoalGear. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
