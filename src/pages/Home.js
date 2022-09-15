import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

const Home = () => {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(2);
    return () => {
      TweenMax.to(body, 1, {
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  });

  return (
    <React.Fragment>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>

      <Navbar />
      <div data-barba="container" className="home">
        <div ref={(el) => (body = el)} className="Headd">
          <div className="header">
            <div className="header-container">
              <div className="header-content">
                <div className="header-text sizing">
                  <h1>
                    ReactJs
                    <br />
                    web developer.
                  </h1>
                  <p>
                    Hi I'm Younes Dahmani, a passionate Front-end Developer,
                    <br />
                    based in France.
                  </p>
                  <NavLink to="/works">
                    <Button content="see my works" />
                  </NavLink>
                </div>

                <div className="img-container sizing">
                  <img src="./assets/img/dev-item.svg" alt="men coding" />
                </div>
              </div>
              <div className="social">
                <ul>
                  <li>
                    <a
                      href="https://github.com/YounesDahmani"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Github
                    </a>
                  </li>

                  <div className="slash"> / </div>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/younes-dahmani-135610137/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Linkedin
                    </a>
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
              <div id="project-1">
                <Project projectNumber={0} />
              </div>
            </NavLink>

            <div id="project-2">
              <Project projectNumber={1} />
            </div>
            <div id="project-3">
              <Project projectNumber={2} />
            </div>
            <div id="project-4">
              <Project projectNumber={3} />
            </div>
          </div>
          <div className="view-more-projects">
            <div className="vmp-container">
              <p>There's more</p>
              <NavLink to="/works">
                <h2>
                  view all projects{" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                  {/* <svg
                    className="right-arrow"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg> */}
                </h2>
              </NavLink>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
