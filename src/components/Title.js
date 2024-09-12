import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TitleComponent.css';

export default function TitleComponent({ title, day }) {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/dashboard'); // Replace with the correct route to the main page
    };

    return (
        <div>
            <button onClick={goBack} className="back-button">←</button>
            <div className="title-component">
            <h2 className='titleStyle'>Today's schedule</h2>
            <h3 className='h3Style'>{day}</h3>
            </div>
        </div> 
        
    );
}
