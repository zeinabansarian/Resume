import React from 'react'
import './ContactLogo.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function ContactLogo() {
  return (
    <div className='ContactLogo'>
        <a href="https://wa.link/p0qykg" target='blank' >
            <WhatsAppIcon  />
        </a>
        <a href='mailto:zeinabansarian6280@gmail.com' target='blank' >
            <EmailOutlinedIcon />
        </a>
        <a href='https://github.com/zeinabansarian' target='blank' >
            <GitHubIcon />
        </a>
    </div>
  )
}
