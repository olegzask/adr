import React, { useState } from "react";
import { packages } from "./packages";
import { PackCard } from "./PackCard";
import ".//dealer.styles.css";

export const Dealer = () => {
  const [isDealer, setIsDealer] = useState(false);
  const [password, setPassword] = useState(["adrenalin404", "derrick780", "infiniti780", "gomazda780", "stc780"]);
  const [dealerName, setDealerName] = useState("");


  const showPrice = () => {
    const ghl = document.getElementById("pwinput").value;
    console.log(ghl);
    console.log(isDealer);
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

  const yourDealer = ()=> {

    
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


  return (
    <div id="dealer-ctn">
      <div className="dealer-login">
        <h2 id="dealer-name">{`Welcome, ${dealerName}!`}</h2>
        <input
          className="input-pw"
          placeholder="Please enter password"
          type="text"
          id="pwinput"
        />
        <button onClick={showPrice} id="subm_btn" className="btn btn-submitpw">
          SUBMIT
        </button>
        <button
          onClick={hidePrice}
          id="logout_btn"
          className="btn btn-submitpw"
        >
          LOG OUT
        </button>
      </div>
      <div className="main-dealer-container" id="mdealer">
        {packages.map((el) => (
          <PackCard opts={el} />
        ))}
      </div>
    
      {/* <a className="book" href="/contact">
        <button id="bookbutn" className="btn btn-book">
          Book A Vehicle
        </button>
      </a> */}
    
    </div>
  );
};
