import React from "react";
import { CardEffect } from "../components/ui/service-hover";






// import air from "../assets/serviceSection/air.png";


const ProvidingServices = () => {
  const data = [
  {
    title: "DRILLING RIG",
    link: "/services/providing-services/drilling-rig",
  },
  {
    title: "30 TON WORK OVER RIG",
    link: "/services/providing-services/30-ton-work-over-rig",
  },
  {
    title: "50 TON WORK OVER RIG",
    link: "/services/providing-services/50-ton-work-over-rig",
  },
  {
    title: "100 TON WORK OVER RIG",
    link: "/services/providing-services/100-ton-work-over-rig",
  },
  {
    title: "Hot Oil Circulation Units",
    link: "/services/providing-services/hot-oil-circulation-units",
  },
  {
    title: "Mobile Steaming Unit",
    link: "/services/providing-services/mobile-steaming-unit",
  },
  {
    title: "Mobile Pumping Units",
    link: "/services/providing-services/mobile-pumping-units",
  },
  {
    title: "Crude Oil/ Effluent Water Tankers",
    link: "/services/providing-services/crude-oil-effluent-water-tankers",
  },
  {
    title: "Scraping Winch Units",
    link: "/services/providing-services/scraping-winch-units",
  },
  {
    title: "Chemical dozing Pump",
    link: "/services/providing-services/chemical-dozing-pump",
  },
  {
    title: "O&M Manpower Services",
    link: "/services/providing-services/om-manpower-services",
  },
   {
    title: "Mobile Air Compressors",
    link: "/services/providing-services/air-compressor",
  },
];

  return (
    <div className="bg-gray-300 max-w-9xl mx-auto px-8">
      <h2 className="p-4 pt-10 text-4xl font-bold mb-4 text-black  max-w-4xl">
        Providing Services
      </h2>
      <p className="text-neutral-700 pl-4  text-sm md:text-base max-w-sm">
        Delivering reliable and innovative solutions tailored to meet client
        needs.
      </p>
      <CardEffect items={data} />
    </div>
  );
};

export default ProvidingServices;
