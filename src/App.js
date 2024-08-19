import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Courses from './components/Courses/Courses';
import './App.css';

function App() {
  const [profileData, setProfileData] = useState({
    title: '',
    duration: 0,
    cost: false, 
  });
  const [courseraCourses, setCourseraCourses] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
    // Clear any authentication data or tokens here
  };

  return (
    <Router>
      <div className="App">
        <Navigation isAuthenticated={isAuthenticated} handleSignOut={handleSignOut} />
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/profile" 
            element={<Profile profileData={profileData} setProfileData={setProfileData} />} 
          />
          <Route 
            path="/search" 
            element={<Courses profileData={profileData} videos={videos} setVideos={setVideos} courseraCourses={courseraCourses} setCourseraCourses={setCourseraCourses} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

