import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { packagesRemotes } from "../dealer/packagesRemotes";
import { PackCardRemote } from "./PackCardRemote";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

import "../dealer/dealer.styles.css";

export const RemsGood = () => {
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
        <title>Remote Start | Adrenalin Audio</title>
        <meta name="description" content="Compustar Remote Start & DRONE smart control for any vehicle in Edmonton. Choose from options." />
      </Helmet>

          <div className="rs-topper">
          <h1 className="service-container-header rs-serv-header">
            REMOTE START
          </h1>

          <h2 className="rs-description">
          Discover top-tier remote start installation services in Edmonton that offer unparalleled expertise in seamlessly integrating advanced technology into your vehicle. At our facility, we specialize in precision installations tailored to your vehicle's specific requirements, ensuring optimal performance. We are COMPUSTAR PRO Dealer & we have variety of compustar remotes options to choose from.         </h2>
          <br/>
          <br/>

          
          <h2 className="rs-description">
          Elevate your driving experience with our comprehensive approach, which includes the integration of DRONE, an advanced mobile app that offers cutting-edge remote start functionality. With a focus on convenience, security, and innovation, our Edmonton-based service guarantees the luxury of starting your car remotely, all backed by our commitment to user-friendly solutions and superior craftsmanship.
          </h2>
          <br />
          </div>
         
         <div className="ql-rm-ct">
            <div className="ql">
              <button name="DRONE" className="quick-link" onClick={scrollToModel}>
                DRONE
              </button>
              <button name="T13SS" className="quick-link" onClick={scrollToModel}>
                RS-06
              </button>
              <button name="T12SS" className="quick-link" onClick={scrollToModel}>
                RS-05
              </button>
              <button name="Q9SS" className="quick-link" onClick={scrollToModel}>
                RS-04
              </button>
              <button name="T9SS" className="quick-link" onClick={scrollToModel}>
                RS-03
              </button>
              <button name="G15SS" className="quick-link" onClick={scrollToModel}>
                RS-02+
              </button>
              <button name="G15FM" className="quick-link" onClick={scrollToModel}>
                RS-02
              </button>
              <button name="WR3" className="quick-link" onClick={scrollToModel}>
                RS-01
              </button>
            </div>
          </div>
          <div onClick={goUp} className={`scrollUp ${offset > 800 && "scrolledNah"}`}> <FaRegArrowAltCircleUp /><span className="scrollR">Return</span></div>

          <h2 className="rs-description-lower">
            NOT SURE WHAT KIND OF REMOTE START YOU NEED? EXPLORE OUR OPTIONS!
          </h2>

         <div className="rems-packs">
         
         {packagesRemotes.map((el, id) => (
           <PackCardRemote key={id} opts={{...el, dlr: dealerName, idNum: id +9}} />
         ))}
         </div>
      </div>
  );
};
