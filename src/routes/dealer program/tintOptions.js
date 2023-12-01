import { FaTemperatureLow, FaWifi, FaRegEye, FaUserCheck, FaWarehouse  } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import {HiOutlineCurrencyDollar} from "react-icons/hi"
import {DiStreamline} from "react-icons/di"
import {MdOutlineWorkspacePremium, MdDashboardCustomize, MdSentimentSatisfiedAlt} from "react-icons/md"

export const tintOptions = [
  {
    tintType: "Dealer Program",
    office: false,
    img: "../images/services-images/dealer.jpg",
    description:
      ["By partnering with us, you'll be equipped with the resources to meet the growing demand for window tint and paint protection film services, enhancing your dealership's offerings and ultimately driving customer loyalty and satisfaction.", 
      "Contact us today to learn more about our dealership program and how you can seamlessly integrate our premium installation services into your dealership's portfolio. Together, we can create a winning combination that enhances vehicles and drives your dealership's success."],
    brands: "Edmonton Tint Studio",
    features: [
      {
        name: "Wholesale Pricing",
        symbol: <HiOutlineCurrencyDollar/>,
        description:
          " Enjoy competitive wholesale pricing, enabling you to maximize your profits while providing exceptional value to your customers.",
      },
      {
        name: "Expert Installation",
        symbol: <FaUserCheck />,
        description:
          "Partner with our skilled technicians who excels in precise and flawless window tint and paint protection film installations.",
      },
      {
        name: "Premium Products",
        symbol: <MdOutlineWorkspacePremium />,
        description:
          "Benefit from access to top-tier window tint and paint protection film products, renowned for their quality and durability.",
      },
      {
        name: "Custom Solutions",
        symbol: <MdDashboardCustomize />,
        description:
          "Tailor our services to your dealership's unique requirements, offering a personalized touch that resonates with your customer base.",
      },
    
      {
        name: "Increased Customer Satisfaction",
        symbol: <MdSentimentSatisfiedAlt/>,
        description:
          "Elevate your customer experience by offering sought-after enhancements that protect vehicles and elevate their visual appeal.",
      },
      {
        name: "Streamlined Operations",
        symbol: <DiStreamline/>,
        description:
          " Our efficient installation process ensures minimal disruption to your dealership's daily operations, allowing you to focus on what you do best.",
      },
    ],
  },

];
