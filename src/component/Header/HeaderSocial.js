import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"


export const HeaderSocial = () => {
  return (
    <div className="header-social">
        <a href="https://linkedin.com" target="_black" > <BsLinkedin/> </a>
        <a href="https://github.com" target="_black"> <FaGithub/></a>
        

    </div>
  )
}
