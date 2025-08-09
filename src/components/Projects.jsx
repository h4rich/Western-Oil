import React from "react";
import ongc from "../assets/logo/ONGC.png"
import hermes from "../assets/logo/hermes.avif"
import essar from "../assets/logo/Essar.png"
import oilmax from "../assets/logo/oilmax.png"





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
    description: "Manpower provided for Well Testing Jobs and Drilling Sites.",
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
    <section className=" bg-gray-100 py-14 px-4 md:px-16 lg:px-28">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Completed Projects
        </h2>
        <p className="text-gray-500 mt-2">Trusted by major oilfield companies</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-5 flex gap-4 items-start bg-white"

          >
            <img
              src={project.logo}
              alt={project.title}
              className="w-16 h-16 object-contain rounded-md border bg-white"
            />
            <div>
              <h3 className="text-lg font-semibold text-blue-700">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">{project.date}</p>
              <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
