import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import { allAccessories } from "./accessories";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import {AccessoryCard} from "./AccessoryCard";

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
        <title>Accessories | Adrenalin Audio</title>
        <meta name="description" content="Heated seats & other 12 volt accessories in Edmonton. Choose from options." />
      </Helmet>


          <div className="rs-topper">
          <h1 className="service-container-header rs-serv-header">
            12 VOLT ACCESSORIES
          </h1>

          <span className="rs-description">
          Enhance your marine adventures with Adrenalin Audio's premium installations. Specializing in superior, weather-resistant sound systems tailored for open waters, we bring high-fidelity audio to your vessel.
          </span>
          <br/>
          <br/>

          
          <span className="rs-description">
          Count on our expert setups for crystal-clear sound amidst the waves, seamlessly merging tech and marine thrills for an elevated onboard experience.
          </span>
          <br />
          </div>
         
         <div className="quick-links ql-rm-ct">
            <div className="ql">
              <button name="HS1" className="quick-link" onClick={scrollToModel}>
              HS1
              </button>
            </div>
          </div>
          <div onClick={goUp} className={`scrollUp ${offset > 800 && "scrolledNah"}`}> <FaRegArrowAltCircleUp /><span className="scrollR">Return</span></div>

          <h2 className="rs-description-lower">
            NOT SURE WHAT KIND OF REMOTE START YOU NEED? EXPLORE OUR OPTIONS!
          </h2>

         <div className="ppf-packs tint-packs">
         
         {allAccessories.map((el, id) => (
           <AccessoryCard key={id} opts={{...el, dlr: dealerName, idNum: id +9}} />
         ))}
         </div>
      </div>
  );
}

