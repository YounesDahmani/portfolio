import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
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
      <div className="view-more-projects">
        <div className="vmp-container">
          <p>There's more</p>
          <NavLink to="/works">
            <h2>
              view all projects{" "}
              <svg
                className="right-arrow"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </h2>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
