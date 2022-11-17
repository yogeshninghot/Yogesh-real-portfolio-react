import React from 'react'
import "./services.css"
import{FiCheck} from "react-icons/fi"


const Services = () => {
  return (
    <section id="services">
    <h5>What i Offer</h5>
    <h2>Services</h2>

    <div className="container services-container">
      <article className="service">
        <div className="service-head">
          <h3>UI/UX Design</h3>
        </div>
    
    <ul className="service-list">
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
    </ul>
      </article>
      {/* End of UI/UX */}
      <article className="service">
        <div className="service-head">
          <h3>Web Development</h3>
        </div>
    
    <ul className="service-list">
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
    </ul>
      </article>
      {/* End of Web DEv */}
      <article className="service">
        <div className="service-head">
          <h3>Content Creation</h3>
        </div>
    
    <ul className="service-list">
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <FiCheck/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
    </ul>
      </article>
      {/* End of Content Creation */}
    </div>
    </section>
  )
}

export default Services