import React from 'react'
import "./portfolio.css"
import IMG1 from "../../image-assest/portfolio1.jpg"
import IMG2 from "../../image-assest/portfolio2.jpg"
import IMG3 from "../../image-assest/portfolio3.jpg"
import IMG4 from "../../image-assest/portfolio4.jpg"
import IMG5 from "../../image-assest/portfolio5.png"
import IMG6 from "../../image-assest/portfolio6.jpg"


const data= [
  {
    id:1,
    image:IMG1,
    title:"Tik tac Toe",
    github:"https://github.com",
    demo:"https://github.com"
    },
    {
      id:2,
      image:IMG2,
      title:"Tik tac Toe",
      github:"https://github.com",
      demo:"https://github.com"
      },
      {
        id:3,
        image:IMG3,
        title:"Tik tac Toe",
        github:"https://github.com",
        demo:"https://github.com"
        },
        {
          id:4,
          image:IMG4,
          title:"Tik tac Toe",
          github:"https://github.com",
          demo:"https://github.com"
          },
          {
            id:5,
            image:IMG5,
            title:"Tik tac Toe",
            github:"https://github.com",
            demo:"https://github.com"
            },
            {
              id:6,
              image:IMG6,
              title:"Tik tac Toe",
              github:"https://github.com",
              demo:"https://github.com"
              },
]



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Wrork</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio-item-cta">
          <a href={github} className="btn btn-primary" target='-blank'>Github</a>
          <a href={demo} className="btn btn-primary" target='-blank'>
            Live Demo</a>
          </div>
          </article>

            )
          })
        }



        {/* <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="https://github.com" className="btn" target='-blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" target='-blank'>
            Live Demo</a>
          </div>
          </article> */}
          
        
      </div>
    </section>
  )
}

export default Portfolio