import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import {carAudioProducts} from "./caraudioproducts"
import {CarAudioCard} from "./CarAudioCard";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

import "../remotestart/remotestart.styles.css";

export const CarAudio = () => {
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
        <title>Car Audio / Video | Adrenalin Audio</title>
        <meta name="description" content="Car Audio & Video installation servicesin Edmonton. Pioneer, Kenwood & More. Choose from options." />
      </Helmet>


          <div className="rs-topper">
          <h1 className="service-container-header rs-serv-header">
            CAR AUDIO / VIDEO
          </h1>

          <span className="rs-description">
          Discover top-tier remote start installation services in Edmonton that offer unparalleled expertise in seamlessly integrating advanced technology into your vehicle. At our facility, we specialize in precision installations tailored to your vehicle's specific requirements, ensuring optimal performance.          </span>
          <br/>
          <br/>

          
          <span className="rs-description">
          Elevate your driving experience with our comprehensive approach, which includes the integration of DRONE, an advanced mobile app that offers cutting-edge remote start functionality. With a focus on convenience, security, and innovation, our Edmonton-based service guarantees the luxury of starting your car remotely, all backed by our commitment to user-friendly solutions and superior craftsmanship.
          </span>
          <br />
          </div>
         
         <div className="quick-links ql-rm-ct">
            <div className="ql">
              <button name="DMH1700N" className="quick-link" onClick={scrollToModel}>
                1700N
              </button>
              <button name="DMH2600N" className="quick-link" onClick={scrollToModel}>
                2600N
              </button>
              <button name="W4600N" className="quick-link" onClick={scrollToModel}>
                4600N
              </button>
              <button name="NAM3510M7" className="quick-link" onClick={scrollToModel}>
                3510M7
              </button>
              <button name="P300-10" className="quick-link" onClick={scrollToModel}>
                P300-10
              </button>
              <button name="P300-12" className="quick-link" onClick={scrollToModel}>
                P300-12
              </button>
            </div>
          </div>
          <div onClick={goUp} className={`scrollUp ${offset > 800 && "scrolledNah"}`}> <FaRegArrowAltCircleUp /><span className="scrollR">Return</span></div>

          <h2 className="rs-description-lower">
            NOT SURE WHAT KIND OF REMOTE START YOU NEED? EXPLORE OUR OPTIONS!
          </h2>

         <div className="ppf-packs tint-packs">
         
         {carAudioProducts.map((el, id) => (
           <CarAudioCard key={id} opts={{...el, dlr: dealerName, idNum: id +9}} />
         ))}
         </div>
      </div>
  );
         }