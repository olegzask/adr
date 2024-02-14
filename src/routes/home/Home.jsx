import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BooleanContext } from "../../store";
import Video from "../../components/video/Video";
import TextVideo from "../../components/textonvideo/TextVideo";
import LinkComponent from "../../components/link/LinkComponent";
import About from "../../components/about/About";
import Services from "../services/Services";
import Brands from "../../components/brands/Brands";
import { ContactForm } from "../../components/contactform/ContactForm";
import "./home.styles.css";


export const Home = () => {
  const { clickedOn, path } = useContext(BooleanContext);

  const goToServices = (e) => {
    setTimeout(
      () => {
        const servicesEl = document.getElementById("ankor");
        servicesEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      },

      100
    );

  };




  return (
    <div
      id="home"
      className={`home-page-container `}
    >
        <Helmet>
        <title>Adrenalin Audio | Window Tint | Paint Protection | Remote Start</title>
        <meta name="description" content="Professional Remote Start, Window Tint & Paint Protection Film installation services in Edmonton." />
      </Helmet>
      <Video />
      {/* <TextVideo /> */}
      <div className="text-on-video">
      <div className="text-top">
        <h1 className="text-header hdr-tint">REMOTE START & 12V ACCESSORIES</h1>
        <h2 className="text-header hdr-ppf">WINDOW TINT & PAINT PROTECTION</h2>
        <h2 className="text-header done-right">SERVICES IN EDMONTON DONE RIGHT.</h2>
      </div>

      <div className="text-bottom">
        <h3 className="text-main">
          Over 20 Years of Experience. Let us take care of
          your vehicle.
        </h3>
      </div>
      <LinkComponent
        opts={{
          name: "BROWSE OUR SERVICES",
          linkTo: "",
          clName: "texton-video",
          func: goToServices,
        }}
      />
    </div>



      <div className="about-section" id="ankor-3">
        {/* <About /> */}

        <h2  className="service-container-header">
      WHO WE ARE
      </h2>
     
      <div className="about-bottom-text">
        <h3 className="about-paragraph">
        We've proudly serviced Edmonton for over 20 years and have recently extended our expertise to include Spruce Grove and Stony Plain. Specializing in top-tier automotive solutions, our focus remains on seamless integration and reliability. Whether it's remote start systems, premium 12-volt accessories like heated seats, or our meticulous automotive window tint and paint protection film services, our installations are crafted to elevate your driving experience.
        </h3>
        <br/>
        <br/>

        <h3 className="about-paragraph">
        Additionally, our commitment to 100% customer satisfaction extends to our top-tier automotive window tint and paint protection film services. With meticulous care, we safeguard your vehicle's appearance, providing UV protection and shielding against scratches and environmental elements. Trust us to enhance your vehicle while prioritizing your satisfaction above all else.
        </h3>
        <br/>
        <br/>

         <h3 className="about-paragraph">
         If you choose to partner with us, you're not just a client but part of our growing family-like customer community. We value each relationship and strive to build lasting connections, ensuring your trust and satisfaction in our services for years to come.
        </h3>
      </div>
       
      </div>

      <div className="services-section" id="ankor">
        <Services />
      </div>
      {/* <Brands /> */}
      <ContactForm  />

    </div>
  );
};
