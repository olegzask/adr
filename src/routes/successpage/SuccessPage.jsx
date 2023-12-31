import React, {useState} from "react";
import SuccessWindow from "../../components/successWindow/SuccessWindow";
import "./sucesspage.styles.css"


export default function SuccessPage() {
  const [requestSent, setRequest] = useState(true);
  const [errorBooking, setErrorBooking] = useState(false);


  const goBackPage = ()=> {
    history.back();
    // window.location.href = "https://adrenalinaudio.ca"
   
  }


   
return (
    <div className="success-page-ct">
        <h2>SUCCESS! REQUEST RECEIVED!</h2>
        <SuccessWindow fields={{ handler: goBackPage, errHandler: setErrorBooking }} />
    </div>
)
  
}

