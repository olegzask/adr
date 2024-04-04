import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import LinkComponent from "../../components/link/LinkComponent";
import { scrollToTop } from "../../components/helperFunctions/helpers";


import "./infocard.styles.css";

export default function BlankCard() {

  return (
    <div className="infocard-container">
        <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <span>NO INDEX</span>
      <LinkComponent
            opts={{
              name: "GO BACK",
              linkTo: "",
              clName: "tint-btn",
              func: scrollToTop
            }}
          />

    </div>
  );
}