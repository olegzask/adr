import React from "react";
import LinkComponent from "../link/LinkComponent";
import "./textvideo.styles.css";

export default function TextVideo() {

  const goToServices = (e) => {
    setTimeout(
      () => {
        const servicesEl = document.getElementById("ankor");
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
    <div className="text-on-video">
      <div className="text-top">
        <span className="text-header hdr-tint">EDMONTON WINDOW TINT &</span>
        <span className="text-header hdr-ppf">PAINT PROTECTION</span>
        <span className="text-header done-right">SERVICES DONE RIGHT.</span>
      </div>

      <div className="text-bottom">
        <p className="text-main">
          Over 10 Years of Experience. Let us take care of
          your vehicle.
        </p>
      </div>
      <LinkComponent
        opts={{
          name: "BROWSE OUR SERVICES",
          linkTo: "",
          clName: "texton-video",
          func: goToServices,
        }}
      />
    </div>
  );
}
