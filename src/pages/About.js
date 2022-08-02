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
              I am a young front-end developer, <br /> who is eager to discover{" "}
              <br />
              and learn the limitless world <br /> of development.
            </h1>
          </div>
          <div className="about-header-pic"></div>
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
              Hi, I'm Younes Dahmani. I'm a 24 years old developer, living in
              Lille, France. I specialized in front-end development less than a
              year ago.
              <br /> <br />
              When I was younger, many people around me knew exactly what job
              they wanted to do later on. I didn't have a clue ! Apart from
              soccer and technology, I wasn't very enthusiastic about anything
              else. I was very bad at soccer and for a long time I had the
              belief that to work in development or tech you had to be a genius
              and do long studies. I obtained my technological baccalaureate,
              then I realized two additional years and I obtained my B.T.S. I
              did my studies in the field of commerce, something I hate. I did
              not work for passion but for necessity without knowing where I was
              going. <br />
              Then one day, I had a click, I had to find my way! I knew that the
              only thing that interested me was technology, but I had strong
              limiting beliefs about it. It's by dint of informing myself and
              learning about the subject that I understood that with
              perseverance and hard work I could do it. So I started to train
              for several months on OpenClassrooms, and then I bought a more
              structured training, and oriented on the Front-end. Today the
              technologies I use the most are Javascript React and Sass.
              <br /> <br /> Now, I would like to join a team that would help me
              to improve my skills and make me discover new things.I am always
              thirsty for knowledge and the more I learn the more I see that I
              still have to learn! After having acquired a good experience in
              web development, I would like to develop mobile applications and
              why not learn other languages too, the environment of development
              is so vast!
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
