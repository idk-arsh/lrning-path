import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
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
    </div>
  );
};

export default About;
