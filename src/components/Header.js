import React from 'react';
import './Header.css';

export default function Header({ name }){
    return(
        <header className="header">
        <img src="./logo.png" alt="Logo" className="header-logo" />
        <h1>Public Authority Of Agriculture Affairs And Fish Resources</h1>
        <div className="header-user-info">
            <span>Welcome, {name}</span>
        </div>
    </header>
    )
};
