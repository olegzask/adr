import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import "./financing.styles.css"

export const Financing  = ()=> {
    return (
        <div id="dealer-ctn" className="rs-cnt">
        <Helmet>
        <title>Financing  | Adrenalin Audio</title>
        <meta name="description" content="Explore flexible financing options for your needs. Edmonton." />
      </Helmet>

          <div className="rs-topper">
          <h1 className="service-container-header rs-serv-header">
            APPLY FOR FINANCING
          </h1>

          <p className="rs-description">
          At Adrenalin Audio, we understand that upgrading your vehicle with premium services such as Remote Start, Window Tint, Paint Protection Film, and 12 Volt accessories can be a significant investment. That's why we are pleased to offer convenient financing solution to make these enhancements more accessible to you. 
          </p>
          <br/>
          <br/>

          
          <p className="rs-description">
          Our tailored financing option ensure that you can enjoy the latest in automotive technology and protection without compromising your budget. Whether you're looking to increase convenience, enhance aesthetics, or add functionality to your vehicle, a flexible payment plan make it easy to achieve your desired upgrades. Experience the seamless integration of top-notch services with hassle-free financing at Adrenalin Audio.
          </p>
          <br />
          </div>
         
         <div className='financing-cont'>
            <img className='fairstone-logo' src="logos/fairstone.jpg" alt="fairstone-logo" />
            <div className='financing-rightside'>
                <h3 className='financing-hdr hdr-1'>Get financing quickly.</h3>
                <h3 className='financing-hdr hdr-2'>Find out if you're approved in 3 simple steps.</h3>
           <a href='https://web.fairstone.ca/adrenalinaudio' target="_blank" id="finance-btn" className="rmt-btn">
            APPLY NOW
          </a>
            </div>
         </div>
        
      </div>
    )
}