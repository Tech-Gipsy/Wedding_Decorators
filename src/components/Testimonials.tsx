// src/components/Testimonials.tsx
import React from 'react';
import '../styles/styles.css';

interface Testimonial {
    name: string;
    feedback: string;
}

const testimonials: Testimonial[] = [
    { name: 'John Doe', feedback: 'The best wedding planner I could have asked for!' },
    { name: 'Jane Smith', feedback: 'They made our day absolutely perfect.' },
    { name: 'Emily Johnson', feedback: 'Professional, friendly, and highly recommended!' },
];

const Testimonials: React.FC = () => {
    return (
        <div className="testimonials">
            <h2>Customer Testimonials</h2>
            {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial">
                    <p>"{testimonial.feedback}"</p>
                    <h4>- {testimonial.name}</h4>
                </div>
            ))}
        </div>
    );
}

export default Testimonials;
