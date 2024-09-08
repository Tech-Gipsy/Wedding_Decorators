// src/components/ContactUs.tsx
import React from 'react';
import '../styles/styles.css';

const ContactUs: React.FC = () => {
    return (
        <div className="contact-us-container">
            <div className="contact-us">
                <div className="contact-map">
                    {/* Embed a map. You can use Google Maps or any other map provider */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.616690743334!2d-122.42511548468153!3d37.77397277975905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808bcd0e5b57%3A0x6f2e9d0f80e3a8e0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1618327896540!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="contact-details">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong> 123 Wedding St, San Francisco, CA 94103</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Email:</strong> info@weddingplanner.com</p>
                    <p><strong>Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
