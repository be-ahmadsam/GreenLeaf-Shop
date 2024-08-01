import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../images/Leaf1.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        GreenLeaf Shop
        <img 
          src={logo} 
          alt="Leaf Logo" 
          className="logo-img" 
        />
      </div>

      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><Link to="/community">Community</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
