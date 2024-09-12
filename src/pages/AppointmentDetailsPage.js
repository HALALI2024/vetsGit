import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Title from '../components/Title';
import DetailsComponent from '../components/DetailsComponent';
import Popup from '../components/Popup';
import LogoutButton from '../components/LogoutButton';
import './AppointmentDetailsPage.css';

export default function AppointmentPage() {
    /* const appointment = {
        title: 'Immunization appointment',
        name: 'Ali hamad Alkhidbi',
        phone: '98812492',
        livestockNumber: 50,
        livestockType: 'Sheep',
        time: '7:00 AM',
        livestock: [
            '9876543210', '4561237890', '7890123456', // Replace with actual data
            // ... more livestock IDs
        ],
    }; */

    const [employeeName, setEmployeeName] = useState('WAJD');
    const [appointment, setAppointment] = useState({
        title: '',
        name: '',
        phone: '',
        livestockNumber: 0,
        livestockType: '',
        time: '',
        livestock: []
    });

    // State to handle the visibility of the pop-up
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleCompleteVisitClick = () => {
        setShowPopup(true); // Show the pop-up when the "Complete Visit" button is clicked
    };

    const handleConfirm = () => {
        setShowPopup(false);
        // Handle the session end logic here (e.g., navigate away, update the backend, etc.)
        console.log("Session ended");
        navigate('/dashboard');
    };

    const handleCancel = () => {
        setShowPopup(false); // Hide the pop-up without further action
    };

    return (
        <div>
            <div className="appointment-page">
            <Header name={employeeName} />
            <Title day="Thursday 11" />
            <div className="content">
                <DetailsComponent appointment={appointment} />
            </div>
        </div>
        <button className="complete-visit-button" onClick={handleCompleteVisitClick}>
                Complete Visit
            </button>
            {showPopup && (
                <Popup 
                    message="Are you sure you want to end the session?" 
                    onConfirm={handleConfirm} 
                    onCancel={handleCancel} 
                />
            )}
            <LogoutButton />
        </div>
        
    );
}
