import React from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";

export const RadioB = ({ options }) => {

const vehicleType = (e) => {
    const vType = e.target.value;
    console.log(vType);
    // if (vType === "car"){

    // }
}

  return (
    <FormControl >
      <h2 className="radio-header">VEHICLE TYPE</h2>
      <RadioGroup className="radiogroup"
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        
      >
        <FormControlLabel className="controler"
          onClick={vehicleType}
          value="car"
          control={<Radio color="default" />}
          label="car"
        />

        <FormControlLabel className="controler"
          onClick={vehicleType}
          value="suv"
          control={<Radio color="default" />}
          label="suv"
        />
        <FormControlLabel className="controler"
          onClick={vehicleType}
          value="truck"
          control={<Radio color="default" />}
          label="truck"
        />
      </RadioGroup>
    </FormControl>
  );
};
