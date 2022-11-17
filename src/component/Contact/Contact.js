import React from 'react'
import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import  { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xct2uho', 'template_m4oxanh', form.current, 'esAC1Yfpbc2msrgLp')
      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMail className="contact-option-icon"/>
            <h4>Email</h4>
            <h5>ydninghto@gmail.com</h5>
            <a href="mailto:ydninghto@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+919822716002</h5>
            <a href="https://api.whatsapp.com/send?phone+919822716002" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of coantct option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact