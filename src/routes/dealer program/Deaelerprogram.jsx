import React from "react";
import LinkComponent from "../../components/link/LinkComponent";
import { tintOptions } from "./tintOptions";
import { TintCard } from "./tint-card";
import { scrollToTop } from "../../components/helperFunctions/helpers";

import "./autotint.styles.css";

const Automotivetint = () => {
  return (
    <div className="autotint-main-container">
      <div className="autotint-container">
        <div className="tint-topper">
          <h2 className="service-container-header ppf-header">
            DEALER <span className="our-services">PROGRAM</span>
          </h2>

          <span className="tint-description dealer-descr">
          Introducing our dealership program tailored exclusively for automotive dealerships seeking premium window tint and paint protection film installation services.
          </span>
          <span className="tint-description dealer-descr">
          As an authorized partner, you'll gain access to our specialized expertise and industry-leading solutions, allowing you to offer enhanced vehicle aesthetics and protection to your valued customers.
          </span>
          
          <br />

          <span className="tint-description-lower">
            LET'S EXPLORE BENEFITS OF OUR DEALERSHIP PROGRAM!
          </span>
          
          <LinkComponent
            opts={{
              name: "BROWSE DEALER PRICING",
              linkTo: "services/dealer-program/pricelist",
              clName: "tint-btn",
              func: scrollToTop
            }}
          />
         
        
        </div>

        {tintOptions.map((opt, id) => {
          return <TintCard key={id} options={opt} />;
        })}
      </div>
    </div>
  );
};
export default Automotivetint;
