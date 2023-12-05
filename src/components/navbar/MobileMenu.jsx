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
  
hideMenu();
setTimeout(() => {
  window.scrollTo(0, 0);
}, 100);


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
        <Link onClick={goToDealer} className="mobile-link" to="/services/dealer-program">
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
          href="https://www.google.ca/maps/dir/53.4970368,-113.4821376/adrenalin+audio/@53.4964131,-113.4850236,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x53a01f4d33973b7b:0x47bceeee593e223!2m2!1d-113.4827597!2d53.4961641?entry=ttu"
          className="calus"
          target="_blank"
        >
          <GoLocation className="phone-icon" /> Edmonton
        </a>
        <a
          href="https://www.google.ca/maps/place/951+Boulder+Blvd+%23201,+Stony+Plain,+AB+T7Z+0E7/@53.550748,-113.988526,17z/data=!3m1!4b1!4m5!3m4!1s0x539f8fd1b2926fd9:0xafa166e10faf7045!8m2!3d53.550748!4d-113.988526?entry=ttu"
          className="calus"
          target="_blank"
        >
          <GoLocation className="phone-icon" /> Spruce Grove / Stony Plain
        </a>
      </div>
    </div>
  );
}
