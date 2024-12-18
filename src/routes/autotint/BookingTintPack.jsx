import React, { useState, useEffect, useRef } from "react";
import ErrorWindow from "../../components/errorWindow/ErrorWindow";
import SuccessWindow from "../../components/successWindow/SuccessWindow";
import { MdClose } from "react-icons/md";
import emailjs from "@emailjs/browser";
import "../remotestart/booking.styles.css";

export default function BookingTintPack({ opts }) {
  const { rem, shades, rearHseat, reset, txt, dName, filmType, dPrice, vehType, vBrow, secur, addons} = opts;
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    vehicle: "",
    // poNumber: "",
    dealerName: dName,
    price: dPrice,
    // vin: "",
    

  });

  const [missing, setMissing] = useState();
  const [errorBooking, setErrorBooking] = useState(false);
  const [requestSent, setRequest] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    fieldsChecker();
  };

  const fieldsChecker = () => {
    const missingFields = [];
    Object.entries(formInfo).map((el) => {
      if (el[1] === "") {
        missingFields.push(el[0]);
      }
    });
    if (missingFields.length === 0) {
      emailjs
        .sendForm(
          "service_52hwkbv",
          "template_iue7fwx",
          form.current,
          "EdFYBsAAe4ETIUbxP",
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setRequest(true);
      clearFields();
    } else {
      setMissing(missingFields);
      setErrorBooking(true);
    }
  };

  const clearFields = () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const commentsInput = document.getElementById("comments");
    const vehicleInput = document.getElementById("vehicle");
    const poInput = document.getElementById("poNumber");
    const vinNumber = document.getElementById("vin");
    




    setFormInfo({ name: "", email: "", phone: "", comments: "", vehicle: "", poNumber: "", dealerName: dName, price: dPrice, });

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    commentsInput.value = "";
    vehicleInput.value = "";
    poInput.value = "";
    vinNumber.value = "";
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormInfo({ ...formInfo, [inputName]: inputValue });
  };

  const submitRequest = () => {
    fieldsChecker();
  };

  const closeForm = () => {
    reset("");
  };

  return (
    <div id="bookingForm" className="contactform-container booking-container">
      {errorBooking ? (
        <ErrorWindow fields={{ handler: setErrorBooking, info: missing }} />
      ) : null}
      {requestSent ? (
        <SuccessWindow
          fields={{ handler: setRequest, errHandler: setErrorBooking, closeIt: closeForm }}
        />
      ) : null}
      <div className="close-hdr">
        <h2 className="contactform-header booking-header">
          Send us your work request!
        </h2>
        <MdClose onClick={closeForm} className="booking-close" />
      </div>

      <h3 className="contactform-header-two booking-two">
        Fill out some info for a service to be done...
      </h3>
      <form id="dealer-book-form" action="?" method="POST" className="contact-form-main" ref={form} onSubmit={sendEmail}>
        <input
          autoComplete="off"
          id="name"
          onChange={handleChange}
          className="form-input"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          autoComplete="off"
          id="email"
          onChange={handleChange}
          className="form-input"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <input
          autoComplete="off"
          id="phone"
          onChange={handleChange}
          className="form-input"
          type="text"
          name="phone"
          placeholder="Your phone number"
        />
        <div className="vehicle-info">
          <input
            disabled={false}
            autoComplete="off"
            id="rs-model"
            className="form-input"
            type="text"
            name="rs-model"
            value={`${rem}`}
          />
          {/* <input
            disabled={false}
          autoComplete="off"
          id="dealerName"
          className="form-input"
          type="text"
          name="dealerName"
          value={dName}
        /> */}
            <input
            disabled={false}
          autoComplete="off"
          id="dPrice"
          className="form-input"
          type="text"
          name="dPrice"
          value={`From: $${dPrice} +GST`}
        />

            <input
            disabled={false}
          autoComplete="off"
          id="cartype"
          className="form-input"
          type="text"
          name="cartype"
          value={`${vehType.toUpperCase()}`}
        />

          <input
            disabled={false}
          autoComplete="off"
          onChange={handleChange}
          id="vin"
          className="form-input"
          type="text"
          name="vin"
          placeholder="VIN# (Optional)"

        />

          {/* <input
            disabled={false}
          id="poNumber"
          onChange={handleChange}
          className="form-input"
          type="text"
          name="poNumber"
          placeholder="PO#"
        /> */}
          <input
            autoComplete="off"
            id="vehicle"
            onChange={handleChange}
            className="form-input"
            type="text"
            name="vehicle"
            placeholder="Vehicle's year, make & model?"
          />
        </div>
        {!addons ? null :   <input
            disabled={false}
          autoComplete="off"
          id="addons"
          className="form-input"
          type="text"
          name="addons"
          value={`${addons}`}
        />}

{!shades ? null :   <input
            disabled={false}
          autoComplete="off"
          id="shades"
          className="form-input"
          type="text"
          name="shades"
          value={`${shades.fronts ? "Fronts:" : ""} ${shades.fronts}  ${shades.rears ? "Rears:" : ""} ${shades.rears}`}
        />}
      


        <textarea
          autoComplete="off"
          id="comments"
          onChange={handleChange}
          className="form-comment"
          name="comments"
          placeholder="Any special requests? Date for install? Comments?"
        ></textarea>
        <button className="submit-request">
          SUBMIT REQUEST
        </button>
      </form>
    </div>
  );
}
