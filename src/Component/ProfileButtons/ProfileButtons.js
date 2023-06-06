import React from 'react'
import './ProfileButtons.css'
import Contact from '../../Pages/Contact/Contact';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
export default function ProfileButtons() {
  return (
    <div className='ProfileButtons'>
        <a href='https://www.zeinabansarian.ir/jpg2pdf%20_1_.pdf' className='DownloadBtn' target='blank'>
            <span>DOWNLOAD CV</span>
            <CloudDownloadIcon />
        </a>
        <Link to={'./Contact'} className='ContactBtn'>
        
            <span>CONTACT ME</span>
            <SendIcon />
        </Link>
        
    </div>
  )
}
