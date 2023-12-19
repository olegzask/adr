import React, {useState} from "react";
import { BsArrowRight } from "react-icons/bs";

import Booking from "../remotestart/Booking";
// import { RadioB } from "./radioB";
// import { DropMenu } from "./drop";
import BookingDealer from "../remotestart/BookingDealer";
import ".//packcard.styles.css";
import { Luggage } from "@mui/icons-material";

export const PackCard = ({ opts }) => {
  const {ident,hseat, remote, name, includes, dealerPrice, retailPrice, dealerPriceCar, dealerPriceSuv, dealerPriceTruck, retailPriceCar, retailPriceSuv, retailPriceTruck, image, dlr, quarters, idNum } = opts;
  const [modal, setModal] = useState(false);
  const [quarts, setQuarters] = useState(false)
  const [qglass, setGlass] = useState(false)
  const [vehic, setVehic]= useState('car');
  const [ceramic, setCeramic] = useState(false);
  const [ultimate, setUltimate] = useState(false);
  const [headlamps, setHeadlamps] = useState(false);
  const [luggage, setLuggage] = useState(false);
  const [brow, setBrow] = useState(false);
  const [transmission, setTransmission] = useState("auto");
  const [seats, setSeats] = useState("single");
  const [security, setSecurity] = useState(false)
  const [rearSeats, setRearSeats] = useState(false)



  const filmec =()=> {
    if(ceramic) return "Ceramic";
    if(ultimate) return "Ultimate"
    if(!ceramic && !ultimate && !remote) return "Regular"
    if(!ceramic && !ultimate && remote) return ""
  }


  const extras = ()=> {
    if(headlamps && !luggage) return "Headlamps"
    if(!headlamps && !luggage) return false;
    if(!headlamps && luggage) return "Luggage"
    if(headlamps && luggage) return "Headlamps & Luggage"
  }

  const ppfPic =(e)=> {
    if(vehic === "car" && !remote && !hseat) return image.car;
    if(vehic === "suv" && !remote && !hseat) return image.suv;
    if(vehic === "truck" && !remote && !hseat) return image.truck;

    if(remote && !hseat) return image;
    if(hseat) return image;


  }



  const checkPoint = (e)=> {
    if(quarters === true && vehic === "car") return <div className="quarters-check"> 
    <div className="inpt-cont">
    <input onClick={useCer} type="checkbox" name="quarters"  id="quart" /><span id="checkid">USE CERAMIC FILM</span>
    </div>

    <div className="inpt-cont">
    <input onClick={useCer} type="checkbox" name="quarters"  id="brow" /><span id="nah">ADD WINDSHIELD BROW</span>

    </div>
    <div className="inpt-cont">
    <input onClick={useCer} type="checkbox" name="quarters"  id="qwindow" /><span id="nah">HAS QUARTER GLASS</span>
    </div>
    </div>;



if(quarters === true && vehic !== "car") return <div className="quarters-check"> 
<div className="inpt-cont">
<input onClick={useCer} type="checkbox" name="quarters"  id="quart" /><span id="checkid">USE CERAMIC FILM</span>
</div>

<div className="inpt-cont">
<input onClick={useCer} type="checkbox" name="quarters"  id="brow" /><span id="nah">ADD WINDSHIELD BROW</span>

</div>





</div>;



    if(!quarters && !remote && !hseat) return <div className="quarters-check">
       <div className="inpt-cont"><input className="inpt-box" onClick={useCer} type="checkbox" name="quarters" id="ulti" /><span>USE ULTIMATE FILM</span></div>
       <div className="inpt-cont"><input className="inpt-box"  onClick={useCer} type="checkbox" name="quarters" id="lamps" /><span>ADD HEADLAMPS</span></div>
       <div className="inpt-cont"><input  className="inpt-box" onClick={useCer} type="checkbox" name="quarters" id="lugg" /><span>ADD LUGGAGE PIECE</span></div>

        </div>;

    if(remote) return <div className="quarters-check"> <input onClick={useCer} type="checkbox" name="quarters" id="ulti" /><span>ADD SECURITY</span></div>;
    if(!remote && hseat) return <div className="quarters-check"> <input className="inpt-box"  onClick={useCer} type="checkbox" name="quarters" id="rears" /><span>ADD REAR SEATS</span></div>;


  }

  const serviceDecider =()=> {
    if(quarters === true) return `Tint ${name}`;
    if(!quarters && !remote && !hseat) return `PPF ${name}`;
    if(!quarters && remote) return `RS - ${name}`;
    if(!quarters && !remote && hseat) return `HS - ${name}`

  }

  const getPrice = (e)=> {

    if(remote && !hseat && transmission==="auto" && !security) return dealerPriceCar;
    if(remote && !hseat && transmission==="manual" && !security) return dealerPriceCar +200;

    if(remote && !hseat && transmission==="auto" && security) return dealerPriceCar +260;
    if(remote && !hseat && transmission==="manual" && security) return dealerPriceCar +390;

    if(!remote && hseat && seats==="single" && !security && !rearSeats) return dealerPriceCar;
    if(!remote && hseat && seats==="double" && !security && !rearSeats) return dealerPriceCar +150;

    if(!remote && hseat && seats==="single" && !security && rearSeats) return dealerPriceCar +650;
    if(!remote && hseat && seats==="double" && !security && rearSeats) return dealerPriceCar +800;


    if(vehic==="car" && !ceramic && !qglass && !brow && !ultimate && !headlamps && !luggage) return dealerPriceCar;
    if(vehic==="suv" && !ceramic && !qglass && !brow && !ultimate && !headlamps && !luggage) return dealerPriceSuv;
    if(vehic==="truck" && !ceramic && !qglass && !brow && !ultimate && !headlamps && !luggage) return dealerPriceTruck;

    if(vehic==="car" && !ceramic && !brow && !ultimate && headlamps && !luggage) return dealerPriceCar +115.00;
    if(vehic==="suv" && !ceramic && !brow && !ultimate && headlamps && !luggage) return dealerPriceSuv +115.00;
    if(vehic==="truck" && !ceramic && !brow && !ultimate && headlamps && !luggage) return dealerPriceTruck +115.00;

    if(vehic==="car" && !ceramic && !brow && !ultimate &&  !headlamps && luggage) return dealerPriceCar +120.00;
    if(vehic==="suv" && !ceramic && !brow && !ultimate && !headlamps && luggage) return dealerPriceSuv +120.00;
    if(vehic==="truck" && !ceramic && !brow && !ultimate && !headlamps && luggage) return dealerPriceTruck +120.00;

    if(vehic==="car" && !ceramic && !brow && !ultimate &&  headlamps && luggage) return dealerPriceCar +235.00;
    if(vehic==="suv" && !ceramic && !brow && !ultimate && headlamps && luggage) return dealerPriceSuv +235.00;
    if(vehic==="truck" && !ceramic && !brow && !ultimate && headlamps && luggage) return dealerPriceTruck +235.00;



    if(vehic==="car" && !ceramic && ultimate && !headlamps && !luggage) return Math.round(dealerPriceCar * 1.5).toFixed(2);
    if(vehic==="suv" && !ceramic && ultimate && !headlamps && !luggage) return Math.round(dealerPriceSuv * 1.5).toFixed(2);
    if(vehic==="truck" && !ceramic && ultimate && !headlamps && !luggage ) return Math.round(dealerPriceTruck * 1.5).toFixed(2);


    


    if(vehic==="car" && !ceramic && ultimate && headlamps && !luggage) return Math.round((dealerPriceCar +115.00)*1.5).toFixed(2);
    if(vehic==="suv" && !ceramic && ultimate && headlamps && !luggage) return Math.round((dealerPriceSuv +115.00)*1.5).toFixed(2);
    if(vehic==="truck" && !ceramic && ultimate && headlamps && !luggage ) return Math.round((dealerPriceTruck+115)*1.5).toFixed(2);

    if(vehic==="car" && !ceramic && ultimate && !headlamps && luggage) return Math.round((dealerPriceCar+120.00)*1.5).toFixed(2);
    if(vehic==="suv" && !ceramic && ultimate && !headlamps && luggage) return Math.round((dealerPriceSuv+120.00)*1.5).toFixed(2);
    if(vehic==="truck" && !ceramic && ultimate && !headlamps && luggage ) return Math.round((dealerPriceTruck+120.00)*1.5).toFixed(2);

    if(vehic==="car" && !ceramic && ultimate && headlamps && luggage) return Math.round((dealerPriceCar+235.00)*1.5).toFixed(2);
    if(vehic==="suv" && !ceramic && ultimate && headlamps && luggage) return Math.round((dealerPriceSuv+235.00)*1.5).toFixed(2);
    if(vehic==="truck" && !ceramic && ultimate && headlamps && luggage ) return Math.round((dealerPriceTruck+235.00)*1.5).toFixed(2);


//DEALER PRICE TINT

 if(vehic==="car" && !ceramic && !qglass && !brow && !headlamps && !luggage) return dealerPriceCar;
 if(vehic==="suv" && !ceramic && !qglass && !brow && !headlamps && !luggage) return dealerPriceSuv;
 if(vehic==="truck" && !ceramic && !qglass && !brow && !headlamps && !luggage) return dealerPriceTruck;

 if(vehic==="car" && !ceramic && !qglass && brow) return dealerPriceCar +100;
 if(vehic==="suv" && !ceramic && !qglass && brow) return dealerPriceSuv +100;
 if(vehic==="truck" && !ceramic && !qglass && brow) return dealerPriceTruck +100;



 if(vehic==="car" && ceramic && !qglass && !brow) return Math.round(dealerPriceCar * 1.5).toFixed(2);
 if(vehic==="suv" && ceramic && !qglass && !brow) return Math.round(dealerPriceSuv * 1.5).toFixed(2);
 if(vehic==="truck" && ceramic && !qglass && !brow) return Math.round(dealerPriceTruck * 1.5).toFixed(2);

 if(vehic==="car" && ceramic && !qglass && brow) return ((dealerPriceCar +100)*1.5).toFixed(2);
 if(vehic==="suv" && ceramic && !qglass && brow) return ((dealerPriceSuv +100)*1.5).toFixed(2);
 if(vehic==="truck" && ceramic && !qglass && brow) return ((dealerPriceTruck +100)*1.5).toFixed(2);


 //WITH QGLASS

 if(vehic==="car" && !ceramic && qglass && !brow && !headlamps && !luggage ) return dealerPriceCar +40;
 if(vehic==="suv" && !ceramic && qglass && !brow && !headlamps && !luggage) return dealerPriceSuv +40;
 if(vehic==="truck" && !ceramic && qglass && !brow && !headlamps && !luggage) return dealerPriceTruck+40;

 if(vehic==="car" && !ceramic && qglass && brow) return dealerPriceCar +140;
 if(vehic==="suv" && !ceramic && qglass && brow) return dealerPriceSuv +140;
 if(vehic==="truck" && !ceramic && qglass && brow) return dealerPriceTruck +140;


 if(vehic==="car" && ceramic && qglass && !brow) return Math.round(dealerPriceCar+40)*1.5.toFixed(2);
 if(vehic==="suv" && ceramic && qglass && !brow) return Math.round(dealerPriceSuv+40)*1.5.toFixed(2);
 if(vehic==="truck" && ceramic && qglass && !brow) return Math.round(dealerPriceTruck+40)*1.5.toFixed(2);

 if(vehic==="car" && ceramic && qglass && brow) return ((dealerPriceCar +140)*1.5).toFixed(2);
 if(vehic==="suv" && ceramic && qglass && brow) return ((dealerPriceSuv +140)*1.5).toFixed(2);
 if(vehic==="truck" && ceramic && qglass && brow) return ((dealerPriceTruck +140)*1.5).toFixed(2);



  }

  const useCer = (e)=> {
    const checkBox =  e.target;
    if(!remote && checkBox.id +"" ==="quart") {
     ceramic ? setCeramic(false) : setCeramic(true);
    } 

    if(!remote && checkBox.id  ==="qwindow") {
      qglass ? setGlass(false) : setGlass(true);
     } 
 

    if(!remote && checkBox.id === 'ulti')
    {
      ultimate ? setUltimate(false) : setUltimate(true);

    }
    if(!remote && checkBox.id === "brow" )
    {
     brow ? setBrow(false) : setBrow(true);
    }

    if(!remote && checkBox.id === 'lamps') 
   {
    headlamps ? setHeadlamps(false) :setHeadlamps(true);
  }

  if(!remote && checkBox.id === 'lugg') 
  {
   luggage ? setLuggage(false) :setLuggage(true);
  }
    
if(remote){
  security ? setSecurity(false) : setSecurity(true)
}

if(!remote && checkBox.id ==="rears"){
  rearSeats ? setRearSeats(false) : setRearSeats(true);
}

    
  }


  const getPriceRetail = (e)=> {

    if(remote && transmission==="auto" && !security) return retailPriceCar.toFixed(2);
    if(remote && transmission==="manual" && !security) return (retailPriceCar *1.25).toFixed(2);

    if(remote && transmission==="auto" && security) return (retailPriceCar +300).toFixed(2);
    if(remote && transmission==="manual" && security) return (retailPriceCar * 1.25 +300).toFixed(2);

    //RETAIL PRICE TINT

    if(vehic==="car" && !ceramic && !qglass && !brow && !headlamps && !luggage) return retailPriceCar;
    if(vehic==="suv" && !ceramic && !qglass && !brow && !headlamps && !luggage) return retailPriceSuv;
    if(vehic==="truck" && !ceramic && !qglass && !brow && !headlamps && !luggage) return retailPriceTruck;

    if(vehic==="car" && !ceramic && !qglass && brow) return retailPriceCar +100;
    if(vehic==="suv" && !ceramic && !qglass && brow) return retailPriceSuv +100;
    if(vehic==="truck" && !ceramic && !qglass && brow) return retailPriceTruck +100;


    if(vehic==="car" && ceramic && !qglass && !brow) return Math.round(retailPriceCar * 1.5).toFixed(2);
    if(vehic==="suv" && ceramic && !qglass && !brow) return Math.round(retailPriceSuv * 1.5).toFixed(2);
    if(vehic==="truck" && ceramic && !qglass && !brow) return Math.round(retailPriceTruck * 1.5).toFixed(2);

    if(vehic==="car" && ceramic && !qglass && brow) return ((retailPriceCar +100)*1.5).toFixed(2);
    if(vehic==="suv" && ceramic && !qglass && brow) return ((retailPriceSuv +100)*1.5).toFixed(2);
    if(vehic==="truck" && ceramic && !qglass && brow) return ((retailPriceTruck +100)*1.5).toFixed(2);


    //WITH QGLASS

    if(vehic==="car" && !ceramic && qglass && !brow && !headlamps && !luggage && !hseat) return retailPriceCar +40;
    if(vehic==="suv" && !ceramic && qglass && !brow && !headlamps && !luggage && !hseat) return retailPriceSuv +40;
    if(vehic==="truck" && !ceramic && qglass && !brow && !headlamps && !luggage && !hseat) return retailPriceTruck+40;

    if(vehic==="car" && !ceramic && qglass && brow) return retailPriceCar +140;
    if(vehic==="suv" && !ceramic && qglass && brow) return retailPriceSuv +140;
    if(vehic==="truck" && !ceramic && qglass && brow) return retailPriceTruck +140;


    if(vehic==="car" && ceramic && qglass && !brow) return Math.round(retailPriceCar+40)*1.5.toFixed(2);
    if(vehic==="suv" && ceramic && qglass && !brow) return Math.round(retailPriceSuv+40)*1.5.toFixed(2);
    if(vehic==="truck" && ceramic && qglass && !brow) return Math.round(retailPriceTruck+40)*1.5.toFixed(2);

    if(vehic==="car" && ceramic && qglass && brow) return ((retailPriceCar +140)*1.5).toFixed(2);
    if(vehic==="suv" && ceramic && qglass && brow) return ((retailPriceSuv +140)*1.5).toFixed(2);
    if(vehic==="truck" && ceramic && qglass && brow) return ((retailPriceTruck +140)*1.5).toFixed(2);

    // RETAIL PPF PRICES


    if(vehic==="car" && !ceramic && !brow && !ultimate && !headlamps && !luggage) return retailPriceCar;
    if(vehic==="suv" && !ceramic && !brow && !ultimate && headlamps && !luggage) return retailPriceSuv;
    if(vehic==="truck" && !ceramic && !brow && !ultimate && !headlamps && !luggage) return retailPriceTruck;

    if(vehic==="car" && !ceramic && !brow && !ultimate && headlamps && !luggage) return retailPriceCar +115.00;
    if(vehic==="suv" && !ceramic && !brow && !ultimate && headlamps && !luggage) return retailPriceSuv +115.00;
    if(vehic==="truck" && !ceramic && !brow && !ultimate && headlamps && !luggage) return retailPriceTruck +115.00;

    if(vehic==="car" && !ceramic && !brow && !ultimate &&  !headlamps && luggage) return retailPriceCar +120.00;
    if(vehic==="suv" && !ceramic && !brow && !ultimate && !headlamps && luggage) return retailPriceSuv +120.00;
    if(vehic==="truck" && !ceramic && !brow && !ultimate && !headlamps && luggage) return retailPriceTruck +120.00;

    if(vehic==="car" && !ceramic && !brow && !ultimate &&  headlamps && luggage) return retailPriceCar +235.00;
    if(vehic==="suv" && !ceramic && !brow && !ultimate && headlamps && luggage) return retailPriceSuv +235.00;
    if(vehic==="truck" && !ceramic && !brow && !ultimate && headlamps && luggage) return retailPriceTruck +235.00;



    if(vehic==="car" && !ceramic && ultimate && !headlamps && !luggage) return Math.round(retailPriceCar * 1.5).toFixed(2);
    if(vehic==="suv" && !ceramic && ultimate && !headlamps && !luggage) return Math.round(retailPriceSuv * 1.5).toFixed(2);
    if(vehic==="truck" && !ceramic && ultimate && !headlamps && !luggage ) return Math.round(retailPriceTruck * 1.5).toFixed(2);


    


    if(vehic==="car" && !ceramic && ultimate && headlamps && !luggage) return Math.round((retailPriceCar +115.00)*1.5).toFixed(2);
    if(vehic==="suv" && !ceramic && ultimate && headlamps && !luggage) return Math.round((retailPriceSuv +115.00)*1.5).toFixed(2);
    if(vehic==="truck" && !ceramic && ultimate && headlamps && !luggage ) return Math.round((retailPriceTruck+115)*1.5).toFixed(2);

    if(vehic==="car" && !ceramic && ultimate && !headlamps && luggage) return Math.round((retailPriceCar+120.00)*1.5).toFixed(2);
    if(vehic==="suv" && !ceramic && ultimate && !headlamps && luggage) return Math.round((retailPriceSuv+120.00)*1.5).toFixed(2);
    if(vehic==="truck" && !ceramic && ultimate && !headlamps && luggage ) return Math.round((dealerPriceTruck+120.00)*1.5).toFixed(2);

    if(vehic==="car" && !ceramic && ultimate && headlamps && luggage) return Math.round((retailPriceCar+235.00)*1.5).toFixed(2);
    if(vehic==="suv" && !ceramic && ultimate && headlamps && luggage) return Math.round( (retailPriceSuv+235.00)*1.5).toFixed(2);
    if(vehic==="truck" && !ceramic && ultimate && headlamps && luggage ) return Math.round((retailPriceTruck+235.00)*1.5).toFixed(2);


  }


  const resetAll = ()=> {
setVehic("car");
setCeramic(false);
setUltimate(false);
setBrow(false);
setHeadlamps(false);
setLuggage(false);
setSecurity(false);
setGlass(false);

  }


  const dropName = ()=> {
    if(hseat && !remote) return "How many seats?";
    if(!remote && !hseat) return "Choose vehicle type";
    if(remote && !hseat) return "Choose transmission type";
  }



  const DropMenu= () => {

    // return (
    //     <div className="droper">
    //          <label className="droper-head" for="vehicle-select">{dropName()}</label>
    // <select onChange={!remote ? checkVeh : checkTrans} name="vehicles" className="dropgovno" id={`vehicles-select${idNum}`}>
    //   <option className="opt" value={!remote ? "car" : "auto"}>{!remote && !hseat ? "CAR": "Automatic"}</option>
    //   <option className="opt" value={!remote ? "suv" : "manual"}>{!remote && !hseat ? "SUV": "Manual"}</option>
    //   {!remote && !hseat ? <option className="opt" value="truck">TRUCK</option> : null}
      
    // </select>
    //     </div>
       
    // )
    
    if(!hseat && !remote) return (
      <div className="droper">
             <label className="droper-head" for="vehicle-select">{dropName()}</label>
    <select onChange={!remote ? checkVeh : checkTrans} name="vehicles" className="dropgovno" id={`vehicles-select${idNum}`}>
      <option className="opt" value={!remote ? "car" : "auto"}>{!remote && !hseat ? "CAR": "Automatic"}</option>
      <option className="opt" value={!remote ? "suv" : "manual"}>{!remote && !hseat ? "SUV": "Manual"}</option>
      {!remote && !hseat ? <option className="opt" value="truck">TRUCK</option> : null}
      
    </select>
        </div>
    )

    if(!hseat && remote) return (
      <div className="droper">
             <label className="droper-head" for="vehicle-select">{dropName()}</label>
    <select onChange={checkTrans} name="vehicles" className="dropgovno" id={`vehicles-select${idNum}`}>
      <option className="opt" value="auto">Automatic</option>
      <option className="opt" value="manual">Manual</option>
      
    </select>
        </div>
    )


    if(hseat && !remote) return (
      <div className="droper">
      <label className="droper-head" for="vehicle-select">{dropName()}</label>
<select onChange={checkSeats} name="vehicles" className="dropgovno" id={`vehicles-select${idNum}`}>
<option className="opt" value="single">Single</option>
<option className="opt" value="double">Double</option>
{!remote && !hseat ? <option className="opt" value="truck">TRUCK</option> : null}

</select>
 </div>
    )
      
    
    }


  const checkVeh = (e)=> {
    // resetAll();
    setGlass(false)
    setVehic(e.target.value)
  }

  const checkTrans = (e)=> {
    // resetAll();

    setTransmission(e.target.value)
  }

  const checkSeats = (e)=> {
    // resetAll();

    setSeats(e.target.value)
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
          {includes.map((el, id) => (
            <span key={id} className="pack-el">- {el}</span>
          ))}
        </div>
      
      </div>
      {DropMenu()}
      {/* {quarters ? DropMenu() : null} */}
       {checkPoint()}
<div className="price-cont">
<h4 className="price-dealer">Price: $ <span id={`dp-${idNum}`}>{quarters ? getPrice() : getPrice()}</span> </h4>
      <h4 className="price-retail">MSRP: ${quarters ? getPriceRetail() : getPriceRetail()}</h4>
</div>
      
      {!modal ? null : (
            <BookingDealer opts={{ rem: serviceDecider(), txt: "", reset: setModal, addons: extras(), dName: dlr, filmType: filmec(), dPrice: document.getElementById(`dp-${idNum}`).innerHTML, vehType: document.getElementById(`vehicles-select${idNum}`).value,  vBrow: brow ? "/ Add Brow" : "", secur: security ? "/ Add Security" : "" }} />
          )}
          <button id="bookbutn"  onClick={showModal} className="btn-book remote-btn">
            BOOK NOW
          </button>
    </div>
  );
};
