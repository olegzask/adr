import React, { useState } from "react";
import BookingTint from "./BookingTint";
import LinkComponent from "../../components/link/LinkComponent";
import { scrollToTop } from "../../components/helperFunctions/helpers";

import "./tint-card.styles.css";

export const TintCard = ({ options }) => {
  const { tintType, description, shades, features, img } = options;

  const [modal, setModal] = useState(false);
  const showModal = (e) => {
    setModal(true);
  };

  return (
    <div className="card-container">
      <div className="tint-card-left">
        <h2 className="card-header">{tintType}</h2>
        <img className="card-img" src={img} alt="window-tint-image" />

        {description.map((el, id) => (
                <p className="card-description">- {el}</p>

      ))}
        <div className="shades-ctn">
          {shades ? (
            <h2 className="shade-header">SHADES AVAILABLE:</h2>
          ) : null}

          {shades ? (
            <span className="tint-shades">
              {shades.map((shade, id) =>
                id < shades.length - 1 ? `${shade}  /  ` : `${shade}`
              )}
            </span>
          ) : null}
        </div>

        <div className="btns-container">
          <LinkComponent
            opts={{
              name: "SIMULATOR",
              linkTo: "simulator",
              clName: "tint-btn",
              func: scrollToTop
            }}
          />
               <LinkComponent
            opts={{
              name: "BROWSE PACKAGES",
              linkTo: "services/window-tint/tint-packages",
              clName: "tint-btn",
              func:  scrollToTop
            }}
          />
          {!modal ? null : (
            <BookingTint opts={{ rem: `Tint: ${tintType}`, txt: "Service", reset: setModal }} />
          )}
          {/* <button onClick={showModal} className="remote-btn">
            REQUEST PRICE
          </button> */}
        </div>
      </div>

      <div className="tint-card-right">
        <h2 className="features-header">SIGNATURE FEATURES</h2>
        <div className="features-list">
          {features.map((feat, id) => {
            const { symbol, description, name } = feat;

            return (
              <div key={id} className="feature-g">
                <h3 className="feat-name">{name}</h3>

                <div className="feat-container-g">
                  <div className="feature-icon">{symbol}</div>
                  <p className="feat-description">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
