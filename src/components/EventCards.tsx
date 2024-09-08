// src/components/EventCards.tsx
import React from 'react';
import '../styles/styles.css';

const EventCards: React.FC = () => {
    return (
        <div className="event-cards">
            <div className="card">
                <h3>Weddings</h3>
                <p>Beautifully planned and executed weddings.</p>
            </div>
            <div className="card">
                <h3>Corporate Events</h3>
                <p>Professional and memorable corporate events.</p>
            </div>
            {/* Add more cards as needed */}
        </div>
    );
}

export default EventCards;
