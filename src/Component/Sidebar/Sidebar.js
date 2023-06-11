import React from "react";
import "./Sidebar.css";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import MessageIcon from "@mui/icons-material/Message";

import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={"/"}>
        <div className="menuTitle">
          <Person3OutlinedIcon className="sideIcon"/>
          <span>ABOUT</span>
        </div>
      </Link>
      <Link to={"/Experience"}>
        <div className="menuTitle">
          <EventNoteIcon className="sideIcon"/>
          <span>EXPERIENCE</span>
        </div>
      </Link>
      <Link to={"/Skills"}>
        <div className="menuTitle">
          <ImportantDevicesIcon className="sideIcon"/>
          <span>Skills</span>
        </div>
      </Link>
      <Link to={"/Portfolio"}>
        <div className="menuTitle">
          <CasesOutlinedIcon className="sideIcon"/>
          <span>PORTFOLIO</span>
        </div>
      </Link>
      <Link to={"/Contact"}>
        <div className="lastMenuTitle">
          <MessageIcon className="sideIcon"/>
          <span>CONTACT</span>
        </div>
      </Link>
    </div>
  );
}
