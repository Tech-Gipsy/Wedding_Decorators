// src/pages/Home.tsx
import React, {useEffect, useRef} from 'react';
import Carousel from '../components/Carousel';
import EventCards from '../components/EventCards';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import NavBar from '../components/NavBar';

import '../styles/styles.css';
import {scaleVideo} from "../js/videoScaler";
import Footer from "../components/footer";

const Home: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const scaleVideo = () => {
        if (videoRef.current) {
            const container = videoRef.current.parentElement;
            if (container) {
                const containerWidth = container.clientWidth;
                const containerHeight = container.clientHeight;

                // Adjust the video dimensions to match the container size
                videoRef.current.style.width = `${containerWidth}px`;
                videoRef.current.style.height = `${containerHeight}px`;
            }
        }
    };

    useEffect(() => {
        scaleVideo(); // Scale the video on component mount
        window.addEventListener('resize', scaleVideo); // Scale the video on window resize

        return () => {
            window.removeEventListener('resize', scaleVideo); // Cleanup event listener
        };
    }, []);

    return (
        <div className="home">
            <NavBar />
            <div className="video-background">
                <video ref={videoRef} autoPlay loop muted playsInline>
                    <source src="/assets/videos/promo.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="overlay-text">

                </div>
            </div>

    <section className="carousel-section container">
        <Carousel />
        </section>

        <section className="events-section container">
        <EventCards />
        </section>

        <section className="testimonials-section container">
        <Testimonials />
        </section>

        <section id="contact_us" className="contact-section container">
        <ContactUs />
        </section>
            <Footer />
        </div>

);
}

export default Home;
