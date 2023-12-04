import React from "react";
import { allAccessories } from "./accessories";
import DashcamCard from "../dashcams/DashcamCard";
import AccessoryCard from "./AccessoryCard";

export default function Accessories() {
  return (
    <div className="rs-main-container dashcams-main-container">
      <div className="rs-container">
      <div className="rs-topper">
          <h1 className="service-container-header rs-serv-header">
            12V <span className="our-services">ACCESSORIES</span>
          </h1>

          <span className="rs-description">
          
          At Adrenalin Audio, we specialize in enhancing your driving experience with top-notch 12-volt accessories. From luxurious heated seats for comfort to high-definition backup cameras and immersive DVD players, our range of premium accessories transforms your vehicle into a haven of convenience and entertainment.
          </span>
          <br />
          <br/>
          <span className="rs-description">
          
          With expert installation and quality products, trust Adrenalin Audio to elevate your ride. Upgrade your vehicle today for a more comfortable and enjoyable journey.
                    </span>
          <br />


          <span className="rs-description-lower">
            NOT SURE WHAT KIND OF ACCESSORIES YOU NEED? EXPLORE OUR OPTIONS!
          </span>
        </div>
        
      
          {allAccessories.map((remote, id) => (
            <AccessoryCard key={id} options={remote} />
          ))}
        
      </div>
    </div>
  );
}
