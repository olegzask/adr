import React, {useState} from "react";
import Booking from "../remotestart/Booking";
import BookingDealer from "../remotestart/BookingDealer";
import ".//packcard.styles.css";

export const PackCard = ({ opts }) => {
  const { name, includes, dealerPrice, retailPrice, image, dlr } = opts;
  const [modal, setModal] = useState(false);


  const showModal = (e) => {
    setModal(true);
  };

  return (
    <div className="pack-container">
      <div className="pack-info">
        <h3 className="pack-name">{name.toUpperCase()}</h3>
        <img className="pack-img" src={image} alt="package-img" />
        <ul>
          {includes.map((el) => (
            <li className="pack-el">{el}</li>
          ))}
        </ul>
      </div>
<div className="price-cont">
<h4 className="price-dealer">Dealer Price: ${dealerPrice}</h4>
      <h4 className="price-retail">MSRP: ${retailPrice}</h4>
</div>
      
      {!modal ? null : (
            <BookingDealer opts={{ rem: `PPF Dealer - ${name}`, txt: "Service", reset: setModal, dName: dlr }} />
          )}
          <button id="bookbutn"  onClick={showModal} className="btn-book remote-btn">
            BOOK NOW
          </button>
    </div>
  );
};
