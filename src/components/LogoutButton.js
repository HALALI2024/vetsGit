import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; // Importing a logout icon from react-icons
import './LogoutButton.css';

export default function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Handle any logout logic here (e.g., clearing authentication tokens)
        navigate('/'); // Navigate to the login page
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            <FiLogOut className="logout-icon" />
            Log out
        </button>
    );
}
