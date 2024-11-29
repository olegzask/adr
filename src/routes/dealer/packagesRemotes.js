import { RiGpsLine, RiWaterFlashFill } from "react-icons/ri";
import { BsShare, BsAward } from "react-icons/bs";
import { FaDigitalOcean, FaMobileAlt, FaUsb } from "react-icons/fa";
import { GiBrokenShield } from "react-icons/gi";
import { MdNotificationsActive } from "react-icons/md";
import { FcRefresh } from "react-icons/fc";
import { TbArrowAutofitDown } from "react-icons/tb";
import { IoIosRadio } from "react-icons/io"

export const packagesRemotes = [
    {
      altname: "remote-start-drone", 
      model: "DRONE",
      brand: "DRONE",
      brandLogo: "/logos/1200x300-drone-logo-white.png",
      name: "Drone",
      image: "/images/remotes/drone-color2.jpg",
      imgColor: "/images/remotes/drone-color.jpg",
      images: [
        "/images/remotes/drone/drone_1.jpg",
        "/images/remotes/drone/drone_2.jpg",
        "/images/remotes/drone/drone_3.jpg",
        "/images/remotes/drone/drone_4.jpg",
        "/images/remotes/drone/drone_5.jpg",
      ],
      includes: [
        "Hardware & installation",
        "1 Year Subscription",
        "Range: Unlimited"

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
        "The Drone X1R adds unlimited range smartphone control and GPS tracking to any compatible remote start or security system (Compustar, iDatalink, iDataStart). This module is powered by LTE with 3G fallback, ensuring best-in-class coverage in Canada.",
        "Enables remote start, keyless entry & more from virtually anywhere!",
        "Control & track your car from anywhere over LTE with 3G fallback.",
        "Compatible with over 90% of vehicles on the road.",
        "Locate your vehicle using DroneMobile Maps.",
        "Receive alerts via smartphone.",
        "Set mileage-based service reminders.",
      ],

      ident: "drone",
      remote: true,
      dealerPriceCar: 700.00,
      retailPriceCar: 870.00,
    },

    {
      altname: "remote-start-t13", 
      model: "T13",
      name: "RS-06",
      brand: "Compustar",
      brandLogo: "/logos/compustar_logo.png",
    imgColor: "/images/remotes/pro13_1.png",
    images: [
      "/images/remotes/pro13_1.png",
      "/images/remotes/pro13_2.png",
      "/images/remotes/pro13_3.png",
    ],
    features: [
      
      {
        name: "2-Way LCD",
        symbol: <FcRefresh fill="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "Smartphone Control",
        symbol: <FaMobileAlt fill="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "Proximity Lock & Unlock",
        symbol: <IoIosRadio fill="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "USB Rechargable",
        symbol: <FaUsb fill="rgb(14, 146, 255)" />,
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
    description: [
      "The all-new PRO T13 is the industry’s most advanced remote start and security system!",
      "5000-Meters max range remote kit with 2-way interactive LCD. Includes additional backup 1-way remote. Works with all Compustar remote start and security systems.",
      "Lock and start your vehivle with confidence using Compustar 2-Way remotes, which provide visual and audible confirmation when your commands are sent successfully.",
      "Compustar's next generation of PRO 2-way remotes features built-in proximity sensors that automatically unlock the doors when you come within three to six feet of your vehicle."
    ],
      image: "/images/remotes/pro13_1.png",
      includes: [
        "Model: T13",
        "2-Way LCD + 2-Way LED",
        "Includes DRONE",
        "Hardware & installation",
        "3 year warranty",
        "Range: up to 5000M",
        "Drone Range: Unlimited"

      ],
    ident: "t13ss",
      remote: true,
      dealerPriceCar: 940.00,
      retailPriceCar: 1195.00,
    },

    {
      altname: "remote-start-t12", 
        model: "T12SS",
        brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
    imgColor:   "/images/remotes/r5_1.png",
    images: [
     "/images/remotes/r5_1.png",
     "/images/remotes/r5_2.png",
     "/images/remotes/r5_3.png",
    ],
    features: [
      {
        name: "2-Way LCD",
        symbol: <FcRefresh fill="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "Proximity Lock & Unlock",
        symbol: <IoIosRadio fill="rgb(14, 146, 255)" />,
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
    description: [
      "3-mile max range, USB rechargeable, IPX-7 waterproof remote kit. Includes one 2-way LCD and one 2-way LED remote. Works with all Compustar remote start and security systems.",
      "The Compustar T12 remote kit now includes a 2-way LCD remote and a 2-Wat LED remote as a backup. So no matter what, you will receive instant command confirmation when you remote start and secure your vehicle",
      "Lock and start your vehicle with confidence using Compustar 2-way remotes, which provide visual and audible confirmation when your commands are sent successfully.",
      "The Compustar T12 utilizes Digital Spread Spectrum Technology to send lock and start commands to your vehicle from up to 3-miles away.",
      "The T12 LCD remote has a built-in lithium-ion battery that you can recharge using a standard micro-USB cable.",
      "The T12 is IPX-7 waterproof and fuatures a high-strength injection molded body to withstand everyday impact.",
    ],
        name: "RS-05",
        image: "/images/remotes/r5_1.png",
        includes: [
        "Model: R5",

          "2-Way LED + 2-Way LED",
        "Includes DRONE",
          "Hardware & installation",
          "3 year warranty",
          "Range: up to 4500M",
          "Drone Range: Unlimited"


        ],
      ident: "t12ss",
        remote: true,
        dealerPriceCar: 850.00,
        retailPriceCar: 990.00,
      },

      {
        altname: "remote-start-q9", 
        model: "Q9SS",
        brand: "Compustar",
        brandLogo: "/logos/compustar_logo.png",
        imgColor: "/images/remotes/g18_1.png",
        images: [
          "/images/remotes/g18_1.png",
          "/images/remotes/g18_2.png",
          "/images/remotes/g18_3.png",
          "/images/remotes/g18_4.png",
          "/images/remotes/g18_5.png",
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
            name: "RS-04",
            image: "/images/remotes/g18_1.png",
            includes: [
        "Model: G18",

              "2-Way LED + 2-Way LED",
        "Includes DRONE",

              "Hardware & installation",
              "3 year warranty",
              "Range: up to 1000M",
        "Drone Range: Unlimited"

    
            ],
          ident: "q9ss",
    
            remote: true,
            dealerPriceCar: 695.00,
            retailPriceCar: 990.00,
          },

      {
        altname: "remote-start-t9", 
        model: "T9SS",
        brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
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
    description: [
      "3-mile max range, USB rechargeable, IPX-7 waterproof remote kit. Includes one 2-way LCD and one 2-way LED remote. Works with all Compustar remote start and security systems.",
      "The Compustar T9 remote kit now includes a 2-way LCD remote and a 2-Wat LED remote as a backup. So no matter what, you will receive instant command confirmation when you remote start and secure your vehicle",
      "Lock and start your vehicle with confidence using Compustar 2-way remotes, which provide visual and audible confirmation when your commands are sent successfully.",
      "The Compustar T9 utilizes Digital Spread Spectrum Technology to send lock and start commands to your vehicle from up to 3-miles away.",
      "The T9 LCD remote has a built-in lithium-ion battery that you can recharge using a standard micro-USB cable.",
      "The T9 is IPX-7 waterproof and fuatures a high-strength injection molded body to withstand everyday impact.",
    ],
        name: "RS-03",
        image: "/images/remotes/q9.jpg",
        includes: [
        "Model: Q9FMX",

          "2-Way LCD + 1-Way LED",
          "Hardware & installation",
          "3 year warranty",
          "Range: up to 1000M"

        ],
      ident: "t9ss",
        remote: true,
        dealerPriceCar: 590.00,
        retailPriceCar: 990.00,
      },

    

      {
        altname: "remote-start-g15", 
    model: "2WG18",
    brand: "Compustar PRO",
    brandLogo: "/logos/compustar_logo.png",
    imgColor: "/images/remotes/ftx2600_1.png",
    images: [
      "/images/remotes/ftx2600_1.png",
      "/images/remotes/ftx2600_2.png",
      "/images/remotes/ftx2600_3.png",
     
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
    range: "1000 M",
    description: [
      "Lock and start your vehivle with confidence using Compustar 2-Way remotes, which provide visual and audible confirmation when your commands are sent successfully.",
      "The 2-Way PRO G15 features a high-strength injection molded body that is water-resistand and withstands everyday impact.",
    ],
        name: "RS-02+",
        image: "/images/remotes/ftx2600_1.png",
        includes: [
        "Model: FTX2600",

          "2-Way LED + 2-Way LED",
          "Hardware & installation",
          "3 year warranty",
          "Range: up to 3000M"

        ],
      ident: "g15ss",

        remote: true,
        dealerPriceCar: 650.00,
        retailPriceCar: 990.00,
      },

    //   {
    //     altname: "remote-start-g15", 
    // model: "G15FM",
    // brand: "Compustar",
    // brandLogo: "/logos/compustar_logo.png",
    // imgColor: "/images/remotes/g18_1.png",
    // images: [
    //  "/images/remotes/g18_1.png",
    //  "/images/remotes/g18_2.png",
    //  "/images/remotes/g18_3.png",
    //  "/images/remotes/g18_4.png",
    //  "/images/remotes/g18_5.png",
    // ],
    // features: [
    
    //   {
    //     name: "1-Way LED",
    //     symbol: <TbArrowAutofitDown color="rgb(14, 146, 255)" />,
    //     description: "",
    //   },
    //   {
    //     name: "Waterproof",
    //     symbol: <RiWaterFlashFill color="rgb(133, 255, 62)" />,
    //     description: "",
    //   },
    //   {
    //     name: "3 Year Warranty",
    //     symbol: <BsAward color="rgb(133, 255, 62)" />,
    //     description: "",
    //   },
    // ],
    // range: "1000 M",
    // description: [
    //   "Lock and start your vehicle with Compustar 1-Way remotes. Please note, 1-Way remotes do not send confimation if vehicle was successfully started.",
    //   "The 1-Way G15 features a high-strength injection molded body that is water-resistand and withstands everyday impact.",
    // ],
    //     name: "RS-02",
    //     image: "/images/remotes/wg15.jpg",
    //     includes: [
    //     "Model: G15FM",

    //       "2-Way LED + 1-Way LED",
    //       "Hardware & installation",
    //       "3 year warranty",
    //       "Range: up to 450M"

    //     ],
    //   ident: "g15fm",
    //     remote: true,
    //     dealerPriceCar: 550.00,
    //     retailPriceCar: 890.00,
    //   },

      {
        altname: "remote-start-wr3", 
    model: "WR3",
    brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
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
        name: "RS-01",
        image: "/images/remotes/wr3.jpg",
        includes: [
        "Model: R3",

          "1-Way LED + 1-Way LED",
          "Hardware & installation",
          "3 year warranty",
          "Range: up to 450M"

        ],
      ident: "wr3",
        remote: true,
        dealerPriceCar: 460.00,
        retailPriceCar: 890.00,
      },

      {
        altname: "remote-start-cs", 
    model: "CS",
    brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
    imgColor: "/images/remotes/supply.jpg",
    images: [
      "/images/remotes/supply.jpg",
      
    ],
    features: [
    
      {
        name: "N/A",
        symbol: <TbArrowAutofitDown color="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "N/A",
        symbol: <RiWaterFlashFill color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "N/A",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "N/A",
    description: [
      "Have your own hardware & need it installed? Supply us with your hardware & we will do the work.",
    ],
        name: "RS-C/S",
        image: "/images/remotes/supply.jpg",
        includes: [
        

          "Supply own Hardware",
          "Compustar or iData brands",
          "Hardware & installation"
          

        ],
      ident: "cs",
        remote: true,
        dealerPriceCar: 280.00,
        retailPriceCar: 345.00,
      },

]