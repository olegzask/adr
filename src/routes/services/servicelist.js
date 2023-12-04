import React, { useContext } from "react";
import { BooleanContext } from "../../store";

export const services = [
  {
    name: "Remote Start",
    description:
      ["Professional remote start installation for your vehicle, enhancing convenience and comfort.",
    "Expert technicians ensuring seamless integration and reliable performance.",
  "Enjoy the luxury of starting your car from afar, tailored to fit your specific vehicle.",
"Remote start solutions that prioritize security, ease, and your peace of mind.",
"Our services encompass cutting-edge technology like DRONE, a premier mobile app for advanced remote start functionality."],
    image: "images/services-images/remote-color.jpg",
    link: "services/remote-start",
  },
  {
    name: "Window Tint",
    id: "wt",
    description: ["Our Automotive Window Tint service offers a professional solution to enhance your driving experience.", "We provide expert consultation, premium window tint films, and professional installation.", " Our films reduce heat and UV rays, minimize glare, enhance privacy, and add aesthetic appeal.", "Experience a comfortable, safe, and stylish driving experience with our high-quality window tinting services." ],
    // description:
    //   "Our Automotive Window Tint service offers a professional solution to enhance your driving experience. We provide expert consultation, premium window tint films, and professional installation. Our films reduce heat and UV rays, minimize glare, enhance privacy, and add aesthetic appeal. Experience a comfortable, safe, and stylish driving experience with our high-quality window tinting services.",
    image: "images/services-images/tint-color.jpg",
    link: "services/window-tint",
  },
  {
    name: "Paint Protection",
    id: "ppf",
    description: ["Our Automotive Paint Protection film service offers premium protection for your vehicle's paint.","With a comprehensive consultation, precise installation, and high-quality films, we safeguard your vehicle from scratches, chips, UV rays, and chemicals.","Our durable and virtually invisible films provide long-lasting protection and can even self-heal minor scratches.", "Trust our professional service to keep your vehicle looking pristine and protected."],
    image: "images/services-images/ppf-color.jpg",
    link: "services/paint-protection-film",
  },

  {
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
  {
    name: "Dash Cams",
    description:
      ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada dignissim velit a tincidunt. Fusce vel mi eget diam viverra laoreet sed sit amet dolor."],
    image: "images/services-images/dashcam.jpg",
    link: "services/dash-cams",
  },

  {
    name: "12V Accessories",
    description:
      ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada dignissim velit a tincidunt. Fusce vel mi eget diam viverra laoreet sed sit amet dolor."],
    image: "images/services-images/12volt-color.jpg",
    link: "services/12-volt-accessories",
  },
 
];
