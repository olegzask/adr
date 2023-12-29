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
        <h2 className="about-paragraph">
        We've proudly serviced Edmonton for over 20 years and have recently extended our expertise to include Spruce Grove and Stony Plain. Specializing in top-tier automotive solutions, our focus remains on seamless integration and reliability. Whether it's remote start systems, premium 12-volt accessories like heated seats, or our meticulous automotive window tint and paint protection film services, our installations are crafted to elevate your driving experience.
        </h2>
        <h2 className="about-paragraph">
        Additionally, our commitment to 100% customer satisfaction extends to our top-tier automotive window tint and paint protection film services. With meticulous care, we safeguard your vehicle's appearance, providing UV protection and shielding against scratches and environmental elements. Trust us to enhance your vehicle while prioritizing your satisfaction above all else.
        </h2>
         <h2 className="about-paragraph">
         If you choose to partner with us, you're not just a client but part of our growing family-like customer community. We value each relationship and strive to build lasting connections, ensuring your trust and satisfaction in our services for years to come.
        </h2>
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
