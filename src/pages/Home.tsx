// src/pages/Home.tsx
import React from 'react';
import Carousel from '../components/Carousel';
import EventCards from '../components/EventCards';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import NavBar from '../components/NavBar';

import '../styles/styles.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <NavBar />

            <div className="video-background">
            <video autoPlay loop muted>
    <source src="/assets/videos/promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div className="overlay-text">
        <h1>Your Dream Wedding, Our Expertise</h1>
    <p>Making your special day unforgettable</p>
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

        <section className="contact-section container">
        <ContactUs />
        </section>
        </div>
);
}

export default Home;
