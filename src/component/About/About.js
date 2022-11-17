import React from 'react'
import "./about.css"
import Me from "../../image-assest/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Me} alt="About Image" className="real-about-pic" />
          </div>

        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
             <FaAward className="about-icon" />
             <h5>Experience</h5>
             <small>Fresher</small>
            </article>

            <article className="about-card">
             <FiUsers className="about-icon" />
             <h5>Clients</h5>
             <small>10+ Clients </small>
            </article>

            <article className="about-card">
             <VscFolderLibrary className="about-icon" />
             <h5>Projects</h5>
             <small>10+ Completed</small>
            </article>

          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About