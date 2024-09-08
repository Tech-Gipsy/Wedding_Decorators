// src/components/EventCards.tsx
import React from 'react';
import '../styles/styles.css';

const events = [
    {
        title: "Elegant Wedding",
        description: "A classic and elegant wedding with all the traditional touches.",
        imageUrl: "/assets/images/elegant-wedding.jpg",
    },
    {
        title: "Beach Wedding",
        description: "A beautiful wedding on the beach with a picturesque sunset.",
        imageUrl: "/assets/images/beach-wedding.jpg",
    },
    {
        title: "Vintage Wedding",
        description: "A charming vintage wedding with a retro feel.",
        imageUrl: "/assets/images/vintage-wedding.jpg",
    },
];

const EventCards: React.FC = () => {
    return (
        <div className="event-cards">
            {events.map((event, index) => (
                <div key={index} className="event-card">
                    <img src={event.imageUrl} alt={event.title} className="event-image" />
                    <div className="event-info">
                        <h3 className="event-title">{event.title}</h3>
                        <p className="event-description">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EventCards;
