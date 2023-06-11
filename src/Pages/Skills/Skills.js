import React from "react";
import "./Skills.css";
import Progress from "../../Component/Progress/Progress";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import CheckIcon from "@mui/icons-material/Check";
import PaletteIcon from "@mui/icons-material/Palette";
import LinearDeterminate from "../../Component/Progress/LinearProgres";
import LanguageIcon from '@mui/icons-material/Language';

export default function Skills() {
  return (
    <div className="skills">
      <div className="skillsTitle">
        <h2>SKILLS</h2>
        <h2>مهارت ها</h2>
      </div>
      <div className="skillsTit">
        <CodeOutlinedIcon className="skillIcon" />
        <h3>مهارت کدنویسی</h3>
      </div>

      <div className="skilItems">
        <div className="skilItem">
          <Progress value={80} />
          <h3>CSS3</h3>
        </div>
        <div className="skilItem">
          <Progress value={95} />
          <h3>HTML</h3>
        </div>
        <div className="skilItem">
          <Progress value={70} />
          <h3>SASS</h3>
        </div>
        <div className="skilItem">
          <Progress value={70} />
          <h3>LESS</h3>
        </div>
        <div className="skilItem">
          <Progress value={75} />
          <h3>BOOTSTRAP5</h3>
        </div>
        <div className="skilItem">
          <Progress value={30} />
          <h3>JAVASCRIPT</h3>
        </div>
        <div className="skilItem">
          <Progress value={45} />
          <h3>JQUERY</h3>
        </div>
        <div className="skilItem">
          <Progress value={25} />
          <h3>REACT</h3>
        </div>
      </div>
      <div className="skillsTit">
        <ChecklistRtlIcon className="skillIcon" />
        <h3>دیگر مهارت ها</h3>
      </div>
      <div className="skillCheck">
        <div className="checkItem">
          <CheckIcon />
          <p>WordPress Development</p>
        </div>
        <div className="checkItem">
          <CheckIcon />
          <p>SEO Optimize</p>
        </div>
        <div className="checkItem">
          <CheckIcon />
          <p>Responsive and mobile-ready</p>
        </div>
      </div>
      <div className="graphicSkill">
        <div className="skillsTit">
          <PaletteIcon className="skillIcon" />
          <h3>مهارت گرافیکی</h3>
        </div>
        <div className="artSkill">
          <p>PHOTOSHOP</p>
          <LinearDeterminate value={30} />
        </div>
        <div className="artSkill">
          <p>ILLUSTRATOR</p>
          <LinearDeterminate value={50} />
        </div>
        <div className="artSkill">
          <p>ADOBE XD</p>
          <LinearDeterminate value={90} />
        </div>
      </div>
      <div className="languages">
      <div className="skillsTit">
          <LanguageIcon className="skillIcon" />
          <h3>زبان</h3>
        </div>
        <div className="degree">
          <p>ENGLISH</p>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
