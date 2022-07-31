import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-header">
        <div className="about-header-container">
          <div className="-about-text">
            <h1>
              I am a young front-end developer,
              <br /> who is eager to discover and learn the limitless world of
              development.
            </h1>
          </div>
          <div className="about-header-pic">
            <img src="./assets/img/cross-black.svg" alt="black cross" />
          </div>
        </div>
      </div>

      <div className="about-text-section">
        <div className="about-text-left-part">
          <div className="about-left-text">
            <p>/01</p>
            <p>
              <span>story</span>
            </p>
          </div>
        </div>

        <div className="about-text-right-part">
          <div className="about-title">
            <h2>A story of hardwork and perseverance.</h2>
          </div>
          <div className="about-text-paragraph">
            <p>
              Hi! I'm Julius Guevarra. I have a strong passion for design and
              technology. I specialize in Front End Development and UI/UX Design
              and my passion is all about building elegant and professional user
              interfaces and websites. I also do branding and identity design
              such as logo design, letterhead and business card, along with
              photo editing, image cropping and other graphic design services.{" "}
              <br /> <br />I live in the Philippines. I am a graduate of
              Information Technology from Don Honorio Ventura State University.
              I started drawing and designing from a young age and most of my
              design skills and knowledge are self-taught. I got into
              programming when I was introduced to web programming during high
              school. It fascinated me and it hooked me on, so I decided to
              pursue this career. Even though I took the path of becoming a
              programmer, my strong and innate talent in arts and design
              persisted. Consequently, I taught myself about multimedia design.
              Combining the state of the art and my programming knowledge, I am
              able to build a professional and interactive websites.
              <br /> <br /> I will not stick around on just doing Front End
              development projects. My goal is to take it to the next level of
              becoming a Full Stack Developer and become one of the world's top
              designers, so now, I am working towards it. I have prepared myself
              to accept the challenges into this ever changing world and I will
              try my very best to achieve my dreams and goals.
            </p>
          </div>
        </div>
      </div>

      {/* ------------   second part ------------- */}

      <div className="about-text-section">
        <div className="about-text-left-part">
          <div className="about-left-text">
            <p>/02</p>
            <p>
              <span>the process</span>
            </p>
          </div>
        </div>

        <div className="about-text-right-part">
          <div className="about-title">
            <h2>How i work.</h2>
          </div>
          <div className="about-text-paragraph">
            <p>
              When I start working on a project, I try to get all the
              information and data from my client that are relevant to the
              project such as goals, demographics and preferred aesthetics.
              After this, I start doing the research about the industry,
              competition, trends and other factors that are necessary for the
              development of the project. After I have all the data that I need,
              my next step is to work on the wireframe and prototype using tools
              such as Adobe XD and Figma. After the prototype is finished and
              the wireframes are finalized and approved, this is where I start
              doing the visual designs using various tools such as Adobe
              Photoshop for processing images, Adobe Illustrator for creating
              vector graphics, and Adobe XD for building the actual visual
              design. After the visual designs are approved, I start on coding
              and transforming the designs into actual code using a wide range
              of technologies such as HTML, CSS and JavaScript with best
              practices in mind.
            </p>
          </div>
        </div>
      </div>

      {/* -------------- Third Part ------------- */}

      <div className="about-text-section">
        <div className="about-text-left-part">
          <div className="about-left-text">
            <p>/03</p>
            <p>
              <span>the tools</span>
            </p>
          </div>
        </div>

        <div className="about-text-right-part">
          <div className="about-title">
            <h2>What i use.</h2>
          </div>
          <div className="about-text-paragraph">
            <p>
              I use a number of tools that make design and development much
              easier. I usually use Adobe XD or Figma interchangeably for doing
              all the process that includes wireframing, prototyping and visual
              design. For wireframing alone, any graphic design tool can make
              the job done either it is low fidelity or high fidelity wireframe.
              For development/coding, I use different tools specific to the
              development of the application or website. Listed below are the
              tools and technologies that I use and I'm knowledgeable with.
            </p>
          </div>
          <div className="table-tools">
            <div className="creative-table">
              <table>
                <thead className="table-title">
                  <tr>
                    <th>Creative Design</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Figma</td>
                  </tr>
                  <tr>
                    <td>Adobe Photoshop</td>
                  </tr>
                  <tr>
                    <td>Adobe Illustrator</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="dev-table">
              <table>
                <thead>
                  <tr>
                    <th colSpan={2}>Web Development</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HTML 5</td>
                    <td>Git</td>
                    <td>TypeScript</td>
                  </tr>
                  <tr>
                    <td>CSS 3</td>
                    <td>Redux</td>
                    <td>Firebase</td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>React JS</td>
                    <td>Node JS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------- Fourth Part ------------------ */}

      <div className="about-text-section">
        <div className="about-text-left-part">
          <div className="about-left-text">
            <p>/04</p>
            <p>
              <span>Contact</span>
            </p>
          </div>
        </div>

        <div className="about-text-right-part">
          <div className="about-title">
            <h2>Social.</h2>
          </div>
          <div className="about-text-social">
            <a href="#">Linkedin</a>
            <span> / </span>
            <a href="#">Github</a>
            <span> / </span>
            <a href="#">Twitter</a>
          </div>
          <div className="about-title">
            <h2>Email.</h2>
          </div>
          <div className="about-text-email">
            <a href="#">y.dahmaniyounes@gmail.com</a>
          </div>
        </div>
      </div>

      {/* -------------------- quote ------------------ */}

      <div className="quote">
        <q>
          Each difficulty encountered must be an opportunity for further
          progress.
        </q>
        <div className="quote-author">
          <p>- Pierre de Coubertin</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
