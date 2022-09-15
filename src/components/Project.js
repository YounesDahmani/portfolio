import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import Button from "./Button";

const Project = ({ projectNumber, link }) => {
  const [currentProject] = useState(projectsData[projectNumber]);

  return (
    <div className="project-container">
      <div className="project-content">
        <a href={link} target="_blank" rel="noreferrer noopener">
          {/* left-part */}
          <div className="left-project-content">
            <div className="project-number">{currentProject.number}</div>
            <div className="title-tech">
              <h2>{currentProject.title}</h2>
              <ul className="languages">
                {currentProject.languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* right-part */}
          <div className="right-part-project">
            <Button content="view project" />
            <div className="work-item-pic">
              <img src={currentProject.img} alt={currentProject.title} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
