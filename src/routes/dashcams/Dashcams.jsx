import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../components/helperFunctions/helpers";
import { Helmet } from "react-helmet";
import { dashcams } from "./dashcamlist";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import {DashcamCard} from "./DashcamCard";

export default function Accessories() {
  const [isDealer, setIsDealer] = useState(false);
  const [password, setPassword] = useState(["adrenalin404", "derrick780", "infiniti780", "gomazda780", "stc780"]);
  const [dealerName, setDealerName] = useState("");
  const [offset, setOffset] = useState(0);


  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  const showPrice = () => {
    const ghl = document.getElementById("pwinput").value;
    if (password.includes(ghl.toLowerCase() + "" )) {
      if(ghl.toLowerCase() + "" === "adrenalin404") {
        setDealerName("Administrator")
      }
      if(ghl.toLowerCase() + "" === "derrick780") {
        setDealerName("Derrick Dodge")
      }
      if(ghl.toLowerCase() + "" === "infiniti780") {
        setDealerName("Infiniti South")
      }

      if(ghl.toLowerCase() + "" === "gomazda780") {
        setDealerName("Go Mazda")
      }

      if(ghl.toLowerCase() + "" === "stc780") {
        setDealerName("SouthTown Chrysler")
      }
      document.getElementById("pwinput").value = "";
      document.getElementById("mdealer").classList.add("visible");
      document.getElementById("mdealer").style.height = "auto";
      document.getElementById("bookbutn").classList.add("visible");
      document.getElementById("subm_btn").style.display = "none";
      document.getElementById("logout_btn").style.display = "block";
      document.getElementById("pwinput").style.display = "none";
      document.getElementById("dealer-name").style.display = "block";


    }

    if (!password.includes(ghl.toLowerCase() + "" )) {
      alert("Wrong Password!");
      document.getElementById("pwinput").value = "";
    }
  };

  const goUp = ()=> {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  
    
  }


  const hidePrice = () => {
    document.getElementById("mdealer").classList.remove("visible");
    document.getElementById("bookbutn").classList.remove("visible");
    document.getElementById("subm_btn").style.display = "block";
    document.getElementById("logout_btn").style.display = "none";
    document.getElementById("pwinput").style.display = "block";
    document.getElementById("dealer-name").style.display = "none";
    setDealerName("")


  };

  const scrollToRemote = (e) => {
    const idToFind = e.target.name;
    const goodEl = document.getElementById(idToFind);
    goodEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToModel = (e) => {
    const idToFind = e.target.name;
    const goodEl = document.getElementById(idToFind);
    goodEl.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };


  return (
    
    <div id="dealer-ctn" className="rs-cnt">
        <Helmet>
        <title>Dash Cameras Edmonton | Adrenalin Audio</title>
        <meta name="description" content="Momento Dash Camera installation in Edmonton." />
      </Helmet>


          <div className="rs-topper">
          <h1 className="service-container-header rs-serv-header hdr-rs">
            DASH CAMERAS EDMONTON
          </h1>

          <p className="rs-description">
          Dash cameras from Adrenalin Audio provide an essential layer of protection for your vehicle. Offering real-time evidence in accidents, theft deterrence, and surveillance capabilities, our expertly installed dash cameras enhance safety and accountability on the road.
          
          </p>
          <br/>
          <br/>

          
          <p className="rs-description">
          With seamless integration and premium features, trust Adrenalin Audio for reliable dash camera installations that safeguard your journeys. Contact us today for a safer driving experience.
          
          </p>
          <br />
          </div>
         
         <div className="quick-links ql-rm-ct">
            <div className="ql">
            <button name="XC" className="quick-link" onClick={scrollToModel}>
              DRONE XC
              </button>
              <button name="M8-8000" className="quick-link" onClick={scrollToModel}>
              M8-8000
              </button>
              <button name="M8-8200" className="quick-link" onClick={scrollToModel}>
              M8-8200
              </button>
              <button name="M8-8400" className="quick-link" onClick={scrollToModel}>
              M8-8400
              </button>
              <button name="M7" className="quick-link" onClick={scrollToModel}>
              M7 Wi-Fi
              </button>
            

            </div>
          </div>
          <div onClick={goUp} className={`scrollUp ${offset > 800 && "scrolledNah"}`}> <FaRegArrowAltCircleUp /><span className="scrollR">Return</span></div>

          <h3 className="rs-description-lower">
            NOT SURE WHAT KIND OF DASH CAMERA YOU NEED? EXPLORE OUR OPTIONS!
          </h3>
          <Link onClick={scrollToTop} className="nav-link fin-link" to="/financing">
            DO NOT PAY FOR 90 DAYS! CLICK TO APPLY NOW!
          </Link>


         <div className="ppf-packs tint-packs dashcam-cont">
         
         {dashcams.map((el, id) => (
           <DashcamCard key={id} opts={{...el, dlr: dealerName, idNum: id +9}} />
         ))}
         </div>
      </div>
  );
}

