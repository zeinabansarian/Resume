import React from 'react'
import './Sidebar.css'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';

import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Link to={'/'}>
            <div className='menuTitle'>
                <Person3OutlinedIcon />
                <span>ABOUT</span>
            </div>
      </Link>
      <Link to={'/Experience'}>
      
            <div className='menuTitle'>
                <EventNoteIcon />
                <span>EXPERIENCE</span>
            </div>
      </Link>
            <Link to={'/Skills'}>
            <div className='menuTitle'>
                <ImportantDevicesIcon />
                <span>Skills</span>
            </div>
            </Link>
            <Link to={'/Portfolio'}>
            
            <div className='lastMenuTitle'>
                <CasesOutlinedIcon />
                <span>PORTFOLIO</span>
            </div>
            </Link>
    </div>
  )
}
