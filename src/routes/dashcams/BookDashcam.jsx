import React, { useState, useEffect, useRef } from "react";
import ErrorWindow from "../../components/errorWindow/ErrorWindow";
import SuccessWindow from "../../components/successWindow/SuccessWindow";
import { MdClose } from "react-icons/md";
import emailjs from "@emailjs/browser";
import "../remotestart/booking.styles.css";

export default function BookingDashcam({ opts }) {
  const { rem, reset, txt, dName, filmType, dPrice, vehType, vBrow, secur} = opts;
  const [show, setShow] = useState(true);

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    vehicle: "",
 
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
          "template_0kjqht4",
          form.current,
          "EdFYBsAAe4ETIUbxP"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        setTimeout(() => {
          window.location="/success-submit"
        }, 1000);

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
    




    setFormInfo({ name: "", email: "", phone: "", comments: "", vehicle: "",  price: dPrice, vin: "" });

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    commentsInput.value = "";
    vehicleInput.value = "";
    
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
          fields={{ handler: setRequest, errHandler: setErrorBooking }}
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
      <form className="contact-form-main" ref={form} onSubmit={sendEmail}>
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
          type="number"
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
            {/* <input
            disabled={false}
          autoComplete="off"
          id="dPrice"
          className="form-input"
          type="text"
          name="dPrice"
          value={`From: $${dPrice} +GST`}
        /> */}

            {/* <input
            disabled={false}
          autoComplete="off"
          id="cartype"
          className="form-input"
          type="text"
          name="cartype"
          value={`Vehicle Type: ${vehType.toUpperCase()}`}
        /> */}

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
            placeholder="Vehicle's make & model?"
          />
        </div>

        <textarea
          autoComplete="off"
          id="comments"
          onChange={handleChange}
          className="form-comment"
          name="comments"
          placeholder="Any special requests? Date for install? Comments?"
        ></textarea>
        <button className="submit-request" onClick={submitRequest}>
          SUBMIT REQUEST
        </button>
      </form>
    </div>
   
  );
}
