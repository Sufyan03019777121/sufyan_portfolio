import React from "react";
import about_me_img from '../assets/images/About_me.jpeg'

const About = () => {
  return (
    <section className="container py-5 text-center  " id="about" >
      <div className="row ">

        <div className="col-md  ">
          <img className="mb-5 w-50 rounded-3" src={about_me_img} alt="" />

          <p className="text-muted">
            I'm a passionate <strong>React.js Developer</strong> with expertise in creating
            dynamic and high-performance web applications. My focus is on building
            scalable and interactive UI solutions.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0"
              style={{ wordSpacing: "10px" }}>
              🚀 Expert in
              <span style={{ color: "green", margin: "10px" }}>Html</span>,
              <span style={{ color: "blue" }}>Css</span>,
              <span style={{ color: "purple", marginLeft: "10px" }}>Bootstrap</span> ,
              <span style={{ color: "orange" }}>Tailwind</span> ,
              <span style={{ color: "red" }}>JavaScript</span>  &  <span style={{ color: "blue" }}>React js</span>
            </li>

            <li className="list-group-item border-0">
              🎨 UI/UX Enthusiast with Responsive Design Skills
            </li>
            <li className="list-group-item border-0">
              ⚡ Performance-Optimized & Scalable Code
            </li>

          </ul>
          <a
            href="https://wa.me/923019777121?"
            target="_blank"
            rel="noreferrer" 
          >

            <button className="btn btn-primary mt-3">Hire Me</button>
          </a>

        </div>
      </div>
      <hr />
    </section>

  );
};

export default About;
