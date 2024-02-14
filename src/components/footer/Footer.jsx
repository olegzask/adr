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
          <h3 className="have-question">Got a Question? </h3>
          <h3 className="ask-us-anything">We are here to help.</h3>
        </span>
        <a className="direct-link" href="tel:17804409438">
          <MdCall className="phone-icon-footer" />1.780.440.9438
        </a>
        <a className="direct-link" href="mailto:info@adrenalinaudio.com">
          <HiOutlineMail className="phone-icon-footer" />{" "}
          info@adrenalinaudio.com
        </a>
        <a
          href="https://www.google.ca/maps/dir/53.4970368,-113.4821376/adrenalin+audio/@53.4964131,-113.4850236,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x53a01f4d33973b7b:0x47bceeee593e223!2m2!1d-113.4827597!2d53.4961641?entry=ttu"
          className="direct-link"
          target="_blank"
        >
          <GoLocation className="phone-icon-footer" />  Edmonton
        </a>
        <a
          href="https://www.google.ca/maps/place/951+Boulder+Blvd+%23201,+Stony+Plain,+AB+T7Z+0E7/@53.550748,-113.988526,17z/data=!3m1!4b1!4m5!3m4!1s0x539f8fd1b2926fd9:0xafa166e10faf7045!8m2!3d53.550748!4d-113.988526?entry=ttu"
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
        <Link onClick={scrollToTop} className="footer-link" to="/faq">
          FAQ
        </Link>
        <Link onClick={scrollToTop} className="footer-link" to="/financing">
          Financing
        </Link>
        <Link onClick={scrollToTop} className="footer-link" to="/careers">
          Careers
        </Link>
        <Link onClick={goToContact} className="footer-link" to="/">
          Contact
        </Link>
      </div>

      <div className="footer-bottom">
        <div className="footer-address">

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
            href="https://www.tiktok.com/@adrenalin.audio"
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
