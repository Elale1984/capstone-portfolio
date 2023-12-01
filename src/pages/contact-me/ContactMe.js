import React from 'react'
import './ContactMe.css'

const ContactMe = () => {
  return (
    <div contact-me-container>
      <div className="contact-me-header">
        <p className="header-text">Let me show you why I am worth it. </p>
      </div>
      <div className="contact-me-form">
        <input type="text" className="contact-me-form-control" placeholder='Name'/>
        <input type="text" className="contact-me-form-control" placeholder='Email'/>
        <textarea  type="text" cols="40" rows="5" className="contact-me-form-control" placeholder='Leave me a message!'/>
        <input type="text" className="contact-me-form-control" />
        <div className="contact-me-submit-button">Send</div>
      </div>
    </div>
  )
}

export default ContactMe