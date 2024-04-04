import React, { useState } from "react";
import { Link } from "react-router-dom";
import Booking from "../remotestart/Booking";
import LinkComponent from "../../components/link/LinkComponent";
import "../autotint/tint-card.styles.css";
import { scrollToTop } from "../../components/helperFunctions/helpers";

export const PpfCard = ({ options }) => {
  const { tintType, description, shades, features, img } = options;

  const [modal, setModal] = useState(false);
  const showModal = (e) => {
    setModal(true);
  };


  return (
    <div className="card-container">
      <div className="tint-card-left">
        <h2 className="card-header">{tintType}</h2>
        <img className="card-img" src={img} alt="xpel-paint-protection-film-image" />
        {description.map((el, id) => (
                        <p className="card-description">- {el}</p>


      ))}
        {/* <span className="card-description">{description}</span> */}
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
              linkTo: "tint-ppf-simulator",
              clName: "tint-btn",
              func:  scrollToTop
            }}
          />
          {!modal ? null : (
            <Booking opts={{ rem: "PPF", txt: "Service", reset: setModal }} />
          )}
          <Link onClick={scrollToTop} to="packages">
          <button onClick={showModal} className="remote-btn">
            BROWSE PACKAGES
          </button>
          </Link>
         
        
        
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
