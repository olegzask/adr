import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {packages} from "./ppfpacks"
import { PpfPackCard } from "./PpfPackCard";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import "../dealer/dealer.styles.css";

export const PpfPackages = () => {
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
        <Helmet>
        <title>Paint Protection Packages</title>
        <meta name="description" content="XPEL Paint Protection Film packages options in Edmonton." />
      </Helmet>

         <div className="main-dealer-container ppfec" id="mdealer">



          <div onClick={goUp} className={`scrollUp ${offset > 800 && "scrolledNah"}`}> <FaRegArrowAltCircleUp /><span className="scrollR">Return</span></div>


      <h2  id="ppf" className="packs-header">Paint Protection Packages</h2>
      <div className="ql-rm-ct">
            
              <button  name="bronze" className="ql-ppf" onClick={scrollToModel}>
                BRONZE
              </button>
              <button name="silver" className="ql-ppf" onClick={scrollToModel}>
                SILVER
              </button>
              <button name="gold" className="ql-ppf" onClick={scrollToModel}>
                GOLD
              </button>
              <button name="platinum" className="ql-ppf" onClick={scrollToModel}>
                PLATINUM
              </button>
              <button name="diamond" className="ql-ppf" onClick={scrollToModel}>
                DIAMOND
              </button>
            
          </div>
        <div className="ppf-packs">
         
        {packages.map((el, id) => (
          <PpfPackCard opts={{...el, dlr: dealerName, idNum: id}} />
        ))}
        </div>
    
                </div>
    </div>
  );
};
