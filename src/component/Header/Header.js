// import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../image-assest/me.jpg"
import { HeaderSocial } from "./HeaderSocial"


const Header = () => {
  return (
     <header>
      <div className="container header-container">
       <h5>Hello I'm</h5>
      <h1>Yogesh D Ninghot</h1>
      <h5 className="text-light">Full Stack developer</h5>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img src={ME} alt="me" id="dp"></img>
      </div>
      <div>
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
      </div>
      </header>
  )
}

export default Header