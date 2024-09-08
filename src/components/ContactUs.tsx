// src/components/ContactUs.tsx
import React from 'react';
import '../styles/styles.css';

const ContactUs: React.FC = () => {
    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@weddingplanner.com</p>
            <p>Address: 123 Wedding Lane, Happytown, USA</p>
            <div className="map">
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d144.953736315654!3d-37.81627917975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0a2b2b%3A0x5045675218ceed25!2z5LiJ5bO25Lqk5riF!5e0!3m2!1szh-CN!2sau!4v1635085228410!5m2!1szh-CN!2sau"
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

export default ContactUs;
