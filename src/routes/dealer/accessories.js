import { RiGpsLine, RiWaterFlashFill } from "react-icons/ri";
import { BsShare, BsAward } from "react-icons/bs";
import { FaDigitalOcean, FaMobileAlt } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { FcRefresh } from "react-icons/fc";
import { TbArrowAutofitDown } from "react-icons/tb";

export const packagesAccessories = [
    {
      model: "HS1",
      brand: "adrenalin",
      brandLogo: "/logos/1200x300-drone-logo-white.png",
      name: "HEATED SEATS",
      image:  "/images/accessories/heatedseats_main.jpg",
      imgColor: "/images/accessories/heatedseats_main.jpg",
      images: [
        "/images/accessories/heatedseats_main.jpg",
        "/images/accessories/hseats_1.jpg",
      ],
      includes: [
        "Heating Pads",
        "Hardware & Installation",

      ],
      features: [
        {
          name: "GPS Tracking",
          symbol: <RiGpsLine color="rgb(133, 255, 62)" />,
          description: "",
        },
        {
          name: "Family Sharing",
          symbol: <BsShare color="rgb(133, 255, 62)" />,
          description: "",
        },
        {
          name: "Push Notifications",
          symbol: <MdNotificationsActive color="rgb(133, 255, 62)" />,
          description: "",
        },
        {
          name: "iOS / Android Compatible",
          symbol: <FaMobileAlt color="rgb(133, 255, 62)" />,
          description: "",
        },
      ],
      
      description: [
        "Nice and warm!"
      ],

      ident: "hs1",
      hseat: true,
      dealerPriceCar: 350.00,
      retailPriceCar: 490.00,
    },

]