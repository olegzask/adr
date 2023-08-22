import React from "react";
import CarAudioCard from "./CarAudioCard";
import { carAudioProducts } from "./caraudioproducts";

export default function PpfPacks() {
  return (
    <div className="accessories-container">
      <div className="rs-main-container dashcams-main-container">
        <div className="rs-container">
          <div className="rs-topper">
            <h2 className="service-container-header tint-header rs-serv-header">
              EDMONTON PAINT PROTECTION FILM <span className="our-services"> PACKAGES</span>
            </h2>

            <span className="rs-description">
            Welcome to Edmonton Tint Studio, your destination for top-tier automotive care. Discover our exclusive Edmonton Paint Protection Film packages, meticulously designed to shield your vehicle's exterior from the elements. Our selection offers a variety of coverage options, from full-body protection to targeted high-impact areas. With our cutting-edge technology and expert installation, your vehicle will be equipped to brave Edmonton's diverse conditions while maintaining its flawless appearance. Explore our Paint Protection Film packages today to elevate your driving experience and ensure your vehicle's long-lasting allure.
            </span>
            <br />

            {/* <h2 className="rs-description-lower">
             WANT TO CUSTOMIZE YOUR COVERAGE? PLEASE CONTACT US FOR PERSONAL QUOTE!
            </h2> */}
          </div>
          {carAudioProducts.map((remote, id) => (
            <CarAudioCard key={id} options={remote} />
          ))}
        </div>
      </div>
    </div>
  );
}
