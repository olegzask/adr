import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Overview from "./Overview";
import Features from "./Features";
import InfoCardTop from "./InfoCardTop";
import InfoBottom from "./InfoBottom";
import { BooleanContext } from "../../store";
import "./infocard.styles.css";

export default function InfoCard() {
  const [infoState, setInfoState] = useState("overview");
  const { activeProduct } = useContext(BooleanContext);

  return (
    <div className="infocard-container">
        <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>

      <InfoCardTop product={{ ...activeProduct, infoState, setInfoState }} />
      {infoState === "overview" ? (
        <Overview product={activeProduct} />
      ) : (
        <Features product={activeProduct} />
      )}
      <InfoBottom product={activeProduct} />
    </div>
  );
}
