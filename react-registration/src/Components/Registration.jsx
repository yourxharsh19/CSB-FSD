import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Registration.css'

const Registration = ({ regData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const getdata = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    const data = {name, email, password};
    regData(data);
    console.log(data);
    alert(`Registration successful! Welcome ${name}`);
    navigate('/login');
  };
  
  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2>Registration Form</h2>
        <form onSubmit={getdata}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              onChange={(e)=>setName(e.target.value)} 
              type="text" 
              className="form-control" 
              id="name" 
              placeholder="Enter Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
              onChange={(e)=>setEmail(e.target.value)} 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter email"
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              onChange={(e)=>setPassword(e.target.value)} 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Password"
              value={password}
            />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Registration