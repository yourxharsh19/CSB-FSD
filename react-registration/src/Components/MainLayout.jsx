import React from 'react'
import { Link } from 'react-router-dom'
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div className="main-layout">
      <nav className="navbar">
        <div className="nav-brand">My App</div>
        <div className="nav-links">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </div>
      </nav>
      <div className="welcome-section">
        <h1>Welcome to Our Application</h1>
        <p>Please login or register to continue</p>
      </div>
    </div>
  )
}

export default MainLayout