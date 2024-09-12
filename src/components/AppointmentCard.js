import React from 'react';
import { Link } from 'react-router-dom';
import './AppointmentCard.css';

export default function AppointmentCard({ appType, time, name, phone, livestockNumber, livestockType }) {
    
    return (
        <div className="appointment-card">
            <img src="./map.jpg" alt="Map" />
            <div className="appointment-details">
                <p>
                    <strong>
                        <Link to={`/appointment-details/${appType}`} className="app-type-link">
                            {appType}
                        </Link>
                    </strong>
                </p>
                <ul>
                    <li>Name: {name}</li>
                    <li>Phone number: {phone}</li>
                    <li>Number of livestock: {livestockNumber}</li>
                    <li>Type of livestock: {livestockType}</li>
                    <p className='time2'>{time}</p>
                </ul>
            </div>
        </div>
    );
};
