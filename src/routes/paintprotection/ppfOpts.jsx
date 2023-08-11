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
  ["SunTek® PPF Ultra is scientifically formulated to help maintain the beauty and integrity of vehicle finishes—for many years in all kinds of weather.",
   "It’s a fusion of innovative film technologies created to make a lasting impression. Our high-performing film features an advanced HydroResist™ technology.",
    "When its improved stain resistant top coat is combined with Ultra’s impressive self-healing properties, a durable, high-gloss barrier is created, helping to shield against water, insects, road debris, and other stains." ,
    "Premium PPF Ultra will help protect your car for years and is backed by a manufacturer’s 10-year limited warranty"],
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
    img: "/logos/reaction.png",
    description:
      ["SunTek Reaction is packed full of advanced PPF and ceramic coating features.", 
      "The new super hydrophobic1 topcoat provides up to 25% increased resistance against damage from harsh elements such as acid rain, bird droppings and tree sap.",
       "Insects and dirt wash away effortlessly from Reaction’s slick surface with easy-clean efficiency—leaving behind an envy-inducing shine.",
      "Professionally sold and installed Reaction PPF is backed by a manufacturer’s 12-year limited warranty, our best warranty to date"],
    brands: "Suntek",

    features: [
      {
        name: "Easy Clean Surface",
        symbol: <MdWaterDrop />,
        description:
          "OEM-trusted Tetrashield™ technology; slick surface, easy-clean efficiency where water beads faster, taking dirt with it",
      },
      {
        name: "Stain Fighting",
        symbol: <FaShieldAlt/>,
        description:
          "Up to 25% increased resistance against damage from harsh elements such as acid rain, bird droppings and tree sap",
      },

      {
        name: "Self-Healing",
        symbol: <MdHealing />,
        description:
          "Repairing scratches is almost effortless; film self-heals using heat from a vehicle’s engine or the sun.",
      },
      {
        name: "Clarity & Shine",
        symbol: <BsSunFill />,
        description:
          "Noticeably clear finish with intense gloss and no orange peel appearance. Nearly impossible to detect once installed.",
      },

      {
        name: "12-Year Warranty",
        symbol: <ImCheckmark />,
        description:
          "Professionally sold and installed Suntek Reaction is backed by a manufacturer’s 12-year limited warranty against cracking, bubbling or yellowing.",
      },
    ],
  },
];
