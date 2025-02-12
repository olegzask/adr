import React, {useState} from "react";
import BookingPpf from "./BookingPpf"
import BookingDealer from "../remotestart/BookingDealer";
import "./packcard.styles.css";

export const PpfPackCard = ({ opts }) => {
  const {ident, remote, name, includes, dealerPrice, retailPrice, dealerPriceCar, dealerPriceSuv, dealerPriceTruck, retailPriceCar, retailPriceSuv, retailPriceTruck, image, dlr, quarters, idNum } = opts;
  const [modal, setModal] = useState(false);
  const [quarts, setQuarters] = useState(false)
  const [vehic, setVehic]= useState('car');
  const [ceramic, setCeramic] = useState(false);
  const [ultimate, setUltimate] = useState(false);
  const [brow, setBrow] = useState(false);
  const [transmission, setTransmission] = useState("auto");
  const [security, setSecurity] = useState(false)




  const filmec =()=> {
    if(ceramic) return "Ceramic";
    if(ultimate) return "Ceramic Fusion"
    if(!ceramic && !ultimate && !remote) return ""
    if(!ceramic && !ultimate && remote) return ""


  }


  const ppfPic =(e)=> {
    if(vehic === "car" && !remote) return image.car;
    if(vehic === "suv" && !remote) return image.suv;
    if(vehic === "truck" && !remote) return image.truck;

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
    if(!quarters && !remote) return <div className="quarters-check"> <input onClick={useCer} type="checkbox" name="quarters" id="ulti" /><span>USE CERAMIC FUSION</span></div>;

    if(remote) return <div className="quarters-check"> <input onClick={useCer} type="checkbox" name="quarters" id="ulti" /><span>ADD SECURITY</span></div>;

  }

  const serviceDecider =()=> {
    if(quarters === true) return `Tint ${name}`;
    if(!quarters && !remote) return `GLASS FILM - ${name}`
    if(!quarters && remote) return `RS - ${name}`

  }

  const getPrice = (e)=> {

    if(remote && transmission==="auto" && !security) return dealerPriceCar;
    if(remote && transmission==="manual" && !security) return dealerPriceCar +200;

    if(remote && transmission==="auto" && security) return dealerPriceCar +300;
    if(remote && transmission==="manual" && security) return dealerPriceCar +500;


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
        <div className="droper">
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
    <div className="pack-container" id={ident} >
      <div className="pack-info">
        <h3 className="pack-name">{name.toUpperCase()}</h3>
        <img className={!remote ? "pack-img" : " pack-img pack-img-remote" }src={ppfPic()} alt="package-img" />
        <div className="pack-list">
          {includes.map((el) => (
            <span className="pack-el">- {el}</span>
          ))}
        </div>
      
      </div>
      {DropMenu()}
      {/* {quarters ? DropMenu() : null} */}
       {/* {checkPoint()} */}
{/* <div className="price-cont">
<h4 className="price-dealer">From: $ <span id={`dp-${idNum}`}>{quarters ? getPrice() : getPrice()}</span> </h4>
</div> */}
      
      {!modal ? null : (
            <BookingPpf opts={{ rem: serviceDecider(), txt: "", reset: setModal, dName: "", filmType: "", vehType: document.getElementById(`vehicles-select${idNum}`).value,  vBrow: brow ? "/ Add Brow" : "", secur: security ? "/ Add Security" : "" }} />
          )}
<div className="price-cont">
{/* <h4 className="price-dealer">From: $ <span id={`dp-${idNum}`}>{quarters ? getPrice() : getPrice()}</span> </h4> */}
</div>
          <button id="bookbutn"  onClick={showModal} className="btn-book remote-btn">
            REQUEST QUOTE
          </button>
    </div>
  );
};
