import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';
import logo from './Course Finder.png';

function Navigation({ auth, setAuth}) {
  const navigate = useNavigate();

  const handleSignout = (e) => {
    e.preventDefault();
    setAuth(false);
    navigate('/signup'); 
  };

  return (
    <div>
      <nav>
        <img src={logo} alt='logo' width={150} height={150} />
        <div className="nav-title">Course Finder</div>
        {!auth && (
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/SignUp">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>
          </ul>
        )}
        {auth && (
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/search">Search Course</Link></li>
          <li onClick={handleSignout} style={{ cursor: 'pointer' }}>Sign Out</li>
        </ul>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
