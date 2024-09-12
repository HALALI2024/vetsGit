import React from 'react';
import './Popup.css';

export default function Popup({ message, onConfirm, onCancel }) {
    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <p>{message}</p>
                <div className="popup-buttons">
                    <button className="confirm-button" onClick={onConfirm}>Yes</button>
                    <button className="cancel-button" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
