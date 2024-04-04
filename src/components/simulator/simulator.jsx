import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { SimulatorTint } from "./simulator-tint";
import { SimulatorPpf } from "./simulator-ppf";

import "./simulator.styles.css";

export const Simulator = () => {
  const [selected, setSelected] = useState("window tint");

  const clicked = (event) => {
    Array.from(document.getElementsByClassName("simulator-header")).map((el) =>
      el.classList.remove("header-clicked")
    );
    const el = event.target.closest(".simulator-header");
    setSelected(
      event.target.closest(".simulator-header").innerHTML.toLowerCase()
    );
    el.classList.add("header-clicked");
  };

  const decider = () => {
    if (selected === "window tint") {
      return <SimulatorTint />;
    }
    if (selected === "paint protection film") return <SimulatorPpf />;
  };

  return (
    <div id="simulator-main" className="simulator-box">
        <Helmet>
        <title>Window Tinting & Paint Protection Simulator Edmonton | Adrenalin Audio</title>
        <meta name="description" content="Window Tint & Paint Protection Film simulator in Edmonton. Choose from options." />
      </Helmet>

      <div className="simulator-selector">
        <h2
          onClick={clicked}
          className="simulator-tint-header header-clicked simulator-header"
        >
          WINDOW TINT
        </h2>
        <h2
          onClick={clicked}
          className="simulator-ppf-header simulator-header"
        >
         PAINT PROTECTION FILM
        </h2>
      </div>

      <div className="decider">{decider()}</div>
    </div>
  );
};
