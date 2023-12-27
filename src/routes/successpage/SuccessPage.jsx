import React, {useState} from "react";
import SuccessWindow from "../../components/successWindow/SuccessWindow";
import "./sucesspage.styles.css"


export default function SuccessPage() {
  const [requestSent, setRequest] = useState(true);
  const [errorBooking, setErrorBooking] = useState(false);


  const goBackPage = ()=> {
    window.history.go(-1);
    setTimeout(() => {
      location.reload();

    }, 1000);
  }


   
return (
    <div className="success-page-ct">
        <h2>SUCCESS! REQUEST RECEIVED!</h2>
        <SuccessWindow fields={{ handler: goBackPage, errHandler: setErrorBooking }} />
    </div>
)
  
}

