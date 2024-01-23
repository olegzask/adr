import React, {useState} from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        
   {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QLHER9KTLW">
</script>
<script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QLHER9KTLW');
          `}
        </script>
      </Helmet>
        <h2>SUCCESS! REQUEST RECEIVED!</h2>
        <SuccessWindow fields={{ handler: goBackPage, errHandler: setErrorBooking }} />
    </div>
)
  
}

