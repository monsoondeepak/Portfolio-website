import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-top">
        <div className="box">
          <div className="list" style={{textAlign:"center"}}>
            <h2>Quick Contact</h2>
         <p><i class="fa-solid fa-envelope"></i> deepakkunwar890@gmail.com </p>
         <p><i class="fa-solid fa-phone"></i>  +977-9842866607</p>
         <p><i class="fa-solid fa-location-dot"></i>  R.M-07 - Tamghas,Gulmi</p>
          </div>
        </div>
          <div className="box">
          <div className="list">
          <h2>Audio Program</h2>
          <p> <i class="fa-solid fa-arrow-right"></i> Upanyas</p>
          <p> <i class="fa-solid fa-arrow-right"></i> Katha Sagraha</p>
          <p> <i class="fa-solid fa-arrow-right"></i> Gajal Sagraha</p>
          <p> <i class="fa-solid fa-arrow-right"></i> Sumnima</p>
          <p> <i class="fa-solid fa-arrow-right"></i> Dhoni Taranga</p>
          </div>
          </div>
          <div className="box">
            <div className="list">
              <h2>Quick links</h2>
           <p><i class="fa-solid fa-arrow-right"></i> Home</p> 
           <p><i class="fa-solid fa-arrow-right"></i> About Me</p> 
           <p><i class="fa-solid fa-arrow-right"></i> Service</p> 
           <p><i class="fa-solid fa-arrow-right"></i> Contact</p> 
           <p><i class="fa-solid fa-arrow-right"></i> Blog</p> 
           <p><i class="fa-solid fa-arrow-right"></i> Listen</p> 
           <p><i class="fa-solid fa-arrow-right"></i> Watch</p> 
            </div>
          </div>
          <div className="box">
            <div className="list">
            <h2>Get in touch</h2>
            <p><i class="fa-solid fa-arrow-right"></i> <a href="https://www.facebook.com/profile.php?id=100043671618896">facebook</a></p>
            <p><i class="fa-solid fa-arrow-right"></i> <a href="https://www.instagram.com/deepak_kunwar66/">instagram</a></p>
            <p><i class="fa-solid fa-arrow-right"></i> <a href="https://x.com/SocioInfo2">twitter</a></p>
            <p><i class="fa-solid fa-arrow-right"></i> <a href="https://github.com/monsoondeepak">github</a></p>
            <p><i class="fa-solid fa-arrow-right"></i> <a href="https://www.linkedin.com/in/deepak-kunwar-783196267/">linkedin</a></p>
            </div>
          </div>
        </div>
      <div className="footer-bottom">
        <div className="footer-top-left">
          <div className="box">
            <img src={assets.Coder} alt="" />
          </div>
          <div className="para">
          <p>I am a web developer, graphic designer from, Nepal with over 2 years of experience. I have a skill of PHP/Laravel, React, HTML/CSS, javascript, node.js, express.js to build fully functional web application. Also, I can design a poster for branding your business and I can make a logo to your company.</p>
            <h1>Social links</h1>
          <div className="social">
          <a href='https://www.facebook.com/profile.php?id=100043671618896'><i class="fa-brands fa-facebook"></i></a>
          <a href='https://www.instagram.com/deepak_kunwar66/'><i class="fa-brands fa-instagram"></i></a>
          <a href='https://x.com/SocioInfo2'><i class="fa-brands fa-twitter"></i></a>
          <a href='https://github.com/monsoondeepak'><i class="fa-brands fa-github"></i></a>
          <a href='https://www.linkedin.com/in/deepak-kunwar-783196267/'><i class="fa-brands fa-linkedin"></i></a>
          </div>
          </div>
          <div className="footer-top-right">
          <i class="fa-solid fa-user"></i>
          <input type="email" placeholder='Enter your email' />
        </div>
        <button className="footer-subscribe">Subscribe</button>
        </div>
        <div className='hr'></div>
        <h1 className="ftext">© All rights reserved|2024 Deepak Kunwar</h1>
      </div>
    </div>
  )
}

export default Footer
