import React from 'react';
import './DetailsComponent.css';

export default function DetailsComponent({ appointment }) {
    return (
        <div className="details-component">
            <div className="appointment-info">
                <h2 className='title'>{appointment.title}</h2>
                <ul className='list'>
                <li><strong>Name:</strong> {appointment.name}</li>
                <li><strong>Phone number:</strong> {appointment.phone}</li>
                <li><strong>Number of livestock:</strong> {appointment.livestockNumber}</li>
                <li><strong>Type of livestock:</strong> {appointment.livestockType}</li>
                <p className="time">{appointment.time}</p>
                </ul>
            </div>
            <div className="scanned-livestock">
                <h3>Scanned livestock:</h3>
                <ul>
                    {appointment.livestock.map((id, index) => (
                        <li key={index}>{id}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
