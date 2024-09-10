// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar" >
            <div className="navbar-left">
                <img src="/assets/logo.png" alt="Company Logo" className="navbar-logo" />
                <span className="company-name">Wedding Planner Co.</span>
            </div>
            <div className={`navbar-right ${isMenuOpen ? 'open' : ''}`}>
                <button className="menu-toggle" onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
                </button>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/aboutus" className="nav-link">About Us</Link>
                    <Link to="#contact-us" className="nav-link">Contact</Link>
                    <Link to="/policy" className="nav-link">Policy</Link>
                </div>
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
};

export default Navbar;
