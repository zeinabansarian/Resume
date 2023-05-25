import React from 'react'
import './Sidebar.css'
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
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
                <BusinessCenterOutlinedIcon />
                <span>EXPERIENCE</span>
            </div>
      </Link>
      <Link to={'/Education'}>
      <div className='menuTitle'>
                <SchoolOutlinedIcon />
                <span>EDUCATION</span>
            </div>
      </Link>
            <Link to={'/Knowledge'}>
            <div className='menuTitle'>
                <CodeOutlinedIcon />
                <span>KNOWLEDGE</span>
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
