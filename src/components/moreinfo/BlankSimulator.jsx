import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import "./infocard.styles.css";

export default function BlankCardSimulator() {

  return (
    <div className="infocard-container">
        <Helmet>
        <meta name="robots" content="noindex" />
        <meta http-equiv="refresh" content="0; URL=/tint-ppf-simulator" />
      </Helmet>
    </div>
  );
}