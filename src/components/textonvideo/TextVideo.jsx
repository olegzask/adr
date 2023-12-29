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
        <h1 className="text-header hdr-tint">REMOTE START & 12V ACCESSORIES</h1>
        <h2 className="text-header hdr-ppf">WINDOW TINT & PAINT PROTECTION</h2>
        <h3 className="text-header done-right">SERVICES DONE RIGHT.</h3>
      </div>

      <div className="text-bottom">
        <p className="text-main">
          Over 20 Years of Experience. Let us take care of
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
