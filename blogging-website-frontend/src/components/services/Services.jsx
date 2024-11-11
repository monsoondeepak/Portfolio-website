import React from 'react'
import './services.css'
import { Services_Data } from '../../assets/services_data'

const Services = () => {
  return (
    <section id='service' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <div className="services-container">
          {Services_Data.map((service,index)=>{
            return <div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <h4>Read More</h4>
                <button><i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
