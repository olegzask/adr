import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./routes/home/Home";
import Sales from "./routes/sales/Sales";
import Automotivetint from "./routes/autotint/Automotivetint";
import Dealerprogram from "./routes/dealer program/Deaelerprogram"
// import AboutUs from "./routes/about/AboutUs";
import Careers from "./routes/careers/Careers";
import ContactUs from "./routes/contact/ContactUs";
import Services from "./routes/services/Services";
import RemoteStart from "./routes/remotestart/RemoteStart";
import { RemsGood } from "./routes/remotestart/RemsGood";
import PaintProtection from "./routes/paintprotection/PaintProtection";
import WindshieldProtection from "./routes/windshield-protection/WindshieldProtection";
import Dashcams from "./routes/dashcams/Dashcams";
import InfoCard from "./components/moreinfo/InfoCard";

import BlankCardTint from "./components/moreinfo/BlankTint";
import BlankCardPpf from "./components/moreinfo/BlankPpf";
import BlankCardRemote from "./components/moreinfo/BlankRemote";
import BlankCardSimulator from "./components/moreinfo/BlankSimulator";



import { Simulator } from "./components/simulator/simulator";
import Accessories from "./routes/12voltaccessories/Accessories";
import {CarAudio}from "./routes/car audio-video/CarAudio";
import Marine from "./routes/marine/Marine";
import { PpfPackages } from "./routes/paintprotection/PpfPacks";
import { WsPackages } from "./routes/windshield-protection/WindshieldPacks";
import SuccessPage from "./routes/successpage/SuccessPage";
import { Dealer } from "./routes/dealer/Dealer";
import { Financing } from "./routes/financing/Financing";
import { TintPackages } from "./routes/autotint/TintPacks";
import {Faq} from "./routes/faq/Faq"
// import { ProductCare } from "./routes/productcare/Productcare";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sales" element={<Sales />} />
        {/* <Route path="about" element={<AboutUs />} /> */}
        <Route path="services" element={<Services />} />

        
        <Route path="services/window-tint" element={<BlankCardTint />} />
        <Route path="services/paint-protection-film" element={<BlankCardPpf />} />
        <Route path="services/remote-start" element={<BlankCardRemote />} />
        <Route path="simulator" element={<BlankCardSimulator />} />



        <Route path="services/window-tinting-edmonton" element={<Automotivetint />} />
        <Route path="services/window-tinting-edmonton/tint-packages" element={<TintPackages />} />
        <Route path="services/dealer-program" element={<Dealerprogram />} />
        <Route path="services/dealer-program/pricelist" element={<Dealer />} />

        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="tint-ppf-simulator" element={<Simulator />} />
        <Route path="services/remote-start-edmonton" element={<RemsGood />} />
        <Route
          path="services/paint-protection-film-edmonton"
          element={<PaintProtection />}
        />
        <Route path="services/dash-cams" element={<Dashcams />} />
        <Route path="services/windshield-protection-film-edmonton" element={<WindshieldProtection />} />
        <Route path="services/12-volt-accessories" element={<Accessories />} />
        <Route path="services/marine-audio" element={<Marine />} />
        <Route path="services/car-audio-video" element={<CarAudio />} />
        <Route path="financing" element={<Financing />} />


        <Route path="services/paint-protection-film-edmonton/packages" element={<PpfPackages/>} />
        <Route path="services/windshield-protection-film-edmonton/packages" element={<WsPackages/>} />


        <Route path="services/:service/:id" element={<InfoCard />} />
        <Route path="success-submit" element={<SuccessPage />} />
        <Route path="faq" element={<Faq />} />
        {/* <Route path="product-care" element={<ProductCare />} /> */}



      </Route>
    </Routes>
  );
};

export default App;
