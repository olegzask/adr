import { FaTemperatureLow, FaWifi, FaRegEye } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { HiThumbUp } from "react-icons/hi";
import { ImCheckmark } from "react-icons/im";
import { MdWaterDrop, MdHealing } from "react-icons/md";
import { FaDumbbell, FaShieldAlt } from "react-icons/fa";

export const ppfOptions = [
  {
    tintType: "ULTIMATE PLUS",
    img: "/logos/ultimatePlus.png",
    description:
  ["PROTECTION FOR EVERYTHING YOU CAN IMAGINE",
  "World's first self-healing paint protection film.",
  "ULTIMATE PLUS ™ raises the bar once again with an unparalleled high gloss finish & improved impact protection. ",
  " ULTIMATE PLUS is designed to provide you with the peace of mind you need on the open road, keeping your vehicle's surfaces safe from things like gravel, oils, bug acids, bird droppings, and stopping paint chips before they start.",



   ],
    brands: "XPEL",

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
        name: "Discoloration & Stain Resistant",
        symbol: <FaRegEye />,
        description:
          "Don't worry about specs, spots, or splotches from contaminants. ULTIMATE PLUS is stain resistant & will maintain clarity under the harshest conditions.",
      },
      {
        name: "Prevents Wear & Tear",
        symbol: <HiThumbUp />,
        description:
          "Stop rock chips, nicks & scratches in the paint, and keep your vehicle looking as good as the day it rolled off the lot.",
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
    tintType: "ULTIMATE FUSION",
    img: "/logos/ultimateFusion.png",
    description:
      ["NEXT LEVEL DUAL-PURPOSE PROTECTION", 
      "ULTIMATE FUSION is an optically clear, high gloss, self-healing film that protects vehicles from rock chips, scuffs, and light scratches.",
      "Developed with a hydrophobic top-coat, the film’s naturally slick surface helps repel water, making protected surfaces easier to wash and stay clean.", 
      
      ],
    brands: "XPEL",

    features: [
      {
        name: "Easy Clean Surface",
        symbol: <MdWaterDrop />,
        description:
          "Slick surface, easy-clean efficiency where water beads faster, taking dirt with it",
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
          "Professionally sold and installed XPEL Ultimate Fusion is backed by a manufacturer’s 10-year limited warranty against cracking, bubbling or yellowing.",
      },
    ],
  },
];
