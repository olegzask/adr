import React, { useContext } from "react";
import { BooleanContext } from "../../store";

export const services = [
  {
    altname: "remote-start", 
    name: "Remote Start",
    description:
      ["Professional remote start installation for your vehicle, enhancing convenience and comfort.",
    "Expert technicians ensuring seamless integration and reliable performance.",
  "Enjoy the luxury of starting your car from afar, tailored to fit your specific vehicle.",
"Remote start solutions that prioritize security, ease, and your peace of mind.",
"Our services encompass cutting-edge technology like DRONE, a premier mobile app for advanced remote start functionality."],
    image: "images/services-images/t13S.jpg",
    link: "services/remote-start-edmonton",
  },
  {
    altname: "window-tinting", 
    name: "Window Tinting",
    id: "wt",
    description: ["Our Automotive Window Tint service offers a professional solution to enhance your driving experience.", "We provide expert consultation, premium window tint films, and professional installation.", " Our films reduce heat and UV rays, minimize glare, enhance privacy, and add aesthetic appeal.", "Experience a comfortable, safe, and stylish driving experience with our high-quality window tinting services." ],
    // description:
    //   "Our Automotive Window Tint service offers a professional solution to enhance your driving experience. We provide expert consultation, premium window tint films, and professional installation. Our films reduce heat and UV rays, minimize glare, enhance privacy, and add aesthetic appeal. Experience a comfortable, safe, and stylish driving experience with our high-quality window tinting services.",
    image: "images/services-images/tint-color.jpg",
    link: "services/window-tinting-edmonton",
  },
  {
    altname: "paint-protection-film", 
    name: "Paint Protection",
    id: "ppf",
    description: ["Our Automotive Paint Protection film service offers premium protection for your vehicle's paint.","With a comprehensive consultation, precise installation, and high-quality films, we safeguard your vehicle from scratches, chips, UV rays, and chemicals.","Our durable and virtually invisible films provide long-lasting protection and can even self-heal minor scratches.", "Trust our professional service to keep your vehicle looking pristine and protected."],
    image: "images/services-images/ppf-color.jpg",
    link: "services/paint-protection-film-edmonton",
  },

  {
    altname: "Windshield Protection", 
    name: "Windshield Protection",
    id: "ppf",
    description: ["CLEAR AS CRYSTAL, HARD AS DIAMOND", "Bump-free, bumper to bumper. Protect your windshield the same way you protect the rest of your vehicle with XPEL.", "Get unmatched durability and UV protection with the ultimate defense against chips, cracks, and road hazards."],
    image: "images/services-images/windshieldfilm.jpg",
    link: "services/windshield-protection-film-edmonton",
  },


 
  {
    altname: "dash-camera", 
    name: "Dash Cams",
    description:
      ["At Adrenalin Audio, we specialize in dash camera installations, providing a crucial layer of safety and security for your vehicle.",
    "Our expert team ensures seamless integration of dash cameras into your vehicle, offering clear and reliable footage for accidents, theft deterrence, and surveillance.",
  "Safeguard your journeys with Adrenalin Audio's professional dash camera installations. Contact us for a safer and more secure driving experience."],
    image: "images/services-images/dashcam.jpg",
    link: "services/dash-cams",
  },
  {
    altname: "audio-video", 
    name: "Audio / Video",
    description:
      ["Experience elevated driving pleasure with Adrenalin Audio's superior car audio/video installations. From personalized sound systems to seamless high-definition displays, we craft premium in-car entertainment.",
      "Our dedication ensures expert integration of cutting-edge tech for unparalleled service and enjoyment at every turn."
  ],
    image: "images/audio-video/DMH-1700NEX/DMH1700NEX_1.jpg",
    link: "services/car-audio-video",
  },
  {
    altname: "marine-audio", 
    name: "Marine Audio",
    description:
      ["Enhance your marine adventures with Adrenalin Audio's premium installations. Specializing in superior, weather-resistant sound systems tailored for open waters, we bring high-fidelity audio to your vessel.",
    "Count on our expert setups for crystal-clear sound amidst the waves, seamlessly merging tech and marine thrills for an elevated onboard experience."],
    image: "images/services-images/marine-color.jpg",
    link: "services/marine-audio",
  },

  {
    altname: "12volt-accessories", 
    name: "12V Accessories",
    description:
      ["At Adrenalin Audio, our 12-volt accessories, including heated seats, HD cameras, and premium DVD players, redefine comfort, safety, and entertainment in your vehicle.",
    "Our skilled technicians seamlessly integrate these upgrades into your vehicle, ensuring optimal functionality and sleek installations that enhance both convenience and style.",
  "Enhance your vehicle with Adrenalin Audio's premium 12-volt accessories. Contact us for a driving experience that's safer, more comfortable, and more entertaining."],
    image: "images/services-images/12volt-color.jpg",
    link: "services/12-volt-accessories",
  },

  {
    altname: "dealer-program", 
    name: "Dealer Program",
    id: "dp",
    description:
      ["Offering premium automotive window tint and paint protection services, Adrenalin Audio Inc. is your trusted partner in enhancing and protecting the vehicles in your dealership inventory.", 
      "With over 10 years of experience, we provide tailored solutions to car dealers, ensuring exceptional results, increased vehicle aesthetics, and improved resale value.",
       "Partner with Adrenalin Audio Inc. for top-quality services and a competitive edge in the market.",
      "Wholesale pricing... Best materials... Awesome Service."],
    image: "images/services-images/dealer.jpg",
    link: "services/dealer-program",
  },
 
];
