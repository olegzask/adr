import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Booking from "../remotestart/Booking";
import { scrollToTop } from "../../components/helperFunctions/helpers";
import { carAudioProducts } from "./caraudioproducts";
import { BooleanContext } from "../../store";
import "./ppfcard.styles.css"

export default function CarAudioCard({ options }) {
  const { setActiveProduct } = useContext(BooleanContext);
  const [remoteModel, setModel] = useState();

  const [modal, setModal] = useState(false);
  const showModal = (e) => {
    setModal(true);
  };


  const toggleActiveProduct = (e) => {
    const clickedProductId = e.target.closest(".remote-card-container").id;
    const properProduct = carAudioProducts.find(
      (el) => el.model === clickedProductId
    );
    setActiveProduct(properProduct);
  };

  const showModel = (e) => {
    const parentCont = e.target.closest(".remote-card-container");
    const arr = Array.from(parentCont.children)[1];
    const newArr = Array.from(arr.children)[0];
    const remModel = Array.from(newArr.children)[0].innerHTML;
    setModel(remModel + "");
  };

  const {
    model,
    type,
    brand,
    moreInfo,
    description,
    images,
    brandLogo,
    features,
    imgColor,
    range,
  } = options;

  return (
    <div id={model} className="remote-card-container">
      <div className="top-logos-container">
        {/* <img
          className="brand-logo brnd"
          src="/logos/edm_3.png"
          alt="adrenalin-logo"
        /> */}
        <img className="brand-logo" src={brandLogo} alt="brand-logo" />
      </div>

      <div className="model-range-container">
        <h2 className="remote-model">
          <span className="model mdl">{model.toUpperCase()}</span>
        </h2>
      </div>

      <div className="img-feat-container">
        <img className="remote-img" src={imgColor} alt="remote-img" />
        <div className="feat-container">
          {features.map((feat, id) => (
            <h2 key={id} className="feature">
              {feat.symbol} {feat.name}
            </h2>
          ))}
        </div>
      </div>

      <div className="links-container">
      {!modal ? null : (
            <Booking opts={{ rem: "PPF-" + model.toUpperCase(), txt: "Service", reset: setModal }} />
          )}
      <button onClick={showModal} className="remote-btn">
          REQUEST INFO
        </button>

        <Link onClick={scrollToTop} to={model}>
          <button onClick={toggleActiveProduct} className="remote-btn">
            READ MORE
          </button>
        </Link>
        
      </div>
    </div>
  );
}
