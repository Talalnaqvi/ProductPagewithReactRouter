import './Footer.css'
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bookmeeting">
        <div className="bookmeetingheading">
          <h1>Book a Meeting</h1>
        </div>
        <div className="icon"><i className="fa-solid fa-arrow-up-right-from-square fa-3x"></i></div>
      </div>
      <div className="column">
        <h2>Open Hours</h2>
        <p>Mon - Fri: 6.00 PM - 11.00 PM</p>
        <p>Sat - Sun: 12.00 PM - 10.00 PM</p>
      </div>
      <div className="column">
        <h2>Address</h2>
        <p>Skyline office, 789 Refined Street,<br />Cityville, State 34567</p>
        <p>info@skyline.com</p>
      </div>
      <div className="column">
        <h2>Follow us on</h2>
        <a href="#" className="social-link">LinkedIn</a>
        <a href="#" className="social-link">Facebook</a>
        <a href="#" className="social-link">Instagram</a>
        <a href="#" className="social-link">YouTube</a>
      </div>
    </footer>
  );
};

export default Footer;
