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
        <a className="direct-link" href="tel:17802351114">
          <MdCall className="phone-icon-footer" />1.780.235.1114
        </a>
        <a className="direct-link" href="mailto:edmtintstudio@gmail.com">
          <HiOutlineMail className="phone-icon-footer" />{" "}
          edmtintstudio@gmail.com
        </a>
        <a
          href="https://www.google.com/maps/place/2784+Maple+Way+NW,+Edmonton,+AB+T6T+1J2/data=!4m2!3m1!1s0x53a019d005d78d55:0xcc6bb6266c301108?sa=X&ved=2ahUKEwj5tcjCnpeAAxW_AzQIHbICArgQ8gF6BAgPEAA&ved=2ahUKEwj5tcjCnpeAAxW_AzQIHbICArgQ8gF6BAgSEAI"
          className="direct-link"
          target="_blank"
        >
          <GoLocation className="phone-icon-footer" />  Get Directions
        </a>
      </div>

      <div className="footer-links-container">
        <Link onClick={goToAbout} className="footer-link" to="/about">
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
        </Link>
        <Link onClick={scrollToTop} className="footer-link" to="/careers">
          Careers
        </Link> */}
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
          <a href="https://facebook.com/profile.php?id=61550545973424" target="_blank">
            <ImFacebook className="social-icon" />
          </a>
          <a
            href="https://instagram.com/edmtintstudio?igshid=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <BsInstagram className="social-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@edmontontintstudio"
            target="_blank"
          >
            <FaTiktok className="social-icon" />
          </a>
        </div>
        <h3 className="oleg">Edmonton Tint Studio Ltd. © 2023 All Rights Reserved.</h3>
      </div>
    </div>
  );
};
