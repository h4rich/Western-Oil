import React from "react";
import { motion } from "framer-motion";
import certificate1 from "../assets/9001-2015.jpeg";
import certificate2 from "../assets/14001-2015.jpeg";
import certificate3 from "../assets/45001-2018.jpeg";
import { SparkleCore } from "../components/ui/sparkle";


export default function QHSE() {
  const certificates = [
    { src: certificate1, title: "ISO 9001:2015" },
    { src: certificate2, title: "ISO 14001:2015" },
    { src: certificate3, title: "ISO 45001:2018" },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const staggerList = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-gray-200 w-auto">
      {/* Banner */}
       <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
            <h3 className="md:text-4xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
               QHSE Policy
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
      {/* Content */}
      <div className="max-w-auto mx-auto py-16">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-xl text-gray-700 italic mb-12 max-w-3xl mx-auto"
        >
          “Our long-term success depends on our ability to continuously improve
          our services while safeguarding our people and the environment in
          which we work.”
        </motion.p>

        <motion.div
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-5 flex items-center justify-center flex-col text-gray-800 space-y-5 text-base sm:text-lg leading-relaxed"
        >
          <motion.p variants={fadeUp}>
            At <strong>Wester Oil Field Services</strong>, we are fully committed to:
          </motion.p>

          <motion.ul variants={staggerList} className="list-disc list-inside pl-4 space-y-2">
            {[
              "Satisfying our clients by understanding their needs and delivering top-tier services.",
              "Upholding high standards through rigorous adherence to Integrated Management Systems.",
              "Empowering our team with ongoing training and development.",
              "Complying with all applicable legal and regulatory requirements.",
              "Promoting environmentally responsible practices.",
              "Ensuring safe operations and preventing property damage.",
              "Protecting employees, contractors, and nearby communities from hazards.",
              "Maintaining a safe and healthy work environment.",
              "Being fully prepared for emergencies and disasters.",
            ].map((item, i) => (
              <motion.li key={i} variants={fadeUp}>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p variants={fadeUp} className="max-w-3xl text-center pt-10">
            We ensure that these policies are implemented at every level of our
            organization with the full cooperation of our management and staff.
          </motion.p>
        </motion.div>

        {/* Certificates */}
        <div className="mt-16 bg-gray-800 p-15">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6 text-center text-white pb-5"
          >
            Our Certifications
          </motion.h3>

          <motion.div
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center"
          >
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                variants={cardVariant}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="/not-found"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              >
                <div className="relative">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-auto object-contain pointer-events-none select-none"
                    draggable={false}
                  />
                </div>
                <div className="bg-gray-100 text-center py-3 px-2">
                  <p className="text-sm sm:text-base font-bold text-blue-700">
                    {cert.title}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
