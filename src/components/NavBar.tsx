// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const NavBar: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="navbar container">
            <div className="navbar-left">
                <img src="/assets/images/logo.png" alt="Company Logo" className="navbar-logo" />
                <span className="company-name">Wedding Planner Co.</span>
            </div>
            <div className="navbar-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/aboutus" className="nav-link">About Us</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/policy" className="nav-link">Policy</Link>
                <span className="theme-toggle" onClick={toggleTheme}>
                    {darkMode ? '🌙 Dark' : '☀️ Light'}
                </span>
            </div>
        </nav>
    );
}

export default NavBar;
