import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Dashboard</h1>
        <p>Welcome! You have successfully logged in.</p>
        <div className="dashboard-content">
          <div className="dashboard-item">
            <h3>Profile</h3>
            <p>View and edit your profile information</p>
          </div>
          <div className="dashboard-item">
            <h3>Settings</h3>
            <p>Manage your account settings</p>
          </div>
          <div className="dashboard-item">
            <h3>Notifications</h3>
            <p>Check your recent notifications</p>
          </div>
        </div>
        <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
      </div>
    </div>
  )
}

export default Dashboard