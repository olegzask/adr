import React, { useState, useEffect } from "react";
import {CarAudioCard} from "./CarAudioCard"
import { carAudioProducts } from "./caraudioproducts";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import "../dealer/dealer.styles.css";

export const AudioPackages = () => {
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
    <div id="dealer-ctn ">
         <div className="main-dealer-container ppfec" id="mdealer">



          <div onClick={goUp} className={`scrollUp ${offset > 800 && "scrolledNah"}`}> <FaRegArrowAltCircleUp /><span className="scrollR">Return</span></div>


      <h2  id="ppf" className="packs-header">Car Audio / Video</h2>
      <div className="quick-links ql-rm-ct">
            <div className="ql">
              <button  name="bronze" className="quick-link rm-ql" onClick={scrollToModel}>
                BRONZE
              </button>
              <button name="silver" className="quick-link rm-ql" onClick={scrollToModel}>
                SILVER
              </button>
              <button name="gold" className="quick-link rm-ql" onClick={scrollToModel}>
                GOLD
              </button>
              <button name="platinum" className="quick-link rm-ql" onClick={scrollToModel}>
                PLATINUM
              </button>
              <button name="diamond" className="quick-link rm-ql" onClick={scrollToModel}>
                DIAMOND
              </button>
            </div>
          </div>
        <div className="ppf-packs">
         
        {carAudioProducts.map((el, id) => (
           
          <CarAudioCard opts={{...el, dlr: dealerName, idNum: id}} />
        ))}
        </div>
    
                </div>
    </div>
  );
};
