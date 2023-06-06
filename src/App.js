import React from 'react'
import Background from './Component/background/Background'
import Sidebar from './Component/Sidebar/Sidebar'
import './Fonts/BebasNeue-Regular.ttf'

import About from './Pages/About/About'
import Profile from './Component/Profile/Profile'
 
export default function App() {
  return (
    <div>
      <Background />

            <Sidebar />
         
            <Profile />
            <About />
    </div>
  )
}
