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
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22558.81131759983!2d78.4612904!3d17.4570317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91359d6038ff%3A0x5303d92126b90036!2sPriya%20Wedding%20Decorators!5e1!3m2!1sen!2sin!4v1725864057183!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="contact-details">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>
                        34/2RT, opposite old airport, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016
                    </p>
                    <p><strong>Phone:</strong> +91 9391097964</p>
                    <p><strong>Email:</strong> info@weddingplanner.com</p>
                    <p><strong>Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
