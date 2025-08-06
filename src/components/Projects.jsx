import React from "react";


const Projects = () => {
  const projects = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    title: "ONGC – Cambay Asset",
    date: "12 Jan, 2021",
    description: "Provided Scraping Winch Units for oilfield support.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    title: "ONGC – Cambay Asset",
    date: "08 Mar, 2021",
    description: "Hot Oil Circulation Unit successfully deployed.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    title: "ONGC – Ahmedabad Asset",
    date: "14 May, 2021",
    description: "Supplied C/H 30MT and 50MT Workover Rigs.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    title: "ONGC – Ahmedabad Asset",
    date: "03 Jul, 2021",
    description: "Manpower provided for Well Testing Jobs and Drilling Sites.",
  },
  {
    logo: "https://images.jdmagicbox.com/v2/comp/gandhinagar-gujarat/r2/9999pxx79.xx79.140406232221.r4r2/catalogue/hermes-technologies-pvt-ltd-gandhinagar-sector-25-gandhinagar-gujarat-ac-drive-dealers-r2xfxzj9sm-250.jpg",
    title: "Hermes Technologies",
    date: "18 Sep, 2021",
    description: "Provided 30MT Workover Rig for field deployment.",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWdoTy4FtlDQmKYP6H0hETF8vvQyrzhrG4g&s",
    title: "Oilmax Energy",
    date: "24 Oct, 2021",
    description: "Delivered 30MT Workover Rig for upstream operations.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Essar_logo.svg/1920px-Essar_logo.svg.png",
    title: "Essar Oil Services",
    date: "10 Nov, 2021",
    description: "Supplied 30MT and 50MT Workover Rigs for field sites.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    title: "ONGC – Ahmedabad Asset",
    date: "12 Dec, 2021",
    description: "Provided Mobile Pumping Units for enhanced operations.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
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
