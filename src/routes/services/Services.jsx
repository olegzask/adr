import React, { useContext } from "react";
import { BooleanContext } from "../../store.js";
import { services } from "./servicelist.js";
import ServiceCard from "./ServiceCard";
import "./services.styles.css";

export default function Services() {
  const { clickedOn } = useContext(BooleanContext);

  const scrollToRemote = (e) => {
    const idToFind = e.target.name;
    const goodEl = document.getElementById(idToFind);
    goodEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div
      id="services-el"
      className={`services-container ${clickedOn ? "gotme" : null}`}
    >
      <h2 id="huevo" className="service-container-header">
        OUR <span className="our-services">SERVICES</span>
      </h2>
      {/* <div className="ql-dealer">
              <button name="ppf" className="quick-link-dealer" onClick={scrollToRemote}>
                REMOTE START
              </button>
              <button name="tint" className="quick-link-dealer" onClick={scrollToRemote}>
                WINDOW TINT
              </button>

              <button name="remote" className="quick-link-dealer" onClick={scrollToRemote}>
               PAINT PROTECTION
              </button>
              <button name="remote" className="quick-link-dealer" onClick={scrollToRemote}>
               AUDIO/VIDEO
              </button>
              <button name="remote" className="quick-link-dealer" onClick={scrollToRemote}>
               MARINE
              </button>
              <button name="remote" className="quick-link-dealer" onClick={scrollToRemote}>
               ACCESSORIES
              </button>
              <button name="remote" className="quick-link-dealer" onClick={scrollToRemote}>
               DEALER
              </button>
             
            </div> */}
      {services.map((serv, id) => (
        <ServiceCard key={id} opts={serv} />
      ))}
    </div>
  );
}
