import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooleanContext } from "../../store";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { FaSms, FaTiktok} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
import {MdCall} from "react-icons/md"
import { scrollToTop } from "../helperFunctions/helpers";

import "./footer.styles.css";

export const Footer = () => {
  const { clickedOn } = useContext(BooleanContext);

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

      const goToAbout = (e) => {
    setTimeout(
      () => {
        const servicesEl = document.getElementById("ankor-3");
        servicesEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      },

      100
    );

  };


  };

  const goToAbout = (e) => {
    setTimeout(
      () => {
        const servicesEl = document.getElementById("ankor-3");
        servicesEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      },

      100
    );

  };


  const goToContact = (e) => {
    setTimeout(
      () => {
        const servicesEl = document.getElementById("ankor-2");
        servicesEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      },

      100
    );

  };

  const goToDealer = (e) => {
    setTimeout(
      () => {
        const servicesEl = document.getElementById("dp");
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
      id="footer"
      className={`footer-container `}
    >
      <div className="footer-left-side">
        <span className="direct-contact-container">
          <span className="have-question">Got a Question? </span>
          <span className="ask-us-anything">We are here to help.</span>
        </span>
        <a className="direct-link" href="tel:17804409438">
          <MdCall className="phone-icon-footer" />1.780.440.9438
        </a>
        <a className="direct-link" href="mailto:info@adrenalinaudio.com">
          <HiOutlineMail className="phone-icon-footer" />{" "}
          info@adrenalinaudio.com
        </a>
        <a
          href="https://www.google.ca/maps/uv?pb=!1s0x53a01f4d33973b7b%3A0x47bceeee593e223!3m1!7e115!4s%2Fmaps%2Fplace%2FAdrenalin%2Baudio%2F%4053.4957924%2C-113.4829247%2C3a%2C75y%2C14.79h%2C90t%2Fdata%3D*213m4*211e1*213m2*211smBMUl4B1fUBBpU6bWgae-w*212e0*214m2*213m1*211s0x53a01f4d33973b7b%3A0x47bceeee593e223%3Fsa%3DX%26ved%3D2ahUKEwitm5zrie-CAxWDFjQIHbOQAqIQpx96BAg6EAA!5sAdrenalin%20audio%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2smBMUl4B1fUBBpU6bWgae-w&hl=en&sa=X&ved=2ahUKEwitm5zrie-CAxWDFjQIHbOQAqIQpx96BAhQEA0"
          className="direct-link"
          target="_blank"
        >
          <GoLocation className="phone-icon-footer" />  Edmonton
        </a>
        <a
          href="https://www.google.ca/maps/uv?pb=!1s0x53a01f4d33973b7b%3A0x47bceeee593e223!3m1!7e115!4s%2Fmaps%2Fplace%2FAdrenalin%2Baudio%2F%4053.4957924%2C-113.4829247%2C3a%2C75y%2C14.79h%2C90t%2Fdata%3D*213m4*211e1*213m2*211smBMUl4B1fUBBpU6bWgae-w*212e0*214m2*213m1*211s0x53a01f4d33973b7b%3A0x47bceeee593e223%3Fsa%3DX%26ved%3D2ahUKEwitm5zrie-CAxWDFjQIHbOQAqIQpx96BAg6EAA!5sAdrenalin%20audio%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2smBMUl4B1fUBBpU6bWgae-w&hl=en&sa=X&ved=2ahUKEwitm5zrie-CAxWDFjQIHbOQAqIQpx96BAhQEA0"
          className="direct-link"
          target="_blank"
        >
          <GoLocation className="phone-icon-footer" />  Spruce Grove / Stony Plain
        </a>
      </div>

      <div className="footer-links-container">
        <Link onClick={goToAbout} className="footer-link" to="/">
          About
        </Link>
        <Link onClick={goToServices} className="footer-link" to="/">
          Services
        </Link>
        <Link onClick={goToDealer} className="footer-link" to="/">
          Dealer Program
        </Link>
        <Link onClick={scrollToTop} className="footer-link" to="/simulator">
          Simulator
        </Link>
        {/* <Link onClick={scrollToTop} className="footer-link" to="/sales">
          Sales
        </Link> */}
        <Link onClick={scrollToTop} className="footer-link" to="/careers">
          Careers
        </Link>
        <Link onClick={goToContact} className="footer-link" to="/">
          Contact
        </Link>
      </div>

      <div className="footer-bottom">
        <div className="footer-address">
          {/* <a
            target="_blank"
            className="footer-address"
            href="https://www.google.com/maps/place/Adrenalin+Audio+%2F+Remote+Starters,+Window+Tint+and+Film+Protection/@53.4961639,-113.4827581,15z/data=!4m5!3m4!1s0x0:0x47bceeee593e223!8m2!3d53.4961639!4d-113.4827581?hl=en"
          >
            <b>HQ </b>- 2784 Maple Way NW Edmonton Alberta Canada T6T 2P1
          </a> */}
        </div>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/adrenalinaudio/" target="_blank">
            <ImFacebook className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/adrenalin_audio/"
            target="_blank"
          >
            <BsInstagram className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/adrenalin_audio/"
            target="_blank"
          >
            <FaTiktok className="social-icon" />
          </a>
        </div>
        <h3 className="oleg">Adrenalin Audio Inc. © 2023 All Rights Reserved.</h3>
      </div>
    </div>
  );
};
