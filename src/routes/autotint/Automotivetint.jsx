import React from "react";
import { tintOptions } from "./tintOptions";
import { TintCard } from "./tint-card";

import "./autotint.styles.css";

const Automotivetint = () => {
  return (
    <div className="autotint-main-container">
      <div className="autotint-container">
        <div className="tint-topper">
          <h1 className="service-container-header ppf-header tnt">
            EDMONTON WINDOW <span className="our-services">TINT</span>
          </h1>

          <span className="tint-description">
          
Explore our premium automotive window tint services in Edmonton, Spruce Grove, and Stony Plain, where we cater to your preferences by offering both carbon and ceramic films. These high-quality films are designed to meet diverse needs while enhancing your driving experience. Our selection ensures that whether you prioritize heat reduction, UV protection, or maintaining your vehicle's aesthetics, we have the perfect tint for you.
          </span>
          <br />
          <span className="tint-description">
          
          Automotive window tint isn't just about style, it's a smart choice for various reasons. Our films provide crucial UV protection, safeguarding you and your vehicle's interior from harmful rays that can cause fading and damage. Moreover, they significantly reduce heat, creating a more comfortable driving environment, especially during hot summers. The added privacy and glare reduction also contribute to a safer and more enjoyable ride. With our commitment to quality and tailored options, our window tint services offer not just style, but also protection and comfort for your vehicle.
                    </span>
          <br />


          <span className="tint-description-lower">
            NOT SURE WHAT KIND OF WINDOW FILM YOU NEED? EXPLORE OUR OPTIONS!
          </span>
        </div>

        {tintOptions.map((opt, id) => {
          return <TintCard key={id} options={opt} />;
        })}
      </div>
    </div>
  );
};
export default Automotivetint;
