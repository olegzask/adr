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
  const [ceramic, setCeramic] = useState(false);
  const [ultimate, setUltimate] = useState(false);
  const [brow, setBrow] = useState(false);



  const filmec =()=> {
    if(ceramic) return "Ceramic";
    if(ultimate) return "Ultimate"
    if(!ceramic && !ultimate) return "Regular"

  }


  const ppfPic =(e)=> {
    if(vehic === "car") return image.car;
    if(vehic === "suv") return image.suv;
    if(vehic === "truck") return image.truck;


  }



  const checkPoint = (e)=> {
    if(quarters === true) return <div className="quarters-check"> 
    <div className="inpt-cont">
    <input onClick={useCer} type="checkbox" name="quarters"  id="quart" /><span id="checkid">USE CERAMIC FILM</span>
    </div>

    <div className="inpt-cont">
    <input onClick={useCer} type="checkbox" name="quarters"  id="brow" /><span id="nah">ADD WINDSHIELD BROW</span>

    </div>

    </div>;
    if(!quarters) return <div className="quarters-check"> <input onClick={useCer} type="checkbox" name="quarters" id="ulti" /><span>USE ULTIMATE FILM</span></div>;
  }

  const serviceDecider =()=> {
    if(quarters === true) return `Tint ${name}`;
    if(!quarters) return `PPF ${name}`
  }

  const getPrice = (e)=> {
    if(vehic==="car" && !ceramic && !brow && !ultimate) return dealerPriceCar;
    if(vehic==="suv" && !ceramic && !brow && !ultimate) return dealerPriceSuv;
    if(vehic==="truck" && !ceramic && !brow && !ultimate) return dealerPriceTruck;

    if(vehic==="car" && ultimate) return Math.round(dealerPriceCar * 1.5).toFixed(2);
    if(vehic==="suv" && ultimate) return Math.round(dealerPriceSuv * 1.5).toFixed(2);
    if(vehic==="truck" && ultimate ) return Math.round(dealerPriceTruck * 1.5).toFixed(2);

    if(vehic==="car" && !ceramic && brow) return dealerPriceCar +80;
    if(vehic==="suv" && !ceramic && brow) return dealerPriceSuv +80;
    if(vehic==="truck" && !ceramic && brow) return dealerPriceTruck +80;

    if(vehic==="car" && ceramic && !brow) return Math.round(dealerPriceCar * 1.5).toFixed(2);
    if(vehic==="suv" && ceramic && !brow) return Math.round(dealerPriceSuv * 1.5).toFixed(2);
    if(vehic==="truck" && ceramic && !brow) return Math.round(dealerPriceTruck * 1.5).toFixed(2);


    if(vehic==="car" && ceramic && brow) return Math.round(dealerPriceCar  * 1.5 +80).toFixed(2);
    if(vehic==="suv" && ceramic && brow) return Math.round(dealerPriceSuv * 1.5 +80 ).toFixed(2);
    if(vehic==="truck" && ceramic && brow) return Math.round(dealerPriceTruck * 1.5 +80).toFixed(2);
  }

  const useCer = (e)=> {
    const checkBox =  e.target;
    if(checkBox.id +"" ==="quart") {
     ceramic ? setCeramic(false) : setCeramic(true);
    } 

    if(checkBox.id === 'ulti')
    {
      ultimate ? setUltimate(false) : setUltimate(true);

    }
    if(checkBox.id === "brow" )
    {
     brow ? setBrow(false) : setBrow(true);
    }
    

    
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
        <img className="pack-img" src={ppfPic()} alt="package-img" />
        <ul className="pack-list">
          {includes.map((el) => (
            <li className="pack-el">{el}</li>
          ))}
        </ul>
      
      </div>
      {DropMenu()}
      {/* {quarters ? DropMenu() : null} */}
       {checkPoint()}
<div className="price-cont">
<h4 className="price-dealer">Price: $ <span id={`dp-${idNum}`}>{quarters ? getPrice() : getPrice()}</span> </h4>
      <h4 className="price-retail">MSRP: ${quarters ? getPriceRetail() : getPriceRetail()}</h4>
</div>
      
      {!modal ? null : (
            <BookingDealer opts={{ rem: serviceDecider(), txt: "", reset: setModal, dName: dlr, filmType: filmec(), dPrice: document.getElementById(`dp-${idNum}`).innerHTML, vehType: document.getElementById(`vehicles-select${idNum}`).value, vBrow: brow ? "/ Add Brow" : "" }} />
          )}
          <button id="bookbutn"  onClick={showModal} className="btn-book remote-btn">
            BOOK NOW
          </button>
    </div>
  );
};
