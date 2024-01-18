import React from "react";
import { Helmet } from "react-helmet";
import LinkComponent from "../../components/link/LinkComponent";
import { scrollToTop } from "../../components/helperFunctions/helpers";
import { PpfCard } from "./PpfCard";
import {ppfOptions} from "./ppfOpts"

import "../autotint/autotint.styles.css";
import "./ppf.styles.css";

export default function PaintProtection() {
  return (
    <div className="rs-main-container dashcams-main-container">
        <Helmet>
        <title>Paint Protection Film | Adrenalin Audio</title>
        <meta name="description" content="XPEL Paint Protection Film installation services in Edmonton. Choose your coverage." />
      </Helmet>

      <div className="rs-container">
        <div className="rs-topper">
          <h1 className="service-container-header  rs-serv-header">
           PAINT PROTECTION FILM
          </h1>
          <p className="rs-description">
          Discover the ultimate safeguard for your vehicle's pristine finish with our Paint Protection Film (PPF) solutions, now available in Edmonton, Spruce Grove, and Stony Plain. Engineered to shield your car from the rigors of the road, our state-of-the-art PPF offers an invisible armor against rock chips, scratches, and environmental contaminants. Our skilled technicians meticulously apply this virtually undetectable layer, ensuring your vehicle's factory paint remains flawless and unblemished. 
          </p>

          <br/>

          <p className="rs-description">
          Uncompromising in both form and function, our PPF not only provides unparalleled protection but also enhances your vehicle's aesthetic appeal by preserving its original shine. Whether you're navigating urban streets or embarking on off-road adventures, our premium PPF empowers you to drive with confidence, knowing that your investment is shielded by the pinnacle of automotive defense. Elevate your driving experience and uphold your vehicle's value with our unrivaled Paint Protection Film expertise.
          </p>

          
          
          <br />

          <span className="rs-description-lower">
            NOT SURE WHAT COVERAGE YOU WANT? EXPLORE OUR OPTIONS!
          </span>
          <div className="linkec-cont">
          <LinkComponent
            opts={{
              name: "BROWSE PACKAGES",
              linkTo: "services/paint-protection-film/packages",
              clName: "tint-btn",
              func:  scrollToTop
            }}
          />
          </div>
         
        </div>

        {ppfOptions.map((opt, id) => {
          return <PpfCard key={id} options={opt} />;
        })}
      </div>
    </div>
  );
}
