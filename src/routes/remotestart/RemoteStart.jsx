import React from "react";
import { remotes } from "./remoteslist";
import RemoteCard from "./RemoteCard";
import "./remotestart.styles.css";

export default function RemoteStart() {
  const showModel = (e) => {
    const parentCont = e.target.closest(".remote-card-container");
    const arr = Array.from(parentCont.children)[1];
    const newArr = Array.from(arr.children)[0];
    const remModel = Array.from(newArr.children)[0].innerHTML;
    setModel(remModel);
  };

  const scrollToRemote = (e) => {
    const idToFind = e.target.innerHTML;
    const goodEl = document.getElementById(idToFind);
    goodEl.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <div className="rs-main-container">
      <div className="rs-container">
        <div className="rs-topper">
          <h2 className="service-container-header rs-serv-header">
            REMOTE <span className="our-services">START</span>
          </h2>

          <span className="rs-description">
          Discover top-tier remote start installation services in Edmonton that offer unparalleled expertise in seamlessly integrating advanced technology into your vehicle. At our facility, we specialize in precision installations tailored to your vehicle's specific requirements, ensuring optimal performance.          </span>
          <br/>
          <br/>

          
          <span className="rs-description">
          Elevate your driving experience with our comprehensive approach, which includes the integration of DRONE, an advanced mobile app that offers cutting-edge remote start functionality. With a focus on convenience, security, and innovation, our Edmonton-based service guarantees the luxury of starting your car remotely, all backed by our commitment to user-friendly solutions and superior craftsmanship.
          </span>
          <br />
          <div className="quick-links">
            <h2 className="ql-hdr">Quick Links</h2>
            <div className="ql">
              <button className="quick-link" onClick={scrollToRemote}>
                DRONE
              </button>
              <button className="quick-link" onClick={scrollToRemote}>
                T13SS
              </button>
              <button className="quick-link" onClick={scrollToRemote}>
                T12SS
              </button>
              <button className="quick-link" onClick={scrollToRemote}>
                Q9SS
              </button>
              
              <button className="quick-link" onClick={scrollToRemote}>
                G15SS
              </button>
              <button className="quick-link" onClick={scrollToRemote}>
                G15FM
              </button>
            </div>
          </div>

          <h2 className="rs-description-lower">
            NOT SURE WHAT KIND OF REMOTE START YOU NEED? EXPLORE OUR OPTIONS!
          </h2>
        </div>
        {remotes.map((remote, id) => (
          <RemoteCard key={id} options={remote} />
        ))}
      </div>
    </div>
  );
}
