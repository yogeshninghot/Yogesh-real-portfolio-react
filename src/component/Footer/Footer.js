import React from 'react'
import "./footer.css"
import{FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
     <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#Experience">Experience</a></li>
      <li><a href="#portfoio">Portfolio</a></li>
      <li><a href="#conta">Contact</a></li>
     </ul>
     <div className="footer-socials">
     <a href="https://facebook.com"><FaFacebookF/></a>
      <a href="https://instagram.com"><FiInstagram/></a>
      <a href="https://twitter.com"><FaTwitter/></a>
     </div>
     
    </footer>
  )
}

export default Footer