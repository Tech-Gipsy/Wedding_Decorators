// src/pages/Contact.tsx
import React from 'react';
import '../styles/styles.css';

const Contact: React.FC = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>Phone: 09391097964</p>
            <p>Email: info@weddingplanner.com</p>
            <p>Address:
                34/2RT, opposite old airport, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016
            </p>
            <div className="map">
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22558.81131759983!2d78.4612904!3d17.4570317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91359d6038ff%3A0x5303d92126b90036!2sPriya%20Wedding%20Decorators!5e1!3m2!1sen!2sin!4v1725864057183!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;
