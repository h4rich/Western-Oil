import React from "react";
import { ManuCard } from "../components/ui/service-hover";

const Manufacturing = () => {
  const data = [
    {
      title: "Hot Oil circulation Unit",
    },
    {
      title: "Storage Tanks and Mud Tanks Fabrication",
    },
    {
      title: "Mobile Pumping Units",
    },
    {
      title: "Acid Pumping Unit",
    },
    {
      title: "High Pressure Pumps",
    },
    {
      title: "Chemical Dozing Pumping Unit",
    },
    {
      title: "Scraping Winch Unit",
    },
    {
      title: "Swabbing Units",
    },
    {
      title: "Refurbishment of all the equipment’s like Engines",
    },
  ];

  return (
    <div className="bg-gray-300 max-w-9xl mx-auto px-8">
      <h2 className="p-4 pt-10 text-3xl md:text-4xl font-bold mb-4 text-black  max-w-3xl">
        Manufacturing Capabilities
      </h2>
      <p className="text-neutral-700 pl-4  text-sm md:text-base max-w-7xl">
        We, Western Oil Field Services, not only provide specialized oilfield
        services but also manufacture a wide range of equipment and units used
        in oil and gas exploration. Backed by highly qualified engineers and
        skilled staff, we carry out precision fabrication and assembly works in
        our fully equipped maintenance yards and workshops. Our facilities offer
        the following manufacturing capabilities:
      </p>
      <ManuCard items={data} />
    </div>
  );
};

export default Manufacturing;
