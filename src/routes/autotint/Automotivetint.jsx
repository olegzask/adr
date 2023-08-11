import React from "react";
import { tintOptions } from "./tintOptions";
import { TintCard } from "./tint-card";

import "./autotint.styles.css";

const Automotivetint = () => {
  return (
    <div className="autotint-main-container">
      <div className="autotint-container">
        <div className="tint-topper">
          <h2 className="service-container-header ppf-header">
            WINDOW <span className="our-services">TINT</span>
          </h2>

          <span className="tint-description">
           Select your custom level of protection with SunTek® automotive tint. Available in shades and hues ranging from rich black to optically clear, SunTek tint improves the look and performance of your vehicle’s window glass.
           From ceramic nanoparticle technology to dyed charcoal construction, SunTek tint can visually enhance your vehicle’s appearance while helping to deliver the solar protection that counts.
           Engineered to reduce glare and protect against harmful UV rays, our high-quality window tints ensure a comfortable driving experience, safeguarding you and your passengers from sun's harsh elements. With a wide range of tinting options, from subtle shades to bold expressions, we guarantee a perfect fit for your car's unique character. Elevate your ride's aesthetics, privacy, and interior preservation with our premium automotive window tinting solutions. Drive cooler, look cooler, and stay protected with us.
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
