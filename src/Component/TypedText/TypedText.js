import React from "react";
import Typewriter from "typewriter-effect";
import './TypedText.css'
export default function TypedText() {
  return (
    <div className="TypeText">
      <Typewriter
        options={{
          strings: ["FRONT-END DEVELOPER", "WORDPRES DEVELOPER" , "FREELANCER"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
