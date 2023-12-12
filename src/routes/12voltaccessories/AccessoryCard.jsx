import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../components/helperFunctions/helpers";
import { allAccessories } from "./accessories";
import BookingAccessories from "./BookAccessories";
import "../remotestart/remotestart.styles.css";

import { BooleanContext } from "../../store";


export  const AccessoryCard = ({ opts}) => {
  const {ident, accessory, heatedseats, audio, remote, model, name, includes, dealerPrice, retailPrice, dealerPriceCar, dealerPriceSuv, dealerPriceTruck, retailPriceCar, retailPriceSuv, retailPriceTruck, image, dlr, quarters, idNum } = opts;
  const [modal, setModal] = useState(false);
  const [quarts, setQuarters] = useState(false)
  const [vehic, setVehic]= useState('car');
  const [ceramic, setCeramic] = useState(false);
  const [ultimate, setUltimate] = useState(false);
  const [brow, setBrow] = useState(false);
  const [transmission, setTransmission] = useState("auto");
  const [security, setSecurity] = useState(false)
  const { setActiveProduct } = useContext(BooleanContext);



  const toggleActiveProduct = (e) => {
    const clickedProductId = e.target.closest(".remote-card-container").id;
    console.log(clickedProductId)
    const properProduct = allAccessories.find((el) => el.model === clickedProductId);
    console.log(properProduct)
    setActiveProduct(properProduct);
    scrollToTop();
  };





  const filmec =()=> {
    if(ceramic) return "Ceramic";
    if(ultimate) return "Ultimate"
    if(!ceramic && !ultimate && !remote) return "Regular"
    if(!ceramic && !ultimate && remote) return ""


  }


  const ppfPic =(e)=> {
    if(vehic === "car" && !remote) return image;
    if(vehic === "suv" && !remote) return image;
    if(vehic === "truck" && !remote) return image;

    if(remote) return image;


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
    if(!quarters && !remote) return <div className="quarters-check"> <input onClick={useCer} type="checkbox" name="quarters" id="ulti" /><span>USE ULTIMATE FILM</span></div>;

    if(remote) return <div className="quarters-check"> <input onClick={useCer} type="checkbox" name="quarters" id="ulti" /><span>ADD SECURITY</span></div>;

  }

  const serviceDecider =()=> {
   return `ACCESSORY- ${name}`



  }

  const getPrice = (e)=> {
    return dealerPriceCar;
  }
  
  const useCer = (e)=> {
    const checkBox =  e.target;
    if(!remote && checkBox.id +"" ==="quart") {
     ceramic ? setCeramic(false) : setCeramic(true);
    } 

    if(!remote && checkBox.id === 'ulti')
    {
      ultimate ? setUltimate(false) : setUltimate(true);

    }
    if(!remote && checkBox.id === "brow" )
    {
     brow ? setBrow(false) : setBrow(true);
    }
    
if(remote){
  security ? setSecurity(false) : setSecurity(true)
}
    
  }


  const getPriceRetail = (e)=> {

    if(remote && transmission==="auto" && !security) return retailPriceCar;
    if(remote && transmission==="manual" && !security) return retailPriceCar +200;

    if(remote && transmission==="auto" && security) return retailPriceCar +300;
    if(remote && transmission==="manual" && security) return retailPriceCar +500;


    if(vehic==="car" && !ceramic) return retailPriceCar;
    if(vehic==="suv" && !ceramic) return retailPriceSuv;
    if(vehic==="truck" && !ceramic) return retailPriceTruck;

    if(vehic==="car" && ceramic) return Math.round(retailPriceCar * 1.5).toFixed(2);
    if(vehic==="suv" && ceramic) return Math.round(retailPriceSuv * 1.5).toFixed(2);
    if(vehic==="truck" && ceramic) return Math.round(retailPriceTruck * 1.5).toFixed(2);
  }

  const DropMenu= () => {


    

    return (
        <div id={ident + 21} className="droper">
             <label className="droper-head" for="vehicle-select">{!remote ? "Choose vehicle type:" : "Choose transmission type:"}</label>
    
    <select onChange={!remote ? checkVeh : checkTrans} name="vehicles" className="dropgovno" id={`vehicles-select${idNum}`}>
      <option className="opt" value={!remote ? "car" : "auto"}>{!remote ? "CAR": "Automatic"}</option>
      <option className="opt" value={!remote ? "suv" : "manual"}>{!remote ? "SUV": "Manual"}</option>
      {!remote ? <option className="opt" value="truck">TRUCK</option> : null}
      
    </select>
        </div>
       
    )
      
    
    }


  const checkVeh = (e)=> {
    setVehic(e.target.value)
  }

  const checkTrans = (e)=> {
    setTransmission(e.target.value)
  }

  const changeQuarts = ()=> {
    
    const checkInput= document.getElementById("quart");
    !checkInput.checked ? setQuarters(false) : setQuarters(true);

  }

  const showModal = (e) => {
    setModal(true);
  };

  return (
    <div className="remote-card-container  pack-container" id={model} >
      <div className="pack-info">
        <h3 className="pack-name">{name.toUpperCase()}</h3>
        <img className={!remote ? "pack-img" : " pack-img pack-img-remote" }src={ppfPic()} alt="package-img" />
        <div className="pack-list">
          {includes.map((el, id) => (
            <span key={id} className="pack-el">- {el}</span>
          ))}
        </div>
      
      </div>
      {/* {DropMenu()}
      {quarters ? DropMenu() : null}
       {checkPoint()} */}
<div className="price-cont">
<h4 className="price-dealer">From: $ <span id={`dp-${idNum}`}>{quarters ? getPrice() : getPrice()}</span> </h4>
</div>
      
      {!modal ? null : (
            <BookingAccessories opts={{ rem: serviceDecider(), txt: "", reset: setModal, dPrice: document.getElementById(`dp-${idNum}`).innerHTML}} />
          )}
          <div className="buts-cont">
          <button id="bookbutn"  onClick={showModal} className="rmt-btn">
            BOOK NOW
          </button>
          <Link to={name}>
          <button id="bookbutn"  onClick={toggleActiveProduct} className="rmt-btn">
            MORE INFO
          </button>
          </Link>
         
          </div>
         
    </div>
  );
}