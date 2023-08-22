import React from "react";
import { ppfOptions } from "../paintprotection/ppfOpts";
import { PpfCard } from "./PpfCard";
import LinkComponent from "../../components/link/LinkComponent";
import { scrollToTop } from "../../components/helperFunctions/helpers";

import "../autotint/autotint.styles.css";
import "./ppf.styles.css";

export default function PaintProtection() {
  return (
    <div className="autotint-main-container">
      <div className="autotint-container">
        <div className="tint-topper">
          <h2 className="service-container-header tint-header ppf-header">
            PAINT <span className="our-services">PROTECTION FILM</span>
          </h2>
          <p className="tint-description">
          Discover the ultimate safeguard for your vehicle's pristine finish with our Paint Protection Film (PPF) solutions. 
          Engineered to shield your car from the rigors of the road, our state-of-the-art PPF offers an invisible armor against rock chips, scratches, and environmental contaminants.
          Our skilled technicians meticulously apply this virtually undetectable layer, ensuring your vehicle's factory paint remains flawless and unblemished. Uncompromising in both form and function, our PPF not only provides unparalleled protection but also enhances your vehicle's aesthetic appeal by preserving its original shine. Whether you're navigating urban streets or embarking on off-road adventures, our premium PPF empowers you to drive with confidence, knowing that your investment is shielded by the pinnacle of automotive defense. Elevate your driving experience and uphold your vehicle's value with our unrivaled Paint Protection Film expertise.
          </p>

          

          
          
          <br />

          <span className="tint-description-lower">
            NOT SURE WHAT COVERAGE YOU WANT? EXPLORE OUR OPTIONS!
          </span>
          <LinkComponent
            opts={{
              name: "BROWSE PACKAGES",
              linkTo: "services/paint-protection-film/packages",
              clName: "tint-btn",
              func:  scrollToTop
            }}
          />
        </div>

        {ppfOptions.map((opt, id) => {
          return <PpfCard key={id} options={opt} />;
        })}
      </div>
    </div>
  );
}
