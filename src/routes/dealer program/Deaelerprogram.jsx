import React from "react";
import { Helmet } from "react-helmet";
import { HelmetData } from "react-helmet";
import LinkComponent from "../../components/link/LinkComponent";
import { tintOptions } from "./tintOptions";
import { TintCard } from "./tint-card";
import { scrollToTop } from "../../components/helperFunctions/helpers";

import "./autotint.styles.css";

const Automotivetint = () => {
  return (
    <div className="rs-main-container dashcams-main-container">
        <Helmet>
        <title>Dealer Program | Adrenalin Audio</title>
        <meta name="description" content="Dealer program for Remote Start, Window Tint, Paint Protection Film services in Edmonton" />
      </Helmet>

      <div className="rs-container">
        <div className="rs-topper">
          <h1 className="service-container-header  rs-serv-header">
            DEALER PROGRAM
          </h1>

          <span className="rs-description">
          Introducing our dealership program tailored exclusively for automotive dealerships in Edmonton & surrounding areas seeking premium remote start, window tint, paint protection film & 12 volt accessories installation services.
          </span>
          <br/>
          <br/>

          <span className="rs-description">
          As an authorized partner, you'll gain access to our specialized expertise and industry-leading solutions, allowing you to offer enhanced vehicle aesthetics and protection to your valued customers.
          </span>
          
          <br />

          <span className="rs-description-lower">
           PARTNER WITH EDMONTON'S BEST EXPERTS & EXPLORE BENEFITS OF OUR DEALERSHIP PROGRAM!
          </span>

          <div className="linkec-cont">
          <LinkComponent
            opts={{
              name: "BROWSE DEALER PRICING",
              linkTo: "services/dealer-program/pricelist",
              clName: "tint-btn",
              func: scrollToTop
            }}
          />
            </div>
          
          
         
        
        </div>

        {tintOptions.map((opt, id) => {
          return <TintCard key={id} options={opt} />;
        })}
      </div>
    </div>
  );
};
export default Automotivetint;
