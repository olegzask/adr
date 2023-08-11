import { FaTemperatureLow, FaWifi, FaRegEye } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { HiThumbUp } from "react-icons/hi";
import { ImCheckmark } from "react-icons/im";
import { MdWaterDrop, MdHealing } from "react-icons/md";
import { FaDumbbell, FaShieldAlt } from "react-icons/fa";

export const ppfOptions = [
  {
    tintType: "SUNTEK ULTRA",
    img: "/logos/ultra.png",
    description:
      "SunTek® PPF Ultra is scientifically formulated to help maintain the beauty and integrity of vehicle finishes—for many years in all kinds of weather. It’s a fusion of innovative film technologies created to make a lasting impression. Our high-performing film features an advanced HydroResist™ technology. When its improved stain resistant top coat is combined with Ultra’s impressive self-healing properties, a durable, high-gloss barrier is created, helping to shield against water, insects, road debris, and other stains. Premium PPF Ultra will help protect your car for years and is backed by a manufacturer’s 10-year limited warranty",
    brands: "Suntek",

    features: [
      {
        name: "Heat Activated Self-Healing Topcoat",
        symbol: <FaTemperatureLow />,
        description:
          "Repairs scratches with minimal effort; film self-heals utilizing heat from a vehicle’s engine or the sun.",
      },
      {
        name: "Clarity & Shine",
        symbol: <BsSunFill />,
        description:
          "Outstanding clear finish and optical clarity makes film nearly impossible to detect once installed.",
      },

      {
        name: "Lasting Resistance",
        symbol: <FaRegEye />,
        description:
          "HydroResist™ top coat increases stain resistance and the film’s longevity by limiting water and dirt accumulation on the surface.",
      },
      {
        name: "Outstanding Endurance",
        symbol: <HiThumbUp />,
        description:
          "Automotive finishes stay fresh and flawless longer with a film that helps shield against damage caused by rocks, insects, and other road debris.",
      },
      {
        name: "10-Year Warranty",
        symbol: <ImCheckmark />,
        description:
          "Professionally sold and installed PPF Ultra is backed by a manufacturer’s 10-year limited warranty against cracking, bubbling or yellowing.",
      },
    ],
  },
  {
    tintType: "SUNTEK REACTION",
    img: "/images/logos/reaction.jpg",
    description:
      "Premium protection designed to last. SunTek Paint Protection Film Ultra is scientifically formulated to help maintain the beauty and integrity of vehicle finishes for many years, in all kinds of weather. It’s a combination of innovative film technologies that we stand behind with a 10-year limited warranty.",
    brands: "Suntek",

    features: [
      {
        name: "Lasting Resistance",
        symbol: <MdWaterDrop />,
        description:
          "HydroResist™ top coat increases stain resistance and product longevity by limiting water and dirt accumulation on the film's surface.",
      },
      {
        name: "Extra Endurance",
        symbol: <FaDumbbell />,
        description:
          "Automotive finishes stay fresh and flawless longer with a film that helps offer the most power to shield against damage caused by rocks, salt, insects, and other road debris.",
      },

      {
        name: "Self-Healing",
        symbol: <MdHealing />,
        description:
          "Repairing scratches is almost effortless; film self-heals using heat from a vehicle’s engine or the sun.",
      },
      {
        name: "Great Looks",
        symbol: <HiThumbUp />,
        description:
          "Paint Protection Film Ultra is available in matte and high gloss finishes. Outstanding optical clarity makes film nearly impossible to detect once installed.",
      },
      {
        name: "10-Year Limited Warranty",
        symbol: <FaShieldAlt />,
        description:
          "The manufacturer warrants professionally sold and applied SunTek® Paint Protection Film Ultra series against cracking, bubbling or yellowing for a period of ten years from the date of purchase of the Product. This 10-year limited warranty applies only to SunTek Paint Protection Film Ultra series. Other restrictions apply; contact a SunTek dealer or a customer service representative for details.",
      },
    ],
  },
];
