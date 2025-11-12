import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = ({ logData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const verification = (e) => {
    e.preventDefault();
    if (!logData) {
      alert("No registration data found. Please register first.");
      return;
    }
    console.log(logData.email, logData.password);
    if (logData.email === email && logData.password === password) {
      alert("Login Successful");
      navigate('/dashboard');
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login Form</h2>
        <form onSubmit={verification}>
          <div className="form-group">
            <label htmlFor="loginEmail">Email address</label>
            <input 
              onChange={(e)=>setEmail(e.target.value)} 
              type="email" 
              className="form-control" 
              id="loginEmail" 
              placeholder="Enter email"
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input 
              onChange={(e)=>setPassword(e.target.value)} 
              type="password" 
              className="form-control" 
              id="loginPassword" 
              placeholder="Password"
              value={password}
            />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe"/>
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login