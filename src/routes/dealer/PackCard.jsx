import React, {useState} from "react";
import Booking from "../remotestart/Booking";
// import { RadioB } from "./radioB";
// import { DropMenu } from "./drop";
import BookingDealer from "../remotestart/BookingDealer";
import ".//packcard.styles.css";

export const PackCard = ({ opts }) => {
  const { name, includes, dealerPrice, retailPrice, dealerPriceCar, dealerPriceSuv, dealerPriceTruck, retailPriceCar, retailPriceSuv, retailPriceTruck, image, dlr, quarters, idNum } = opts;
  const [modal, setModal] = useState(false);
  const [quarts, setQuarters] = useState(false)
  const [vehic, setVehic]= useState('car');
  const [ceramic, setCeramic] = useState(false)


  const getPrice = (e)=> {
    if(vehic==="car" && !ceramic) return dealerPriceCar;
    if(vehic==="suv" && !ceramic) return dealerPriceSuv;
    if(vehic==="truck" && !ceramic) return dealerPriceTruck;

    if(vehic==="car" && ceramic) return Math.round(dealerPriceCar * 1.5).toFixed(2);
    if(vehic==="suv" && ceramic) return Math.round(dealerPriceSuv * 1.5).toFixed(2);
    if(vehic==="truck" && ceramic) return Math.round(dealerPriceTruck * 1.5).toFixed(2);
  }

  const useCer = (e)=> {
    const checkBox =  e.target.checked;
    checkBox ? setCeramic(true) : setCeramic(false)
  }


  const getPriceRetail = (e)=> {
    if(vehic==="car" && !ceramic) return retailPriceCar;
    if(vehic==="suv" && !ceramic) return retailPriceSuv;
    if(vehic==="truck" && !ceramic) return retailPriceTruck;

    if(vehic==="car" && ceramic) return Math.round(retailPriceCar * 1.5).toFixed(2);
    if(vehic==="suv" && ceramic) return Math.round(retailPriceSuv * 1.5).toFixed(2);
    if(vehic==="truck" && ceramic) return Math.round(retailPriceTruck * 1.5).toFixed(2);
  }

  const DropMenu= () => {

    return (
        <div className="droper">
             <label className="droper-head" for="vehicle-select">Choose vehicle type:</label>
    
    <select onChange={checkVeh} name="vehicles" className="dropgovno" id={`vehicles-select${idNum}`}>
      {/* <option className="opt" value="">Vehicle Type</option> */}
      <option className="opt" value="car">CAR</option>
      <option className="opt" value="suv">SUV</option>
      <option className="opt" value="truck">TRUCK</option>
      
    </select>
        </div>
       
    )
      
    
    }


  const checkVeh = (e)=> {
    console.log(vehic)
    setVehic(e.target.value)
  }

  const changeQuarts = ()=> {
    
    const checkInput= document.getElementById("quart");
    !checkInput.checked ? setQuarters(false) : setQuarters(true);

  }

  const showModal = (e) => {
    setModal(true);
  };

  return (
    <div className="pack-container">
      <div className="pack-info">
        <h3 className="pack-name">{name.toUpperCase()}</h3>
        <img className="pack-img" src={image} alt="package-img" />
        <ul className="pack-list">
          {includes.map((el) => (
            <li className="pack-el">{el}</li>
          ))}
        </ul>
      
      </div>
      {DropMenu()}
      {/* {quarters ? DropMenu() : null} */}
       {quarters === true ? <div className="quarters-check"> <input onClick={useCer} type="checkbox" name="quarters" id="quart" /><span>USE CERAMIC FILM</span></div>  : null}
<div className="price-cont">
<h4 className="price-dealer">Dealer Price: $ <span id={`dp-${idNum}`}>{quarters ? getPrice() : dealerPrice}</span> </h4>
      <h4 className="price-retail">MSRP: ${quarters ? getPriceRetail() : retailPrice}</h4>
</div>
      
      {!modal ? null : (
            <BookingDealer opts={{ rem: `PPF Dealer - ${name}`, txt: "Service", reset: setModal, dName: dlr, filmType: ceramic ? "Ceramic" : "Regular", dPrice: document.getElementById(`dp-${idNum}`).innerHTML, vehType: document.getElementById(`vehicles-select${idNum}`).value }} />
          )}
          <button id="bookbutn"  onClick={showModal} className="btn-book remote-btn">
            BOOK NOW
          </button>
    </div>
  );
};
