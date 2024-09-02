import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="welcome-text">Welcome to <span className="highlight">Course Finder</span></h1>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Explore Courses</h2>
          <p>Find courses that match your interests and goals.</p>
          <button className="feature-button"><Link to='/signup'>Browse Courses</Link></button>
        </div>
        <div className="feature">
          <h2>Personalized Recommendations</h2>
          <p>Get recommendations based on your preferences and past activities.</p>
          <button className="feature-button"><Link to='/signup'>Get Recommendations</Link></button>
        </div>
        <div className="feature">
          <h2>Track Your Progress</h2>
          <p>Monitor your learning journey and stay motivated.</p>
          <button className="feature-button"><Link to='/signup'>View Progress</Link></button>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>We are dedicated to helping you find the best courses and resources to achieve your learning goals.</p>
        <div className="about-details">
          <div className="about-item">
            <h3>Our Mission</h3>
            <p>Our mission is to make education accessible and tailored to your needs. We believe in personalized learning journeys to help you achieve your full potential.</p>
          </div>
          <div className="about-item">
            <h3>Why Choose Us?</h3>
            <p>We provide a comprehensive platform with top-quality courses, cutting-edge recommendations, and tools to track your learning progress.</p>
          </div>
          <div className="about-item">
            <h3>Meet the Team</h3>
            <p>Our team is composed of experienced educators and tech enthusiasts dedicated to bringing you the best learning experience.</p>
            <button className="about-button"><Link to="/team">Meet the Team</Link></button>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"Course Finder helped me discover the perfect course for my career growth!" - Rajendra</p>
        </div>
        <div className="testimonial">
          <p>"The personalized recommendations are spot on. I’m learning so much!" - Suresh</p>
        </div>
      </section>

      <footer className="footer">
        <span>&copy; 2024 Course Finder. All rights reserved.</span><br/>
        <a href="/contact">Contact Us</a>
      </footer>
    </div>
  );
};

export default Home;
