import React from "react";
import "./About.css";
import SchoolIcon from "@mui/icons-material/School";
export default function About() {
  return (
    <div className="About">
      <div className="aboutTitle">
        <h2>ABOUT ME</h2>
        <h2>درباره من</h2>
      </div>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>

      <section>
        <div className="aboutSec1">
          <span>متولد : </span>
          <p> 26/8/1378 </p>
        </div>
        <div className="aboutSec1">
          <span>وضعیت تاهل : </span>
          <p> مجرد </p>
        </div>
        <div className="aboutSec1">
          <span>ساکن : </span>
          <p> تهران </p>
        </div>
      </section>

      <div className="aboutTitle">
        <h2>QUALIFICATION</h2>
        <h2>تحصیلات </h2>
      </div>
      <div className="qualibox">
        <SchoolIcon className="qualiIcon" />
        <div className="qualiDetail">
          <span>1397 - 1401</span>
          <h3>دانشگاه آزاد واحد یادگار امام </h3>
          <h4>مهندسی کامپیوتر گرایش نرم افزار</h4>
        </div>
      </div>

      <div className="knowledge">
        <div className="aboutTitle">
          <h2>KNOWLEDGE</h2>
          <h2>دانسته ها</h2>
        </div>

        <div className="mySkilss">
          <img src="https://www.zeinabansarian.ir/images/html.png" />
          <h3>Front end</h3>
          <p>
            Html , css , sass , <br /> less , javascript & react
          </p>
        </div>
        <div className="mySkilss">
          <img src="https://www.zeinabansarian.ir/images/wordpress1.png" />
          <h3>Wordpress Developer</h3>
          <p>
            wordpress , Elementor ,<br /> Visual composer & Common plugins
          </p>
        </div>
      </div>

    </div>
  );
}
