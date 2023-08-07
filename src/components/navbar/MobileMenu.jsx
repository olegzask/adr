import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { scrollToTop } from "../helperFunctions/helpers";
import "./mobileMenu.styles.css";

export default function MobileMenu() {
  const hideMenu = (e) => {
    const menu = document.getElementById("mobile");
    const closeBtn = document.getElementById("mobile-close");
    if (!menu.classList.contains("hide")) {
      menu.classList.add("hide");
    } else {
      menu.classList.remove("hide");
    }
  };
  

  const goToServices = (e) => {
    setTimeout(
      () => {
        const servicesEl = document.getElementById("ankor");
        servicesEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
  
hideMenu();
      },

      100
    );
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
hideMenu();

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
hideMenu();

      },

      100
    );

  };

  const goToSimulator = (e) => {
   scrollToTop();
   hideMenu();

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
hideMenu();

      },

      100
    );

  };


  
  return (
    <div id="mobile" className="mobile-menu-container">
      <MdClose
        id="mobile-close"
        onClick={hideMenu}
        className="mobile-close-button"
      />

      <div className="mobile-link-container">
        <Link onClick={goToAbout} className="mobile-link" to="/">
          About
        </Link>
        <Link onClick={goToServices} className="mobile-link" to="/">
          Services
        </Link>
        <Link onClick={goToSimulator} className="mobile-link" to="/simulator">
          Simulator
        </Link>
        {/* <Link onClick={hideMenu} className="mobile-link" to="/sales">
          Sales
        </Link> */}
        <Link onClick={goToDealer} className="mobile-link" to="/">
          Dealer Program
        </Link>
        <Link onClick={goToContact} className="mobile-link" to="/">
          Contact
        </Link>
      </div>
      <div className="lower-nav">
        <a href="tel:17804409438" className="calus">
          <FiPhoneCall className="phone-icon" /> Call Us
        </a>
        <a
          href="https://www.google.com/maps/place/Adrenalin+Audio+%2F+Remote+Starters,+Window+Tint+and+Film+Protection/@53.4961639,-113.4827581,15z/data=!4m5!3m4!1s0x0:0x47bceeee593e223!8m2!3d53.4961639!4d-113.4827581?hl=en"
          className="calus"
          target="_blank"
        >
          <GoLocation className="phone-icon" /> Find Us
        </a>
      </div>
    </div>
  );
}
