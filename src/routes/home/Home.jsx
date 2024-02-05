import React, { useState, useContext, useEffect } from "react";
import ReactPixel from 'react-facebook-pixel';

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

ReactPixel.init('your-pixel-id-goes-here');

export const Home = () => {
  const { clickedOn, path } = useContext(BooleanContext);



  return (
    <div
      id="home"
      className={`home-page-container `}
    >
        <Helmet>
        <title>Adrenalin Audio</title>
        <meta name="description" content="Professional Remote Start, Window Tint & Paint Protection Film installation services in Edmonton." />
      </Helmet>
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
