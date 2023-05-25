import React from "react";
import Slider from "../Slider/Slider";
import slides from "../Profile/slides";
import './Profile.css'
export default function Profile() {
    return (
        <div className="Profile">
            <Slider slides={slides}/>

        </div>
    );
}
