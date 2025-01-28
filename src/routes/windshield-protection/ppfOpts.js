import { FaTemperatureLow, FaWifi, FaRegEye } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { HiThumbUp } from "react-icons/hi";
import { ImCheckmark } from "react-icons/im";
import { MdWaterDrop, MdHealing } from "react-icons/md";
import { FaDumbbell, FaShieldAlt } from "react-icons/fa";

export const ppfOptions = [
  {
    tintType: "WINDSHIELD FILM",
    img: "/logos/xpel-logo.jpg",
    description:
  ["CLEAR AS CRYSTAL, HARD AS DIAMOND",
  "Bump-free, bumper to bumper. Protect your windshield the same way you protect the rest of your vehicle with XPEL.",
  "Get unmatched durability and UV protection with the ultimate defense against chips, cracks, and road hazards.",
  



   ],
    brands: "XPEL",

    features: [
      {
        name: "Advanced Protection",
        symbol: <FaTemperatureLow />,
        description:
          "Defend your windshield against chips, cracks, and road debris. Literally every day wear & tear!",
      },
      {
        name: "Brilliant Clarity",
        symbol:  <FaRegEye />,
        description:
          "Maintain an unobstructed view with a virtually invisible film. You will not even notice that you have film on your glass.",
      },

      {
        name: "UV Defense",
        symbol: <BsSunFill />,
        description:
          "Block harmful UV rays and protect both your windshield and passengers against sun damage.",
      },
      {
        name: "Easy Maintenance",
        symbol: <HiThumbUp />,
        description:
          "Simple and hassle-free cleaning and upkeep with XPEL’s Maintenance Kit, that can be purchased seprately.",
      },
      {
        name: "1-Year or 12,000 miles Warranty",
        symbol: <ImCheckmark />,
        description:
          "XPEL, Inc. warrants to the owner that for one (1) year or 12,000 miles (whichever occurs first) from the date of installation.",
      },
    ],
  },
  
];
