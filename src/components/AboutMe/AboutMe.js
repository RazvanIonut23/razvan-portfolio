import React from "react";
import s from "./About.module.scss";
import { Icon } from "semantic-ui-react";
import myPicture from "../../images/myPicture.svg";

const AboutMe = () => {
  return (
    <div style={{}} id="about" className={s.aboutMe}>
      <div className={s.containerAbout}>
        <img src={myPicture} className={s.aboutImg} alt="" />

        <div className={s.infoContainer}>
          <h2>About me</h2>
          <p>
            I’m a innovative and creative Front-end Developer with experience
            building and maintaining responsive websites. Motivated and
            self-learner, able to manage a project and deliver the best user
            experience by combining the latest web technologies.Proficient in
            HTML, CSS, JavaScript; plus modern libraries and frameworks.
          </p>
          <div className={s.socialMContainer}>
            <a href="mailto:gusterrazvan@gmail.com" className={s.socialIcon}>
              <Icon name="mail" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/razvan-guster-786440215/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <Icon name="linkedin" /> Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
