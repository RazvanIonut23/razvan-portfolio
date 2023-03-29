import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import HeroPage from "./components/HeroPage/HeroPage";
import SkillsAndExp from "./components/SkillsAndExp/SkillsAndExp";
import Work from "./components/Work/Work";
import DividerExampleDivider from "./assets/Divider";
import "./App.css";

const HomeScreen = () => {
  return (
    <div style={{ background: "#272727" }}>
      <HeroPage />
      <AboutMe />
      <DividerExampleDivider />
      <SkillsAndExp />
      <DividerExampleDivider />
      <Work />
    </div>
  );
};

export default HomeScreen;
