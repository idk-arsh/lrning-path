import React,{useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './SignUp.css'


function SignUp({ setAuth, setProfileData }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
  
	const handleLogin = async (e) => {
	  e.preventDefault();
  
	  try {
		const response = await fetch('http://localhost:3001/api/SignUp', { 
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ email, password }),
		});
  
		if (response.ok) {
		  const data = await response.json();
		  setAuth(true);
		  setProfileData(data); // Update the entire profile data with the response from the server
		  navigate("/profile");
		} else {
		  const data = await response.json();
		  alert(data.error || 'Login failed');
		}
	  } catch (error) {
		console.error(error);
	  }
	};
  
	return (
	  <div>
		<h1>Login</h1>
		<form onSubmit={handleLogin}>
		  <div>
			<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
		  </div>
		  <div>
			<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
		  </div>
		  <button type="submit">
			<span>Log In Now</span>
		  </button>
		 <span>New User?<Link className='idk' to='/Register'> Register</Link></span>
		</form>
	  </div>
	);
  }
  
  export default SignUp;
  