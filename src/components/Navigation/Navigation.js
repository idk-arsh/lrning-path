import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from './Course Finder.png';

function Navigation() {
  return (
    <div>
      <nav>
        <img src={logo} alt='logo' width={150} height={150}></img>
        <div className="nav-title">Course Finder</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/search">Search Course</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
