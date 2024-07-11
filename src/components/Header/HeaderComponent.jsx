import React from 'react';
import { Link,NavLink } from 'react-router-dom';
// link can be used in place of a cuz a will cause reloading again and again
import './HeaderComponents.css'; // Import your CSS file for styling

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src="/path/to/your/logo.png" alt="Shop Logo" className="logo" />
        </Link>
      </div>
      <div className="header-center">
        <h1 className="store-name">STN Store</h1>
      </div>
      <nav className="header-right">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          {/* <li><Link to="/footer">Footer</Link></li> */}
          <li><Link to="/users">User</Link></li>
          
          
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
