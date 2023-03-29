import React from "react";
import s from "./Hero.module.scss";
import name from "../../images/name.svg";
import resume from "../../images/Guster Razvan_Resume.pdf";
import DividerExampleDivider from "../../assets/Divider";
import { Icon } from "semantic-ui-react";

const HeroPage = () => {
  return (
    <div className={s.hero} id="hero">
      <div className={s.heroContainer}>
        <img src={name} alt="" className={s.heroName} />
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className={s.heroButton}
        >
          <Icon name="address card outline icon" />
          Resume
        </a>
      </div>
    </div>
  );
};

export default HeroPage;
