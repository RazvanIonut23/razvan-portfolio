import React from "react";
import s from "./Skills.module.scss";
import skills from "../../images/skills.svg";

const SkillsAndExp = () => {
  return (
    <div id="skills" className={s.skills}>
      <div className={s.skillsContainer}>
        <div className={s.infos}>
          <h2>Skills & Experience</h2>
          <p>
            Since beginning my journey as a Front-end Developer, I’ve done
            remote work for IT firms, consulted for startups, and collaborated
            with talented people to create web products for both business and
            consumer use. I create successful responsive websites that are fast,
            easy to use, and built with best practices. The main area of my
            expertise is front-end development, HTML, CSS, JS.
            <br /> Visit my{" "}
            <a
              href="https://www.linkedin.com/in/razvan-guster-786440215/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              Linkedin
            </a>{" "}
            profile for more details or just{" "}
            <a href="mailto:gusterrazvan@gmail.com" className={s.socialIcon}>
              contact
            </a>{" "}
            me.
          </p>
        </div>
        <div className={s.tehnologies}>
          <img src={skills} alt="" className={s.skillsImg} />
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExp;
