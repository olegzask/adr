import React from "react";
import {services} from "../../routes/services/servicelist.js"
import { scrollToTop } from "../helperFunctions/helpers";

import { Link } from "react-router-dom";

import "./dropdown.styles.css";

export const Dropdown = () => {

  const servicesHover = () => {
    const [dropMenu] = document.getElementsByClassName("services-dropdown-container");

    !dropMenu.classList.contains("dropdown-active")
      ? dropMenu.classList.add("dropdown-active")
      : dropMenu.classList.remove("dropdown-active");
      scrollToTop();


  };

    

    const goToServices = (e) => {
      const [dropMenu] = document.getElementsByClassName("services-dropdown-container");

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


        
        dropMenu.classList.remove("dropdown-active");

      };


  return (
    <div className="services-dropdown-container" id="nav-dropdown">
        <Link key="all-serv-dd" onClick={goToServices} className="nav-link" to="/">
            All Services
          </Link>
      {services.map((service, id) => {
        return (
            <Link key={id} onClick={servicesHover} className="nav-link" to={`/${service.link}`}>
            {service.name}
          </Link>
        );
      })}
    </div>
  );
};
