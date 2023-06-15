import React from "react";
import "./Contact.css";
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

export default function Contact() {
  return (
    <div className="Contact">
      <div className="ContactTitle">
        <h2>CONTACT</h2>
        <h2>اطلاعات تماس</h2>
      </div>
      <div className="contactBox">
        <div className="contactDetail">
          <HomeIcon className="contactIcon" />
          <span>آدرس : </span>
          <p>تهران ....</p>
        </div>
        <div className="contactDetail">
          <CallIcon className="contactIcon reverseIcon"/>
          <span>شماره تلفن : </span>
          <p>09195292765</p>
        </div>

        <div className="contactDetail">
          <WhatsAppIcon className="contactIcon"/>
          <span>Whatsapp : </span>
          <p>09195292765</p>
        </div>
        <div className="contactDetail">
          <TelegramIcon className="contactIcon"/>
          <span>Telegram : </span>
          <p>09195292765</p>
        </div>
        <div className="contactDetail widthHundred">
          <LocalPostOfficeIcon className="contactIcon"/>
          <span>Email : </span>
          <p>zeinabansarian6280@gmail.com</p>
        </div>
        <div className="contactDetail">
          <GitHubIcon className="contactIcon"/>
          <span>Git : </span>
          <p>github.com/zeinabansarian</p>
        </div>
      </div>
    </div>
  );
}
