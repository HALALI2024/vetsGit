import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS for styling

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here, then redirect to the dashboard
    navigate('/dashboard');
  };
  return (
    <div className="login-container">
      <div className="login-image">
        <img src="./building.jpg" alt="Building" />
        <div className="image-overlay"></div>
      </div>
      <div className="login-form">
        <img src="./logo.png" alt="Logo" className="login-logo" />
        <h2>Log In</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="●●●●●●●●" />
          </div>
          <button type="submit" className="login-button" onClick={handleLogin}>Log in</button>
        </form>
      </div>
    </div>
  );
}
