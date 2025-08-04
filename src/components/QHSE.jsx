import React from "react";
import certificate1 from "../assets/9001-2015.jpeg";
import certificate2 from "../assets/14001-2015.jpeg";
import certificate3 from "../assets/45001-2018.jpeg";

export default function QHSE() {
  const certificates = [
    { src: certificate1, title: "ISO 9001:2015" },
    { src: certificate2, title: "ISO 14001:2015" },
    { src: certificate3, title: "ISO 45001:2018" },
  ];

  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="relative w-full">
        <img
          src="https://synergenog.com/wp-content/uploads/2022/07/6.png"
          alt="QHSE Banner"
          className="w-full h-auto object-cover max-h-[450px]"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl font-bold">
            QHSE Policy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-center text-xl text-gray-700 italic mb-12 max-w-3xl mx-auto">
          “Our long-term success depends on our ability to continuously improve
          our services while safeguarding our people and the environment in
          which we work.”
        </p>

        <div className="text-gray-800 space-y-5 text-base sm:text-lg leading-relaxed">
          <p>
            At <strong>Wester Oil Field Services</strong>, we are fully
            committed to:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              Satisfying our clients by understanding their needs and delivering
              top-tier services.
            </li>
            <li>
              Upholding high standards through rigorous adherence to Integrated
              Management Systems.
            </li>
            <li>Empowering our team with ongoing training and development.</li>
            <li>
              Complying with all applicable legal and regulatory requirements.
            </li>
            <li>Promoting environmentally responsible practices.</li>
            <li>Ensuring safe operations and preventing property damage.</li>
            <li>
              Protecting employees, contractors, and nearby communities from
              hazards.
            </li>
            <li>Maintaining a safe and healthy work environment.</li>
            <li>Being fully prepared for emergencies and disasters.</li>
          </ul>
          <p>
            We ensure that these policies are implemented at every level of our
            organization with the full cooperation of our management and staff.
          </p>
        </div>

        {/* Certificates */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Our Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center ">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href="/not-found" // Replace this with your actual 404 route if needed
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-400 overflow-hidden"
                onContextMenu={(e) => e.preventDefault()} // Disable right click
                draggable={false} // Prevent drag
              >
                <div className="relative">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-auto object-contain p-4 pointer-events-none select-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-transparent" />
                </div>
                <div className="bg-gray-100 text-center py-3 px-2">
                  <p className="text-sm sm:text-base font-bold text-blue-700">
                    {cert.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
