import React, { useState } from "react";
import Booking from "../remotestart/Booking";
import LinkComponent from "../../components/link/LinkComponent";
import "./tint-card.styles.css";

export const TintCard = ({ options }) => {
  const { tintType, description, shades, features, img } = options;

  const [modal, setModal] = useState(false);
  const showModal = (e) => {
    setModal(true);
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

  return (
    <div className="card-container">
      <div className="tint-card-left">
        <h2 className="card-header">{tintType}</h2>
        <img className="card-img" src={img} alt="" />
        {description.map((el, id) => (
                <span className="card-description">- {el}</span>

      ))}

        <div className="btns-container">
          <LinkComponent
            opts={{
              name: "GET IN TOUCH ",
              linkTo: "",
              clName: "tint-btn",
              func: goToContact
            }}
          />
         
        </div>
      </div>

      <div className="tint-card-right">
        <h2 className="features-header">SIGNATURE FEATURES</h2>
        <div className="features-list">
          {features.map((feat, id) => {
            const { symbol, description, name } = feat;

            return (
              <div key={id} className="feature-g">
                <header className="feat-name">{name}</header>

                <div className="feat-container-g">
                  <div className="feature-icon">{symbol}</div>
                  <span className="feat-description">{description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
