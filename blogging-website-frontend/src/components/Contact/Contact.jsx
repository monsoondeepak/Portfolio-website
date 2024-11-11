import React from 'react'
import './contact.css'

const Contact = () => {
    

  return (
    <section id="contact" className='contact'>
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's have a conversation!</h1>
          <p>Let's talk together to build our beautiful relationship. I am always there to response you, so feel free to send me a message about everything that you want me to work on. You can contact me anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
            <i class="fa-solid fa-envelope"></i><p>deepakkunwar890@gmail.com</p>
            </div>
            <div className="contact-detail">
            <i class="fa-solid fa-phone"></i><p>+977-9842866607</p>
            </div>
            <div className="contact-detail">
            <i class="fa-solid fa-location-dot"></i><p>Lumbini, Provience - R.M.-07 Tamghas,Gulmi, Nepal</p>
            </div>
          </div>
        </div>
          <from className="contact-right">
            <label htmlFor="">Your name</label>
            <input type="text" placeholder="Enter your name" name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email"  placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" row="8" placeholder='Enter your message'></textarea>
            <button  type="submit" className="submit" style={{background:"linear-gradient(270deg, #DF8908 30%, #B415FF 100.28%)"}}>Submit now</button>
          </from>
      </div>
      
    </section>
  )
}

export default Contact
