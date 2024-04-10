import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import {packagesTint} from "./packagesTint"
import { PackCard } from "../dealer/PackCard";
import { TintCard } from "./TintCard";
import "../dealer/dealer.styles.css";

export const TintPackages = () => {
  const [isDealer, setIsDealer] = useState(false);
  const [dealerName, setDealerName] = useState("");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  const goUp = ()=> {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  
    
  }


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
    <div id="dealer-ctn">
        <Helmet>
        <title>Window Tint Packages Edmonton | Adrenalin Audio</title>
        <meta name="description" content="XPEL Window Tint packages options in Edmonton." />
      </Helmet>

         <div className="main-dealer-container ppfec" id="mdealer">



          <div onClick={goUp} className={`scrollUp ${offset > 800 && "scrolledNah"}`}> <FaRegArrowAltCircleUp /><span className="scrollR">Return</span></div>


      <h2  id="ppf" className="packs-header tint-packs-hdr">Window Tint Packages Edmonton</h2>
      <div className="ql-rm-ct">
            <div className="ql">
              <button name="fronts" className="quick-link rm-ql" onClick={scrollToModel}>
                FRONTS ONLY
              </button>
              <button name="rears" className="quick-link rm-ql" onClick={scrollToModel}>
                REARS ONLY
              </button>
              <button name="full" className="quick-link rm-ql" onClick={scrollToModel}>
                FULL TINT
              </button>
            </div>
          </div>
        <div className="ppf-packs">
         
        {packagesTint.map((el, id) => (
          <TintCard key={id} opts={{...el, dlr: dealerName, idNum: id}} />
        ))}
        </div>
    
                </div>
    </div>
  );
};
