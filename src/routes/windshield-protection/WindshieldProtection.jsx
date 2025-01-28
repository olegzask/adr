import React from "react";
import { Helmet } from "react-helmet";
import LinkComponent from "../../components/link/LinkComponent";
import { scrollToTop } from "../../components/helperFunctions/helpers";
import { PpfCard } from "./PpfCard";
import {ppfOptions} from "./ppfOpts"
// import { PpfPackages } from "./PpfPacks";
import "../autotint/autotint.styles.css";
import "./ppf.styles.css";

export default function WindshieldProtection() {
  return (
    <div className="rs-main-container dashcams-main-container">
        <Helmet>
        <title>Windshield Protection Film Edmonton | Adrenalin Audio</title>
        <meta name="description" content="Professional Paint Protection Film installation services in Edmonton. XPEL Ultimate Plus & XPEL Fusionn films. Choose your coverage." />
      </Helmet>

      <div className="rs-container">
      <h1 className="service-container-header  rs-serv-header">
           WINDSHIELD PROTECTION  EDMONTON
          </h1>
        <div className="rs-topper rs-topper-tint">

        <div className="rs-topper-left">

        
          <p className="rs-description">
          Protect your windshield with XPEL’s advanced, virtually invisible protection film, available in Edmonton, Spruce Grove, and Stony Plain. Designed to shield against chips, cracks, and road debris, this durable film ensures your windshield remains clear and intact while preserving its appearance. Applied seamlessly by our expert technicians, it provides long-lasting defense without compromising visibility.
          </p>

          <br/>

          <p className="rs-description">
          With self-healing properties and resistance to environmental contaminants, XPEL Windshield Protection Film helps keep your view crystal clear, no matter the road conditions. Drive with confidence, knowing your windshield is safeguarded by the best in automotive protection.
          </p>

        

          
          
          <br />

          <h3 className="rs-description-lower">
            NOT SURE WHAT COVERAGE YOU WANT? EXPLORE OUR OPTIONS!
          </h3>
          <div className="linkec-cont">
          <LinkComponent
            opts={{
              name: "BROWSE PACKAGES",
              linkTo: "services/windshield-protection-film-edmonton/packages",
              clName: "tint-btn",
              func:  scrollToTop
            }}
            
          />
          
          </div>
          </div>

          <div className="rs-topper-right">
          <img className="card-img tnt-img" src="/images/services-images/windshieldfilm.jpg" alt="paint protection film services edmonton" />
          {/* <img className="card-img xpel-logo" src="/logos/xpel-logo.jpg" alt="xpel-window-tinting-edmonton" /> */}


            
            </div>
         
        </div>

        {ppfOptions.map((opt, id) => {
          return <PpfCard key={id} options={opt} />;
        })}
      </div>
      {/* <PpfPackages/> */}
    </div>
  );
}
