import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AppointmentDetailsPage from './pages/AppointmentDetailsPage.js';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/appointment-details/:id" element={<AppointmentDetailsPage />} />
      </Routes>
    </Router>
  );
};