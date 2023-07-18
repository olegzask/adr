import React, { useState, useContext, useEffect } from "react";
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



  return (
    <div
      id="home"
      className={`home-page-container `}
    >
      <Video />
      <TextVideo />
      <div className="about-section" >
        <About />
       
      </div>
      <div className="services-section" id="ankor">
        <Services />
      </div>
      {/* <Brands /> */}
      <ContactForm  />

    </div>
  );
};
