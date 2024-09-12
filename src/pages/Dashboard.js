import React, { useState } from 'react';
import Header from '../components/Header';
import Schedule from '../components/Schedule';
import Calendar from '../components/Calendar';
import AppointmentCard from '../components/AppointmentCard';
import LogoutButton from '../components/LogoutButton';
import './Dashboard.css';

export default function Dashboard(){
    const [employeeName, setEmployeeName] = useState('WAJD');

    const scheduleData = [
        { time: '7:00 AM', sunday: 'Immunization appointment', tuesday: 'Register new births appointment', wednesday: 'OFF', thursday: 'Immunization appointment' },
        { time: '8:00 AM', monday: 'Immunization appointment' },
        { time: '9:00 AM', monday: 'Immunization appointment' , thursday:'OFF'},
        { time: '10:00 AM', tuesday: 'Immunization appointment' },
        { time: '11:00 AM', thursday: 'Immunization appointment' },
        { time: '12:00 PM', monday: 'Immunization appointment' },
        { time: '1:00 PM', wednesday: 'Immunization appointment', sunday: 'Register new births appointment' },
        // Add more schedule rows as needed
    ];

    return (
        <div className="dashboard">
            <Header name={employeeName} />
            <div className="dashboard-content">
                <Schedule schedule={scheduleData} />
                <div className="appointment-section">
                    <AppointmentCard appType="Immunization appointment" time="7:00 AM" name="Ali hamad Alkhidbi" phone="98812492" livestockNumber="60" livestockType="Sheep" />
                    <AppointmentCard appType="Register new births appointment" time="8:00 AM" name="Ali hamad Alkhidbi" phone="98812492" livestockNumber="72" livestockType="Camel" />
                    <AppointmentCard appType="Immunization appointment" time="10:00 AM" name="Ali hamad Alkhidbi" phone="98812492" livestockNumber="72" livestockType="Camel" />
                    <AppointmentCard appType="Immunization appointment" time="12:00 PM" name="Ali hamad Alkhidbi" phone="98812492" livestockNumber="72" livestockType="Camel" />
                    {/* Add more AppointmentCards as needed */}
                </div>
            </div>
            <Calendar />
            <LogoutButton />
        </div>
    );
};

