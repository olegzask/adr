import React from "react";
import { Link } from "react-router-dom";
import { MdClose, MdCall } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaSms} from "react-icons/fa"
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
        <a href="tel:17802351114" className="calus">
          <MdCall className="phone-icon" /> Contact Us
        </a>
        <a
          href="https://www.google.com/maps/place/2784+Maple+Way+NW,+Edmonton,+AB+T6T+1J2/data=!4m2!3m1!1s0x53a019d005d78d55:0xcc6bb6266c301108?sa=X&ved=2ahUKEwj5tcjCnpeAAxW_AzQIHbICArgQ8gF6BAgPEAA&ved=2ahUKEwj5tcjCnpeAAxW_AzQIHbICArgQ8gF6BAgSEAI"
          className="calus"
          target="_blank"
        >
          <GoLocation className="phone-icon" /> Find Us
        </a>
      </div>
    </div>
  );
}
