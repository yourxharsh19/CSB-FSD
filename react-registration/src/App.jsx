import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Registration from './Components/Registration'
import Dashboard from './Components/Dashboard'
import MainLayout from './Components/MainLayout'

function App() {
  const[data,setData]=useState(null);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}/>
          <Route path='/login' element={<Login logData={data}/>}/>
          <Route path='/register' element={<Registration regData={setData}/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
