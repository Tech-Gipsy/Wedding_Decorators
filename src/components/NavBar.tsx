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
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/assets/logo.png" alt="Company Logo" className="navbar-logo" />
            </div>
            <div className="navbar-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/aboutus" className="nav-link">About Us</Link>
                <Link to="#contact-us" className="nav-link">Contact</Link>
                <Link to="/policy" className="nav-link">Policy</Link>
                <div className="theme-toggle">
                    <input
                        type="checkbox"
                        id="theme-switch"
                        checked={darkMode}
                        onChange={toggleTheme}
                    />
                    <label htmlFor="theme-switch">
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
