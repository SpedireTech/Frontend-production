import React from "react";
import Mission from "../components/about/Mission";
import Vision from "../components/about/Vision";
import StoryValues from "./About/Story&Values";
import TopPage from "../components/about/TopPage";
import Nav from "../components/Header/Nav";

const About = () => {
  return (
    <div>
      <Nav />
      <TopPage />
      <Mission />
      <Vision />
      <StoryValues />
    </div>
  );
};

export default About;
