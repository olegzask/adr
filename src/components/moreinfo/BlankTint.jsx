import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import "./infocard.styles.css";

export default function BlankCardTint() {

  return (
    <div className="infocard-container">
        <Helmet>
        <meta name="robots" content="noindex" />
        <meta http-equiv="refresh" content="0; URL=/services/window-tinting-edmonton" />
      </Helmet>
    </div>
  );
}