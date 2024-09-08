import React, { useState, useEffect } from 'react';
import images from "../js/images";
import '../styles/styles.css';

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageArray = Object.values(images);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [imageArray.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <button className="carousel-control prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
                {imageArray.map((src, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={src} alt={`Carousel item ${index}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};


export default Carousel;
