import React from "react";
import s from "./ProjectPage.module.scss";
import projectData from "../data";
import thunder from "../images/Thunder.svg";

const ProjectPage = () => {
  return (
    <div className={s.bigContainer}>
      {projectData.map((project) => (
        <>
          <div className={s.project}>
            <div>
              <div className={s.projectContainer}>
                <div className={s.infoAbout}>
                  <h2>{project.name}</h2>
                  <h3>{project.aboutProject}</h3>
                  <h4 className={s.techs}>
                    <img src={thunder} alt="" />
                    Techs: <span>{project.techs}</span>
                  </h4>
                </div>
                <img src={project.picture} className={s.projectImg} alt="" />
              </div>
              <div className={s.linkToProject}>
                <a href={project.live} target="_blank" rel="noreferrer">
                  {project.live}
                </a>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ProjectPage;
