import { BsCameraVideo, BsAward } from "react-icons/bs";
import { FaCarCrash, FaParking, FaWifi, FaCar } from "react-icons/fa";
import { VscScreenFull } from "react-icons/vsc"
import { MdSpeed, MdLightMode } from "react-icons/md";
import { TbPhotoSensor3 } from "react-icons/tb"

export const dashcams = [
  {
    app: true,
    appleLink:
      "https://apps.apple.com/ca/app/momento-m6-dash-cam-viewer/id1447529243",
    googleLink:
      "https://play.google.com/store/apps/details?id=kr.e777.mcnex&hl=en_CA&gl=US&pli=1",
    model: "M6",
    name: "M6",
    category: "DashCam",
    type: ["Wi-Fi HD Dual Dash Camera"],
    brand: "Momento",
    brandLogo: "/logos/logo-momento-black.png",
    price: 750,
    imgBW: "",
    imgColor: "/images/dashcams/M6/M6-angled.png",
    image: "/images/dashcams/M6/M6-angled.png",

    images: [
      "/images/dashcams/M6/M6-angled.png",
      "/images/dashcams/M6/M6-back.png",
      "/images/dashcams/M6/M6-front.png",
      "/images/dashcams/M6/M6-left-side.png",
      "/images/dashcams/M6/M6-rearcam.png",
      "/images/dashcams/M6/M6-top.png",
      "/images/dashcams/M6/M6-with-rearcam.png",
      "/images/dashcams/M6/32GB.png",
    ],
    includes: [
      "Hardware & installation",
      "32GB SD Card",
      "Manufacturer's Warranty"

    ],
    features: [
      {
        name: "Driving Mode",
        symbol: <BsCameraVideo color="rgb(133, 255, 62)" />,
        description:
          "Continuously records everything at the front and rear of your vehicle while driving.",
      },
      {
        name: "Impact Sensors",
        symbol: <FaCarCrash color="rgb(133, 255, 62)" />,
        description:
          "Stores 15 seconds before and after any impact or shock your vehicle experiences",
      },
      {
        name: "Parking Mode",
        symbol: <FaParking color="rgb(133, 255, 62)" />,
        description:
          "Even when you're parked, the M6 has motion sensors that trigger recordings.",
      },
      {
        name: "Low-light Sensitivity",
        symbol: <MdLightMode color="rgb(133, 255, 62)" />,
        description:
          "The M6 records in Full HD, giving you crystal clear footage in 1080p. Additionally, the M6 is equipped with a Sony Exmor-R image sensor that is enhanced with STARVIS, the industry-standard for surveillance applications, ensuring low-light performance.",
      },
      {
        name: "2 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description:
          "The M6 is protected by a 2-Year manufacturer's Warranty. This warranty covers both front and rear cameras, and protects your purchase from defects or malfunctioning parts.",
      },
    ],
    range: "Wi-Fi enabled Full HD",
    description: [
      "The M6 is Momento's first dash cam that connects to your smartphone by creating a small and secure Wi-Fi hotspot inside your vehicle that only you can access through the Momento App. In addition to giving you easy access to your video files, the Momento App also provides additional driving insights such as speed, location and trip data.",
      "Wi-Fi enabled Full HD (1080p) dash camera system including front camera, rear camera, GPS antenna, and 32GB micro-SD memory card. The Momento M6 is a smart dash cam that provides 270° of surveillance coverage  and records footage that you can view from the Momento smartphone app!",
      "The Momento M6 is a smart dash cam that provides 270° of surveillance coverage – and records footage that you can view from the Momento smartphone app!",
      "The M6 records in Full HD, giving you crystal clear footage in 1080p. Additionally, the M6 is equipped with a Sony Exmor-R image sensor that is enhanced with STARVIS, the industry-standard for surveillance applications, ensuring low-light performance.",
      "The M6 includes a 32GB micro-SD card that can be upgraded to any Class 10 micro-SD card up to 256GB. That's twice as much as our leading competitors! Plus, its easy-to-use file management system best utilizes your storage while ensuring your most important videos stay saved.",
      "The M6 is protected by a 2-Year manufacturer’s Warranty. This warranty covers both front and rear cameras, and protects your purchase from defects or malfunctioning parts*.",
    ],
  },
  {
    app: true,
    appleLink:
      "https://apps.apple.com/ca/app/momento-m6-dash-cam-viewer/id1447529243",
    googleLink:
      "https://play.google.com/store/apps/details?id=kr.e777.mcnex&hl=en_CA&gl=US&pli=1",
      name: "M7 Wi-Fi",
    model: "M7",
    category: "DashCam",
    type: ["Wi-Fi HD Dual Dash Camera"],
    brand: "Momento",
    brandLogo: "/logos/logo-momento-black.png",
  
    imgBW: "",
    imgColor: "/images/dashcams/M7/m7-1.PNG",
    image: "/images/dashcams/M7/m7-1.PNG",

    images: [
      "/images/dashcams/M7/m7-1.PNG",
      "/images/dashcams/M7/m7-2.PNG",
      "/images/dashcams/M7/m7-3.PNG",
      "/images/dashcams/M7/m7-4.PNG",
      "/images/dashcams/M7/m7-5.PNG",



    ],

    includes: [
      "Hardware & installation",
      "64GB SD Card",
      "Manufacturer's Warranty"

    ],
    features: [
      {
        name: "Built-In Wi-Fi",
        symbol: <FaWifi color="rgb(133, 255, 62)" />,
        description:
          "",
      },
      {
        name: "2K QHD Resolution",
        symbol: <VscScreenFull color="rgb(133, 255, 62)" />,
        description:
          "",
      },
      {
        name: "Front + Rear Camera",
        symbol: <BsCameraVideo color="rgb(133, 255, 62)" />,
        description:
          "",
      },
      {
        name: "3-Channel Camera",
        symbol: <BsCameraVideo color="rgb(133, 255, 62)" />,
        description:
          "",
      },
      {
        name: "Enchanced Image Sensor",
        symbol: <TbPhotoSensor3 color="rgb(133, 255, 62)" />,
        description:
          "",
      },
      {
        name: "Driving Mode",
        symbol: <FaCar color="rgb(133, 255, 62)" />,
        description:
          "",
      },
      {
        name: "Parking Mode",
        symbol: <FaParking color="rgb(133, 255, 62)" />,
        description:
          "",
      },
      {
        name: "Motion / Impact / Radar",
        symbol: <FaCarCrash color="rgb(133, 255, 62)" />,
        description:
          "",
      },
      {
        name: "Built-In GPS / Speed Antenna",
        symbol: <MdSpeed color="rgb(133, 255, 62)" />,
        description:
          "",
      },
    
      {
        name: "2 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description:
          "",
      },
    ],
    range: "Wi-Fi enabled Full HD",
    description: [
      "Compact. Powerful. Interactive. M7 is Momento’s most advanced dash camera yet – while also being our most user-friendly system as well. Momento M7 takes vehicle security and driver safety to a new level with 24/7/365 surveillance protection on and off the road.",
      "The most important factor to consider in shopping for a dash camera is image resolution. Recording at 2K QHD at 30 frames/second, the Momento M7 provides the clearest picture we have to offer. In the event of a collision or dispute on the road, the M7 will provide crucial video evidence with clear details (license plates, faces, time, GPS) to protect you.",
      "With the roads getting crazier every day, there has never been a better time to invest in a dash camera system. The Momento M7 is an all-in-one dash camera system that adds discreet, surveillance-grade cameras at the front and rear of your vehicle to protect you from break-ins, hit-and-runs, and collision fraud.",
      "Momento M7 introduces “Eco Mode” – our new battery-saving technology. When Eco Mode is activated while parked, your M7 dash camera uses radar to detect motion, instead of the image sensor – cutting battery consumption by up to 90%! This protects your vehicle’s battery while keeping your front camera active.",
      "The Momento M7 front camera utilizes a SmartSens AI-Series image sensor, which was designed for surveillance applications in all lighting conditions. So whether you are driving at night or parked in a shared parking garage, M7 will dynamically adjust exposure and white balance to capture an optimized picture.",
      "Unlike our competitors, Momento M7 includes both front and rear cameras, giving you comprehensive surveillance around your vehicle. The M7 even has an additional video input to add a third camera, such as the IC6 interior camera.",
      "Our most advanced dash camera is also our easiest to use! The M7 front camera has a built-in LCD for reviewing footage, starting recordings, and configuring your dash camera system. But don’t worry about distracted driving as the LCD will go to sleep while you are driving.",
      "Momento M7 is our first dash camera to feature three video channels. By default, the front and rear cameras occupy channels 1 and 2. For the third video input, Momento offers the IC6 interior camera.",
      "Equipped with IR LEDs for night vision, the IC6 is the perfect accessory for rideshare or fleet applications.",






    ],
    dealerPriceCar: 750.95,
    retailPriceCar: 990.95,
  },
];
