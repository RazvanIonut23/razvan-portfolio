import React from "react";
import ProjectPage from "../../Pages/ProjectPage";
import s from "./Work.module.scss";

const Work = () => {
  return (
    <div id="work" className={s.work}>
      <div className={s.workContainer}>
        <div className={s.infos}>
          <h2>My Portfolio</h2>
          <p>
            A gallery with interesting projects to which I have contributed.
          </p>
        </div>
        <ProjectPage />
      </div>
    </div>
  );
};

export default Work;
