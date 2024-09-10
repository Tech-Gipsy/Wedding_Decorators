// src/components/Footer.tsx
import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>&copy; 2024 Priya Wedding Decoraters. All rights reserved.</h3>

                <p className="made-by">Made by Bunroo</p>
            </div>
        </footer>
    );
};

export default Footer;
