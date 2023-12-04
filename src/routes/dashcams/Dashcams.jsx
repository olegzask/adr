import React from "react";
import DashcamCard from "./DashcamCard.jsx";
import { dashcams } from "./dashcamlist";
import "./dashcams.styles.css";

export default function Dashcams() {
  const scrollToRemote = (e) => {
    const idToFind = e.target.innerHTML;
    const goodEl = document.getElementById(idToFind);
    goodEl.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <div className="rs-main-container dashcams-main-container">
      <div className="rs-container">
        <div className="rs-topper">
          <h2 className="service-container-header tint-header rs-serv-header">
            DASH <span className="our-services">CAMERAS</span>
          </h2>
          <span className="rs-description">
          Dash cameras from Adrenalin Audio provide an essential layer of protection for your vehicle. Offering real-time evidence in accidents, theft deterrence, and surveillance capabilities, our expertly installed dash cameras enhance safety and accountability on the road. With seamless integration and premium features, trust Adrenalin Audio for reliable dash camera installations that safeguard your journeys. Contact us today for a safer driving experience.
          </span>
          <br/>

          <h2 className="rs-description-lower">
            NOT SURE WHAT KIND OF DASH CAMERA YOU NEED? EXPLORE OUR OPTIONS!
          </h2>
        </div>
        {dashcams.map((remote, id) => (
          <DashcamCard key={id} options={remote} />
        ))}
      </div>
    </div>
  );
}
