import React from "react";
import LinkComponent from "../link/LinkComponent";
import "./about.styles.css";

export default function About() {
  return (
    <div className="about-container" id="ankor-3">
       <h2  className="service-container-header">
       WHO<span className="our-services">{"   "}WE ARE</span>
      </h2>
     
      <div className="about-bottom-text">
        <p className="about-paragraph">
        Edmonton Tint Studio, operated by a sole professional with over 10 years of experience, offers exceptional automotive window tint and paint protection film services in Edmonton.
        </p>
        <p className="about-paragraph">
       With a focus on quality and customer satisfaction, I personally handle all aspects of the business, from consultations to installations. Using the latest techniques and technology, I provide customized solutions for privacy, UV protection, heat reduction, and exterior preservation.
        </p>
         <p className="about-paragraph">
        Trust Edmonton Tint Studio for personalized service and outstanding results. Contact me today to enhance your vehicle's aesthetics and protection.
        </p>
{/* 
        <p className="about-paragraph">
        With my expertise and attention to detail, I aim to exceed customer expectations and leave them completely satisfied with my work. As a solo operator, I prioritize personalized service and ensure that each customer receives the utmost attention and care.
        </p>

        <p className="about-paragraph">
        If you're looking for top-quality automotive window tint and paint protection services in Edmonton, trust Edmonton Tint Studio for exceptional results and a personalized experience. Contact me today to schedule a consultation and discover how I can enhance your vehicle's aesthetics and protection.
        </p> */}
      </div>
      
    </div>
  );
}
