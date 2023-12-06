import { FaTemperatureLow, FaWifi, FaRegEye } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { HiThumbUp } from "react-icons/hi";

export const tintOptions = [
  {
    tintType: "Nano-Ceramic Film",
    office: false,
    img: "/logos/primeXr.png",
    description:
  ["The Pinnacle Of High Performance Tint. Period.", 
  "There's no better place to start than the top. If you're wanting the most out of your next window tint application, it's time to start looking at nano-ceramic film options from XPEL.", 
  "Designed for maximum UV protection, this window tint can keep your vehicle cooler & more comfortable wherever you're headed.",
  "The Skin Cancer Foundation recommends PRIME XR Window Tint as an effective UV protectant."],
    brands: "Suntek",
    shades: [5, 20, 35, 50],
    features: [
      {
        name: "Advanced Technology",
        symbol: <CgMenuGridO />,
        description:
          "Ceramic non-metal technology and construction. CIR is produced with a layer containing ceramic nanoparticles, invisible to the human eye. ",
      },
      {
        name: "Powerfull Rejection & Blocking",
        symbol: <FaTemperatureLow />,
        description:
          "Outstanding heat and infrared rejection, glare reduction and UV blocking protection",
      },
      {
        name: "UV Ray Protection",
        symbol: <BsSunFill />,
        description:
          "Ceramic Film provides SPF 1,000 protection that effectively blocks over 99% of harmful UV rays that can lead to numerous skin cancers, premature aging and skin cell damage.",
      },
      {
        name: "Distinctive Look",
        symbol: <FaRegEye />,
        description:
          "In the past, keeping cool meant choosing a darker shade of tint. The multilayer nano-ceramic construction provides ultra-high performance without reducing outbound visibility.",
      },
      {
        name: "Crystal Clear Signal",
        symbol: <FaWifi />,
        description:
          "In a digital world, clear communication is key. Ceramic Window Tint construction will not interfere with radio, cellular, or bluetooth signals.",
      },
    ],
  },
  {
    tintType: "Dyed Film",
    img: "/logos/primeCs.png",
    description:
      ["Safety And Color Stability Like Never Before", 
      "hen comfort and cost is key, dyed window tint won't let you down. ", 
      "PRIME CS BLACK can cut out the glare, protect your skin from harmful UV rays, and make any journey that much more enjoyable.",
      "The Skin Cancer Foundation recommends PRIME CS BLACK ™ Window Tint as an effective UV protectant.", 
      ],
    brands: "Suntek",
    shades: [5, 20, 35, 50],
    features: [
      {
        name: "Reduces Glare",
        symbol: <FaRegEye />,
        description:
          "Dyed Window Tint reduces the sun's glare, enhancing visibility and reducing eye strain.",
      },
      {
        name: "Keeps You Comfortable",
        symbol: <FaTemperatureLow />,
        description:
          "Dyed Window Tint blocks solar heat radiation to keep your vehicle at a comfortable temperature and improve fuel efficiency.",
      },
      {
        name: "UV Ray Protection",
        symbol: <BsSunFill />,
        description:
          "Carbon Window Tint provides SPF 500 protection that effectively blocks over 99% of harmful UV rays that can lead to numerous skin cancers, premature aging and skin cell damage.",
      },
      {
        name: "Crystal Clear Signal",
        symbol: <FaWifi />,
        description:
          "Dyed Window Tint contains no metalized particles ensuring that it does not interfere with radio, cellular, or Bluetooth signals.",
      },
      {
        name: "Looks Good",
        symbol: <HiThumbUp />,
        description:
          "The black color of Dyed Window Tint remains the same over the years and never fades or turns purple.",
      },
    ],
  },
];
