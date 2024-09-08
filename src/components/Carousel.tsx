// src/components/Carousel.tsx
import React from 'react';
import '../styles/styles.css';

const Carousel: React.FC = () => {
    return (
        <div className="carousel">
            <img src="/assets/images/carousel1.jpg" alt="Event 1" />
            <img src="/assets/images/carousel2.jpg" alt="Event 2" />
        </div>
    );
}

export default Carousel;
