import { FaTemperatureLow, FaWifi, FaRegEye } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { HiThumbUp } from "react-icons/hi";

export const tintOptions = [
  {
    tintType: "Ceramic Film",
    office: false,
    img: "/images/services-images/suntek-tint.jpg",
    description:
      "Ceramic nanoparticles give SunTek® CIR™ its upgrade in tint protection. This advanced ceramic technology helps enhance heat and infrared rejection while its non-metal construction minimizes signal interference for clear communications. Performance and appearance are a priority with CIR. Comfortable cabin temperatures are maintained while 99% of damaging UV rays are blocked. Available in a range of shade levels, this non-reflective tint is backed by a manufacturer’s lifetime limited warranty1 with protection against change in color.",
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
    tintType: "Carbon Film",
    img: "/images/services-images/suntek-tint.jpg",
    description:
      "SunTek® Carbon Series and CXP™ tint Series are engineered to meet today’s performance demands. Carbon construction gives our original Carbon Series and the upgraded CXP™ (Carbon Extra Performance) Series a non-reflective appearance in impressive shades of black to help deliver your desired level of solar protection. A manufacturer’s lifetime limited warranty1 protects this duo against color changes. Carbon Series is constructed with innovative carbon technology for good heat rejection, glare reduction, and U.V. protection. CXP™ features non-metal nano-hybrid carbon composition with outstanding infrared rejection for additional interior cooling.",
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
