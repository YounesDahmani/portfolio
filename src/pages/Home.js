import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <Navbar />
        <div className="header-container">
          <div className="header-content">
            <div className="header-text sizing">
              <h1>
                creative front-end
                <br />
                web developer.
              </h1>
              <p>
                Hi I'm Younes Dahmani, a passionate Front-end Developer,
                <br />
                based in France.
              </p>
              <Button content="see my works" />
            </div>

            <div className="img-container sizing">
              <img src="./assets/img/cross-black.svg" alt="black cross" />
            </div>
          </div>
          <div className="social">
            <ul>
              <li>
                <span>Github</span>
              </li>

              <div className="slash"> / </div>

              <li>
                <span>Linkedin</span>
              </li>

              <div className="slash"> / </div>

              <li>
                <span>Twitter</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="project-title">
          <h2>Crafted with love</h2>
          <p>These are a selection of my recent works.</p>
        </div>
      </div>
      <div className="projects-content">
        <NavLink to="/about">
          <div className="project-1">
            <Project projectNumber={0} />
          </div>
        </NavLink>
        <div className="project-2">
          <Project projectNumber={1} />
        </div>
        <div className="project-3">
          <Project projectNumber={2} />
        </div>
        <div className="project-4">
          <Project projectNumber={3} />
        </div>
      </div>
    </div>
  );
};

export default Home;
