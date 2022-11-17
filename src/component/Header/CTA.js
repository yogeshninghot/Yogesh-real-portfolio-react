import React from 'react'
import CV from "../../image-assest/cv.pdf"


 const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} className="btn" download>Download</a>
        <a href="#contact" className="btn primary_class">Let's Talk</a>
        </div>
  )
}

export default CTA