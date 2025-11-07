import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import ImageManipulation from './component/ImageManipulation'

function App() {

  return (
    <div className='container'>
      <h3>
        {/* <Profile/> */}
      </h3>

      <ImageManipulation />
    </div>
  )
}

export default App
