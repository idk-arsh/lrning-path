import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Our Course Finder</h1>
        <p>Discover and enroll in the best courses tailored just for you.</p>
        <a href="/profile" className="cta-button">Get Started</a>
      </section>
      <section className="features">
        <div className="feature">
          <h2>Explore Courses</h2>
          <p>Find courses that match your interests and goals.</p>
        </div>
        <div className="feature">
          <h2>Personalized Recommendations</h2>
          <p>Get recommendations based on your preferences and past activities.</p>
        </div>
        <div className="feature">
          <h2>Track Your Progress</h2>
          <p>Monitor your learning journey and stay motivated.</p>
        </div>
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>We are dedicated to helping you find the best courses and resources to achieve your learning goals.</p>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Course Finder. All rights reserved.</p>
        <a href="/contact">Contact Us</a>
      </footer>
    </div>
  );
};

export default Home;
