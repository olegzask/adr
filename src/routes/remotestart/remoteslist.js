import { RiGpsLine, RiWaterFlashFill } from "react-icons/ri";
import { BsShare, BsAward } from "react-icons/bs";
import { FaDigitalOcean, FaMobileAlt } from "react-icons/fa";
import { GiBrokenShield } from "react-icons/gi";
import { MdNotificationsActive } from "react-icons/md";
import { FcRefresh } from "react-icons/fc";
import { TbArrowAutofitDown } from "react-icons/tb";

export const remotes = [
  {
    app: true,
    appleLink: "https://apps.apple.com/us/app/dronemobile/id380549030",
    googleLink:
      "https://play.google.com/store/apps/details?id=com.whiz.droneapp&hl=en_CA&gl=US",
    model: "DRONE",
    type: ["Smart Control"],
    brand: "Drone",
    brandLogo: "/logos/1200x300-drone-logo-white.png",
    price: 750,
    imgBW: "/images/remotes/drone-bw.jpg",
    imgColor: "/images/remotes/drone-color.jpg",
    images: [
      "/images/remotes/drone/drone_1.jpg",
      "/images/remotes/drone/drone_2.jpg",
      "/images/remotes/drone/drone_3.jpg",
      "/images/remotes/drone/drone_4.jpg",
      "/images/remotes/drone/drone_5.jpg",
    ],
    description: [
      "The Drone X1R adds unlimited range smartphone control and GPS tracking to any compatible remote start or security system (Compustar, iDatalink, iDataStart). This module is powered by LTE with 3G fallback, ensuring best-in-class coverage in Canada.",
      "Enables remote start, keyless entry & more from virtually anywhere!",
      "Control & track your car from anywhere over LTE with 3G fallback.",
      "Compatible with over 90% of vehicles on the road.",
      "Locate your vehicle using DroneMobile Maps.",
      "Receive alerts via smartphone.",
      "Set mileage-based service reminders.",
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
    range: "Unlimited",
  },
  {
    app: false,
    model: "T13SS",
    type: ["2-Way LCD"],
    brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
    price: 800,
    imgBW: "/images/remotes/t9-bw.jpg",
    imgColor: "/images/remotes/t13.jpg",
    images: [
      "/images/remotes/t13.jpg",
      "/images/remotes/remote-imgs/t13.jpg",
      "/images/remotes/remote-imgs/t13Backup.jpg",
     
    ],
    features: [
      {
        name: "2-Way LCD",
        symbol: <FcRefresh fill="rgb(14, 146, 255)" />,
        description: "",
      },
     
      {
        name: "Alarm Notifications",
        symbol: <MdNotificationsActive color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "4500 M",
    description: [
      "3000-ft max range remote kit with 2-way interactive LCD. Includes additional backup 1-way remote. Works with all Compustar remote start and security systems.",
      "Lock and start your vehivle with confidence using Compustar 2-Way remotes, which provide visual and audible confirmation when your commands are sent successfully.",
      "Along with instant command confirmation, the PRIME T9 has an interactive screen that will show you vehicle's status at all times.",
    ],
  },
  {
    app: false,
    model: "T12SS",
    type: ["2-Way LCD"],
    brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
    price: 950,
    imgBW: "/images/remotes/t12-bw.jpg",
    imgColor: "/images/remotes/t12.jpg",
    images: [
      "/images/remotes/t12.jpg",
      "/images/remotes/remote-imgs/t11_1.jpg",
      "/images/remotes/remote-imgs/t11_2.jpg",
      "/images/remotes/remote-imgs/g15ss_1.jpg",
      "/images/remotes/remote-imgs/g15ss_2.jpg",
    ],
    features: [
      {
        name: "2-Way LCD",
        symbol: <FcRefresh fill="rgb(14, 146, 255)" />,
        description: "",
      },
     
      {
        name: "Waterproof",
        symbol: <RiWaterFlashFill color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Crushproof",
        symbol: <GiBrokenShield color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Alarm Notifications",
        symbol: <MdNotificationsActive color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "4500 M",
    description: [
      "3-mile max range, USB rechargeable, IPX-7 waterproof remote kit. Includes one 2-way LCD and one 2-way LED remote. Works with all Compustar remote start and security systems.",
      "The Compustar T12 remote kit now includes a 2-way LCD remote and a 2-Wat LED remote as a backup. So no matter what, you will receive instant command confirmation when you remote start and secure your vehicle",
      "Lock and start your vehicle with confidence using Compustar 2-way remotes, which provide visual and audible confirmation when your commands are sent successfully.",
      "The Compustar T12 utilizes Digital Spread Spectrum Technology to send lock and start commands to your vehicle from up to 3-miles away.",
      "The T12 LCD remote has a built-in lithium-ion battery that you can recharge using a standard micro-USB cable.",
      "The T12 is IPX-7 waterproof and fuatures a high-strength injection molded body to withstand everyday impact.",
    ],
  },

  {
    app: false,
    model: "Q9SS",
    type: ["2-Way LCD"],
    brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
    price: 900,
    imgBW: "/images/remotes/q9-bw.jpg",
    imgColor: "/images/remotes/q9.jpg",
    images: [
      "/images/remotes/q9.jpg",
      "/images/remotes/remote-imgs/q9_1.jpg",
      "/images/remotes/remote-imgs/q9_2.jpg",
      "/images/remotes/remote-imgs/g15ss_1.jpg",
      "/images/remotes/remote-imgs/g15ss_2.jpg",
    ],
    features: [
      {
        name: "2-Way LCD",
        symbol: <FcRefresh fill="rgb(14, 146, 255)" />,
        description: "",
      },
     
      {
        name: "Alarm Notifications",
        symbol: <MdNotificationsActive color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "3000 M",
    description: [
      "3000-ft max range remote kit with 2-way interactive LCD. Includes additional backup 1-way remote. Works with all Compustar remote start and security systems.",
      "Lock and start your vehivle with confidence using Compustar 2-Way remotes, which provide visual and audible confirmation when your commands are sent successfully.",
      "Checking on your vehicle's safety and status is easier with the Q9. The Backlit, color LCD provides better visibility and animations to confirm every successful command.",
      "Start and secure your vehicle in two different ways depending on what's most comfortable for your hand. Use the side buttons OR te 4-in-1 button on the front. Tap to lock, double tap to unlock, and hold to remote start/stop.",
    ],
  },

  {
    app: false,
    model: "G15SS",
    type: ["2-Way LED"],
    brand: "Compustar PRO",
    brandLogo: "/logos/compustar_logo.png",
    price: 800,
    imgBW: "/images/remotes/g15-bw.jpg",
    imgColor: "/images/remotes/pg15.jpg",
    images: [
      "/images/remotes/pg15.jpg",
      "/images/remotes/remote-imgs/g15ss_1.jpg",
      "/images/remotes/remote-imgs/g15ss_2.jpg",
    ],
    features: [
      {
        name: "2-Way LED",
        symbol: <FcRefresh />,
        description: "",
      },
      {
        name: "Waterproof",
        symbol: <RiWaterFlashFill color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Crushproof",
        symbol: <GiBrokenShield color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Digital Spread Spectrum",
        symbol: <FaDigitalOcean color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "3000 M",
    description: [
      "Lock and start your vehivle with confidence using Compustar 2-Way remotes, which provide visual and audible confirmation when your commands are sent successfully.",
      "The 2-Way PRO G15 features a high-strength injection molded body that is water-resistand and withstands everyday impact.",
    ],
  },
  {
    app: false,
    model: "G15FM",
    type: ["1-Way LED"],
    brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
    price: 700,
    imgBW: "/images/remotes/g15-bw.jpg",
    imgColor: "/images/remotes/wg15.jpg",
    images: [
      "/images/remotes/wg15.jpg",
      "/images/remotes/remote-imgs/15fmx.jpg",
      "/images/remotes/remote-imgs/15fmx2.jpg",
    ],
    features: [
    
      {
        name: "1-Way LED",
        symbol: <TbArrowAutofitDown color="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "Waterproof",
        symbol: <RiWaterFlashFill color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "1000 M",
    description: [
      "Lock and start your vehicle with Compustar 1-Way remotes. Please note, 1-Way remotes do not send confimation if vehicle was successfully started.",
      "The 1-Way G15 features a high-strength injection molded body that is water-resistand and withstands everyday impact.",
    ],
  },

  {
    app: false,
    model: "WR3",
    type: ["1-Way LED"],
    brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
    price: 700,
    imgBW: "/images/remotes/g15-bw.jpg",
    imgColor: "/images/remotes/wr3.jpg",
    images: [
      "/images/remotes/wr3.jpg",
      "/images/remotes/remote-imgs/wr3.jpg",
      ,
    ],
    features: [
    
      {
        name: "1-Way LED",
        symbol: <TbArrowAutofitDown color="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "Waterproof",
        symbol: <RiWaterFlashFill color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "500 M",
    description: [
      "Lock and start your vehicle with Compustar 1-Way remotes. Please note, 1-Way remotes do not send confimation if vehicle was successfully started.",
      "The 1-Way WR3 has only START & STOP Engine functionality. Just a most basic remote start.",
    ],
  },
];
