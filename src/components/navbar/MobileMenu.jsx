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

  const goToCareers = (e) => {
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
        <Link onClick={goToCareers} className="mobile-link" to="/careers">
          Careers
        </Link>
        <Link onClick={goToContact} className="mobile-link" to="/">
          Contact
        </Link>
      </div>
      <div className="lower-nav">
        <a href="tel:17804409438" className="calus">
          <MdCall className="phone-icon" /> Contact Us
        </a>
        <a
          href="https://www.google.ca/maps/uv?pb=!1s0x53a01f4d33973b7b%3A0x47bceeee593e223!3m1!7e115!4s%2Fmaps%2Fplace%2FAdrenalin%2Baudio%2F%4053.4957924%2C-113.4829247%2C3a%2C75y%2C14.79h%2C90t%2Fdata%3D*213m4*211e1*213m2*211smBMUl4B1fUBBpU6bWgae-w*212e0*214m2*213m1*211s0x53a01f4d33973b7b%3A0x47bceeee593e223%3Fsa%3DX%26ved%3D2ahUKEwitm5zrie-CAxWDFjQIHbOQAqIQpx96BAg6EAA!5sAdrenalin%20audio%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2smBMUl4B1fUBBpU6bWgae-w&hl=en&sa=X&ved=2ahUKEwitm5zrie-CAxWDFjQIHbOQAqIQpx96BAhQEA0"
          className="calus"
          target="_blank"
        >
          <GoLocation className="phone-icon" /> Edmonton
        </a>
        <a
          href="https://www.google.ca/maps/uv?pb=!1s0x53a01f4d33973b7b%3A0x47bceeee593e223!3m1!7e115!4s%2Fmaps%2Fplace%2FAdrenalin%2Baudio%2F%4053.4957924%2C-113.4829247%2C3a%2C75y%2C14.79h%2C90t%2Fdata%3D*213m4*211e1*213m2*211smBMUl4B1fUBBpU6bWgae-w*212e0*214m2*213m1*211s0x53a01f4d33973b7b%3A0x47bceeee593e223%3Fsa%3DX%26ved%3D2ahUKEwitm5zrie-CAxWDFjQIHbOQAqIQpx96BAg6EAA!5sAdrenalin%20audio%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2smBMUl4B1fUBBpU6bWgae-w&hl=en&sa=X&ved=2ahUKEwitm5zrie-CAxWDFjQIHbOQAqIQpx96BAhQEA0"
          className="calus"
          target="_blank"
        >
          <GoLocation className="phone-icon" /> Spruce Grove / Stony Plain
        </a>
      </div>
    </div>
  );
}
