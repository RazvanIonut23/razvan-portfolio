import React from "react";
import { Icon } from "semantic-ui-react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer}>
      <h2>That's all from my side</h2>
      <p>I would be happy to hear from you! Do not hesitate to contact me.</p>
      <div className={s.socialMContainer}>
        <a href="mailto:gusterrazvan@gmail.com" className={s.socialIcon}>
          <Icon name="mail" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/razvan-guster-786440215/"
          target="_blank"
          rel="noreferrer"
          className={s.socialIcon}
        >
          <Icon name="linkedin" />
          Linkedin
        </a>
        <a
          href="https://github.com/RazvanIonut23?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className={s.socialIcon}
        >
          <Icon name="github icon" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
