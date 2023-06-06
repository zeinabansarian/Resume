import React from 'react'
import Background from './Component/background/Background'
import Sidebar from './Component/Sidebar/Sidebar'
import './Fonts/BebasNeue-Regular.ttf'
import routes from './routes'
import About from './Pages/About/About'
import Profile from './Component/Profile/Profile'
import { useRoutes } from 'react-router-dom'
 
export default function App() {
  let router = useRoutes(routes)
  return (
    <div>
      
      <Background />

            <Sidebar />
         
            <Profile />
            <About />

       {router}     
    </div>
  )
}
