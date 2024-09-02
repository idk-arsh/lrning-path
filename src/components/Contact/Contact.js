import React from 'react';
import './Contact.css'; 

const Contact = () => {
    return (
        <div>
            <section className="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us. We're here to help you find the best courses and resources.</p>
                
                <div className="contact-details">
                    <div className="contact-item">
                        <h3>Our Office</h3>
                        <p>Terre Haute, IN</p>
                    </div>
                    <div className="contact-item">
                        <h3>Email Us</h3>
                        <p>ab9745774@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <h3>Call Us</h3>
                        <p>+1 (234) 567-890</p>
                    </div>
                </div>
                
                <div className="contact-form">
                    <h3>Send Us a Message</h3>
                    <form>
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" required />
                        
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" required />
                        
                        <label>Message</label>
                        <textarea placeholder="Your Message" required></textarea>
                        
                        <button type="submit" className="contact-button">Send Message</button>
                    </form>
                </div>

                <div className="map-placeholder">
                    <h3>Our Location</h3>
                    {/* You can embed a real map here */}
                    <div className="map-box">
                        <p>Map goes here</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
