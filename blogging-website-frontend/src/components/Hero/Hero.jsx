import React from 'react';
import { assets } from '../../assets/assets';
import About from '../About/About.jsx';
import Services from '../services/Services.jsx';
import MyWork from '../Mywork/MyWork.jsx';
import Contact from '../Contact/Contact.jsx';
import './Hero.css'
const Hero = () => {

   return(
    <>
    <section id='home' className="home">
      <video src={assets.land_video} autoPlay loop muted ></video>
          <div className="page1">
            <img src={assets.deepak} alt="" />
            <div className="content">
            <h2> <span> Hi! I am Deepak Kunwar,</span> Welcome To My</h2>
            <h1>Portfolio <span>Website</span></h1>
            <p>I am a Web Developer, Graphic Designer And Content Creator.</p>
            </div>
            <div className="home-action">
           <a href="#contact"><div className="home-connect">Connect with me</div></a>   
              <div className="home-resume">My resume</div>
            </div>
            
          </div>
        
    </section>
    <About/>
    <Services/>
    <MyWork/>
    <Contact/>
  </>
  )
 
}

export default Hero
