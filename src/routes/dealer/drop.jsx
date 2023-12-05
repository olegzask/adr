
import React from "react";
import "./packcard.styles.css"

export const DropMenu= () => {

return (
    <div className="droper">
         <label className="droper-head" for="vehicle-select">Choose vehicle type:</label>

<select name="vehicles" id="vehicles-select">
  <option value="">Please choose an option</option>
  <option value="car">CAR</option>
  <option value="suv">SUV</option>
  <option value="truck">TRUCK</option>
  
</select>
    </div>
   
)
  

}
