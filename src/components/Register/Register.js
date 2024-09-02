import React, { useState } from 'react';
import {useNavigate,Link } from 'react-router-dom';
import './Register.css'

function Register({ setAuth,setProfileData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
      });

      if (response.ok) {
        const data= await response.json()
        setAuth(true);
        setProfileData(data);
        navigate('/profile');
      } else {
        const data = await response.json();
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        </div>
        <div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        </div>
        <div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        </div>
        <button type="submit">
          <span>Register Now</span>
        </button>
        <span>Already a User? <Link className='idk' to='/signup'>Login</Link></span>
      </form>
    </div>
  );
}

export default Register;
