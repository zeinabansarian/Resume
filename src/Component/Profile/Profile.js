import React from "react";
import Slider from "../Slider/Slider";
import slides from "../Profile/slides";
import ImageLogo from "../imageLogo/imageLogo";
import './Profile.css'
import TextTyper from "../TypedText/TypedText";
export default function Profile() {
    const textToRender = 'FRONT-END DEVELOPER'

    return (
        
        <div className="Profile">
            <Slider slides={slides}/>
            <ImageLogo />
            <h2>ZEINAB ANSARIAN</h2>
            <TextTyper text={textToRender} interval={10} Markup={"code"} />
        </div>
    );
}
