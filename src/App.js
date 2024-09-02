import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Profile from './components/Profile/Profile';
import Team from './components/Team/Team';
import Courses from './components/Courses/Courses';
import SignUp from './components/SignUp/SignUp';
import Contact from './components/Contact/Contact';
import Register from './components/Register/Register';
import './App.css';

function App() {
  const [profileData, setProfileData] = useState({
    name: '',
    title: '',
    duration: 0,
    cost: false, 
  });
  const [videos, setVideos] = useState([]);
  const [auth,setAuth]=useState(false);

  return (
    <Router>
      <div className="App">
        <Navigation auth={auth} setAuth={setAuth}/>
        <Routes>
          <Route path='/contact' element={<Contact/>}/>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route path='/about' element={<About/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/SignUp' element={<SignUp setAuth={setAuth} setProfileData={setProfileData} />}/>
          <Route path='/Register' element={<Register setAuth={setAuth} setProfileData={setProfileData}/>}/>
          <Route 
            path="/profile" 
            element={<Profile profileData={profileData} setProfileData={setProfileData} />} 
          />
          <Route 
            path="/search" 
            element={<Courses profileData={profileData} videos={videos} setVideos={setVideos} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

