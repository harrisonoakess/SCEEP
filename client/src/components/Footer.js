import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Silver Creek Equestrian Education</h3>
          <p>Building confident riders through horsemanship in Snowflake, Arizona.</p>
          <a
            href="https://www.facebook.com/profile.php?id=61563387476926"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Follow us on Facebook
          </a>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@silvercreekequestrian.com</p>
          <p>Phone: (928) 555-1234</p>
          <p>Address: 123 Equestrian Lane, Snowflake, AZ 85937</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Silver Creek Equestrian Education. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;