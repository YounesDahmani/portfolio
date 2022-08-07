import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

const Works = () => {
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
      <div data-barba="container" className="works">
        <div ref={(el) => (body = el)} className="Headd">
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
              Here are some of my projects that I created during my spare time.
              I constantly keep on improving my skills by making these fun
              projects. These projects are available on my {""}
              <a href="https://github.com/YounesDahmani" target="_blank">
                github repository
              </a>
            </p>
          </div>

          {/* --------------- FOOTER --------------- */}

          <div className="works-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Works;
