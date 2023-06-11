import React from "react";
import "./Portfolio.css";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="portfolioTitle">
        <h2>PORTFOLIO</h2>
        <h2>نمونه کار</h2>
      </div>
      <div className="portfolioBoxes">
        <div className="portfolioBox">
          <div className="portfolioImg">
            <a href="https://gelaarisbeauty.ir/" target="_blank">
              <img
                src="https://www.zeinabansarian.ir/images/screencapture-gelaarisbeauty-ir-2023-06-10-11_11_14%20_1_.jpg"
                alt="gelaarisbeauty.ir"
              />
              <span className="info">
                <InsertLinkIcon className="linkIcon" />
              </span>
            </a>
          </div>
          <a href="https://gelaarisbeauty.ir/" target="_blank">
            gelaarisbeauty.ir
          </a>
          <p>Based on Wordpress & Elementor</p>
        </div>
        <div className="portfolioBox">
          <div className="portfolioImg">
            <a href="https://visavision.net/" target="_blank">
              <img
                src="https://www.zeinabansarian.ir/images/screencapture-visavision-net-2023-06-10-11_10_49%20_1_.jpg"
                alt="visavision.net"
              />
              <span className="info">
                <InsertLinkIcon className="linkIcon" />
              </span>
            </a>
          </div>
          <a href="https://visavision.net/" target="_blank">
            visavision.net
          </a>
          <p>Based on Wordpress & Elementor</p>
        </div>
      </div>
    </div>
  );
}
