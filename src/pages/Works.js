import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

const Works = () => {
  return (
    <div className="works">
      <Navbar />

      {/* -------- HEADER ------------ */}

      <div className="works-header">
        <h1>My Works.</h1>
        <i className="fa-solid fa-angle-down"></i>
      </div>

      {/* ------------ PROJECTS -------------- */}
      <div className="works-items">
        <Project projectNumber={0} />
        <Project projectNumber={1} />
        <Project projectNumber={2} />
        <Project projectNumber={3} />
        <Project projectNumber={4} />
      </div>

      {/* ------------- GitHub projects ------------- */}

      <div className="github-projects">
        <h2>GitHub Projects.</h2>
        <p>
          Here are some of my projects that I created during my spare time. I
          constantly keep on improving my skills by making these fun projects.
          These projects are available on my <a href="#">github repository</a>
        </p>
      </div>

      {/* --------------- FOOTER --------------- */}

      <div className="works-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Works;
