import React from "react";
import "./Experience.css";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export default function Experience() {
  return (
    <div className="experience">
      <div className="experienceTitle">
        <h2>Experience</h2>
        <h2>سوابق کاری</h2>
      </div>

      <div className="workBox">
        <div className="workDate">
          <span>اردیبهشت 1401 - آبان 1401</span>
        </div>

        <BusinessCenterIcon className="workIcon" />
        <div className="workTitle">
          <h3>پشتیبان وبسایت</h3>
          <h4>مجموعه ویزا ویژن</h4>
        </div>
        <div className="workDetail">
          <p>
            در این شرکت به صورت هیبرید مشغول به کاربودم پشتیبانی و سئو سایت
            مجموعه را انجام میدادم.
            <br />
            به علت دیرکرد حقوق از مجموعه استعفا دادم.
          </p>

        </div>
      </div>


      <div className="workBox">
        <div className="workDate">
          <span>مرداد 1400 - اردیبهشت 1401</span>
        </div>

        <BusinessCenterIcon className="workIcon" />
        <div className="workTitle">
          <h3>طراح و توسعه دهنده وب</h3>
          <h4>شرکت آی تی تیم</h4>
        </div>
        <div className="workDetail">
          <p>
              در این شرکت به صورت تمام وقت در سمت طراح و توسعه دهتده وب مشغول به کار بودم.
            <br />
            به دلیل تعلیق شرکت از مجموعه جدا شدم.
          </p>

        </div>
      </div>


      <div className="workBox">
        <div className="workDate">
          <span>مرداد 1399 - مهر 1399</span>
        </div>

        <BusinessCenterIcon className="workIcon" />
        <div className="workTitle">
          <h3>کارآموز وب</h3>
          <h4>شرکت صفر و یک</h4>
        </div>
        <div className="workDetail">
          <p>
            به صورت تمام وقت در سمت کارآموزی مشغول به کار بودم.
              <br />
              با پایان کارآموزی از شرکت جدا شدم.
          </p>

        </div>
      </div>


    </div>
  );
}
