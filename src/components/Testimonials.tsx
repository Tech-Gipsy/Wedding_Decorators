// src/components/Testimonials.tsx
import React from 'react';
import '../styles/styles.css';

const testimonials = [
    {
        id: 1,
        text: "This wedding planner made our day so special! Highly recommend.",
        author: "Jane Doe"
    },
    {
        id: 2,
        text: "Professional and attentive to every detail. It was perfect!",
        author: "John Smith"
    },
    {
        id: 3,
        text: "A wonderful experience from start to finish. Thank you!",
        author: "Emily Johnson"
    }
    // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-container">
                {testimonials.map(testimonial => (
                    <div className="testimonial-item" key={testimonial.id}>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <p className="testimonial-author">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
