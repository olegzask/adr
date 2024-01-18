import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { packages } from "./packages";
import { packagesTint } from "./packagesTint";
import { packagesRemotes } from "./packagesRemotes";
import { packagesAccessories } from "./accessories";
import { PackCard } from "./PackCard";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import ".//dealer.styles.css";

export const Dealer = () => {
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
    <div id="dealer-ctn">
        <Helmet>
        <title>Dealer Log In | Adrenalin Audio</title>
        <meta name="description" content="Dealer Pricing log in. Please log in to see prices." />
      </Helmet>

      <div className="dealer-login">
        <h2 id="dealer-name">{`Welcome, ${dealerName}!`}</h2>
        <input 
          className="input-pw"
          placeholder="Please enter password"
          type="text"
          id="pwinput"
        />
        <button onClick={showPrice} id="subm_btn" className="btn-submitpw">
          SUBMIT
        </button>
        <button
          onClick={hidePrice}
          id="logout_btn"
          className="btn-submitpw"
        >
          LOG OUT
        </button>
      </div>
      <div className="main-dealer-container" id="mdealer">

      <div className="quick-links-dealer">
            <h2 className="ql-hdr-dealer">Quick Links</h2>
            <div className="ql-dealer">
              <button name="ppf" className="quick-link-dealer" onClick={scrollToRemote}>
                PPF
              </button>
              <button name="tint" className="quick-link-dealer" onClick={scrollToRemote}>
                TINT
              </button>

              <button name="remote" className="quick-link-dealer" onClick={scrollToRemote}>
               RS
              </button>
              <button name="accs" className="quick-link-dealer" onClick={scrollToRemote}>
               ACCS
              </button>
             
            </div>
          </div>


          <div onClick={goUp} className={`scrollUp ${offset > 800 && "scrolledNah"}`}> <FaRegArrowAltCircleUp /><span className="scrollR">Return</span></div>


      <h2  id="ppf" className="packs-header">Paint Protection Packages</h2>
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
         
        {packages.map((el, id) => (
          <PackCard key={id} opts={{...el, dlr: dealerName, idNum: id}} />
        ))}
        </div>
      <h2 id="tint" className="packs-header">Window Tint Packages</h2>
      <div className="quick-links ql-rm-ct">
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
       
      <div className="ppf-packs tint-packs tnt-pc">
         
         {packagesTint.map((el, id) => (
           <PackCard key={id} opts={{...el, dlr: dealerName, idNum: id +5}} />
         ))}
         </div>
         <h2 id="remote" className="packs-header">Remote Start Packages</h2>
         <div className="quick-links ql-rm-ct">
            <div className="ql">
              <button name="drone" className="quick-link" onClick={scrollToModel}>
                RS-DRONE
              </button>
              <button name="t13ss" className="quick-link" onClick={scrollToModel}>
                RS-06
              </button>
              <button name="t12ss" className="quick-link" onClick={scrollToModel}>
                RS-05
              </button>
              <button name="q9ss" className="quick-link" onClick={scrollToModel}>
                RS-04
              </button>
              <button name="t9ss" className="quick-link" onClick={scrollToModel}>
                RS-03
              </button>
              <button name="g15ss" className="quick-link" onClick={scrollToModel}>
                RS-02+
              </button>
              <button name="g15fm" className="quick-link" onClick={scrollToModel}>
                RS-02
              </button>
              <button name="wr3" className="quick-link" onClick={scrollToModel}>
                RS-01
              </button>
            </div>
          </div>
         <div className="ppf-packs tint-packs">
         
         {packagesRemotes.map((el, id) => (
           <PackCard key={id} opts={{...el, dlr: dealerName, idNum: id +9}} />
         ))}
         </div>

         <h2 id="accs" className="packs-header">12V Accessories Packages</h2>
         <div className="quick-links ql-rm-ct">
            <div className="ql">
              <button name="hs1" className="quick-link" onClick={scrollToModel}>
                HEATED SEATS
              </button>
         
            </div>
          </div>
         <div className="ppf-packs tint-packs">
         
         {packagesAccessories.map((el, id) => (
           <PackCard key={id} opts={{...el, dlr: dealerName, idNum: id +19}} />
         ))}
         </div>
      </div>

    

    
    
     
    
    </div>
  );
};
