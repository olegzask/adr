import React from "react";
import { BsArrowRight } from "react-icons/bs";
import LinkComponent from "../../components/link/LinkComponent";
import "./servicecard.styles.css";
import { scrollToTop } from "../../components/helperFunctions/helpers";

export default function ServiceCard({ opts }) {
  const { name, description, image, link, id } = opts;
  const lolec = name;

  const goToContact = (e) => {
    setTimeout(
      () => {
        const servicesEl = document.getElementById("ankor-2");
        servicesEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      },

      100
    );

  };

  return (
    <div className="servicecard-container" id={id}>
      <div className="servicecard-left-side">
        <h2 className="service-name srv-name">{name}</h2>
        <span className="service-description">{description}</span>
      {name === "Dealer Program" ? <span className="service-description">Wholesale Pricing. Best quality materials & work.</span> : null}  
        <div className="service-link-container">
          <LinkComponent
            opts={{
              name: lolec === "Dealer Program" ? "PARTNER WITH US" : "MORE INFO",
              linkTo: lolec === "Dealer Program" ?  "": link,
              clName: "service-btn",
              func: lolec === "Dealer Program" ? goToContact : scrollToTop
            }}
          />
          {/* <LinkComponent
            opts={{
              name: "CONTACT US",
              linkTo: "contact",
              clName: "service-btn",
            }}
          /> */}
        </div>
      </div>

      <div className="servicecard-right-side">
        <img className="service-img" src={image} alt="service-image" />
      </div>
    </div>
  );
}
