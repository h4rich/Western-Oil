import React from "react";
import ongc from "../assets/logo/ONGC.png";
import hermes from "../assets/logo/hermes.avif";
import essar from "../assets/logo/Essar.png";
import oilmax from "../assets/logo/oilmax.png";
import { SparkleCore } from "../components/ui/sparkle";
import { HoverEffect } from "../components/ui/card-hover-effect";

const Projects = () => {
  const projects = [
    {
      logo: ongc,
      title: "ONGC – Cambay Asset",
      date: "12 Jan, 2021",
      description: "Provided Scraping Winch Units for oilfield support.",
    },
    {
      logo: ongc,
      title: "ONGC – Cambay Asset",
      date: "08 Mar, 2021",
      description: "Hot Oil Circulation Unit successfully deployed.",
    },
    {
      logo: ongc,
      title: "ONGC – Ahmedabad Asset",
      date: "14 May, 2021",
      description: "Supplied C/H 30MT and 50MT Workover Rigs.",
    },
    {
      logo: ongc,
      title: "ONGC – Ahmedabad Asset",
      date: "03 Jul, 2021",
      description:
        "Manpower provided for Well Testing Jobs and Drilling Sites.",
    },
    {
      logo: hermes,
      title: "Hermes Technologies",
      date: "18 Sep, 2021",
      description: "Provided 30MT Workover Rig for field deployment.",
    },
    {
      logo: oilmax,
      title: "Oilmax Energy",
      date: "24 Oct, 2021",
      description: "Delivered 30MT Workover Rig for upstream operations.",
    },
    {
      logo: essar,
      title: "Essar Oil Services",
      date: "10 Nov, 2021",
      description: "Supplied 30MT and 50MT Workover Rigs for field sites.",
    },
    {
      logo: ongc,
      title: "ONGC – Ahmedabad Asset",
      date: "12 Dec, 2021",
      description: "Provided Mobile Pumping Units for enhanced operations.",
    },
    {
      logo: ongc,
      title: "ONGC – Ahmedabad Asset",
      date: "06 Jan, 2022",
      description: "Additional Scraping Winch Units deployed on-site.",
    },
  ];
  return (
    <section className=" bg-gray-300 ">
      {/* Banner */}
      <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <h3 className="md:text-4xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          Completed Projects
        </h3>
        
        <div className="w-[40rem] h-20  relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm " />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparkleCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      

      <div className="max-w-9xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </section>
  );
};

export default Projects;
