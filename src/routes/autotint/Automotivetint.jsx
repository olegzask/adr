import React from "react";
import { Helmet } from "react-helmet";
import LinkComponent from "../../components/link/LinkComponent";
import { scrollToTop } from "../../components/helperFunctions/helpers";
import { tintOptions } from "./tintOptions";
import { TintCard } from "./tint-card";
// import { TintPackages } from "./TintPacks";

import "./remotestart.styles.css";

const Automotivetint = () => {
  return (
    <div className="rs-main-container dashcams-main-container tint-packs-cont">
        <Helmet>
        <title>Window Tinting Edmonton | Adrenalin Audio</title>
        <meta name="description" content="Professional Window tinting services in Edmonton. XPEL Prime CS & Prime XR films. Best prices guaranteed." />
      </Helmet>

      <div className="rs-container">
      <h1 className="service-container-header  rs-serv-header">
            WINDOW TINTING EDMONTON
          </h1>
        <div className="rs-topper rs-topper-tint">
          

          <div className="rs-topper-left">
        

          <p className="rs-description">
          
Explore our premium XPEL automotive window tinting services in Edmonton, Spruce Grove, and Stony Plain, where we cater to your preferences by offering both carbon and ceramic films. These high-quality XPEL films are designed to meet diverse needs while enhancing your driving experience. Our selection ensures that whether you prioritize heat reduction, UV protection, or maintaining your vehicle's aesthetics, we have the perfect tint for you.
          </p>
          <br />
          <br />

          <p className="rs-description">
          
          Automotive XPEL window tint isn't just about style, it's a smart choice for various reasons. Our films provide crucial UV protection, safeguarding you and your vehicle's interior from harmful rays that can cause fading and damage. Moreover, they significantly reduce heat, creating a more comfortable driving environment, especially during hot summers. The added privacy and glare reduction also contribute to a safer and more enjoyable ride. With our commitment to quality and tailored options, our window tint services offer not just style, but also protection and comfort for your vehicle.
                    </p>
          <br />


          <h3 className="rs-description-lower">
            NOT SURE WHAT KIND OF WINDOW TINT YOU NEED? EXPLORE OUR OPTIONS!
          </h3>
          <LinkComponent
            opts={{
              name: "BROWSE PACKAGES",
              linkTo: "services/window-tinting-edmonton/tint-packages",
              clName: "tint-btn titpack",
              func:  scrollToTop
            }}
          />


          </div>

          <div className="rs-topper-right">
          <img className="card-img tnt-img" src="/images/services-images/tint-color-orig.jpg" alt="windowt inting services edmonton" />
          {/* <img className="card-img xpel-logo" src="/logos/xpel-logo.jpg" alt="xpel-window-tinting-edmonton" /> */}


            
            </div>

        </div>

        {tintOptions.map((opt, id) => {
          return <TintCard key={id} options={opt} />;
        })}
      </div>
      {/* <TintPackages /> */}
    </div>
  );
};
export default Automotivetint;
