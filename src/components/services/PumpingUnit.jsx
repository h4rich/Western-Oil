import React from "react";
import { motion } from "framer-motion";

import units4 from "../../assets/serviceSection/units4.png";

const PumpingUnit = () => {
  const images = [units4];

  return (
    <div className="max-w-auto p-8 mx-auto sm:p-10 md:p-20 lg:p-20 bg-gray-300">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Mobile Pumping Units
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We have many of Mobile Pumping Units the pumps capable of pumping
            oil, brine, diesel - xylene mixture, chemicals and effluent apart
            from water. Fluid properties may be taken as Density: up to 1.5
            gm/cc , Viscosity: up to 50 cp , Temperature: up to 80° C. Each MPU
            have 2 nos. of new calibrated fluid storage tanks having volume of 3
            M³ each with provision for interconnection of both tanks.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {images.length === 1 ? (
            <motion.img
              src={images[0]}
              alt="Drilling Rig"
              className="w-full max-w-[400px]"
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
              }}
            />
          ) : (
            <div
              className={`grid gap-6 ${
                images.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-3"
              }`}
            >
              {images.map((src, idx) => (
                <motion.div
                  key={idx}
                  className="overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.07, // slightly bigger
                    transition: { duration: 0.2 }, // faster hover animation
                  }}
                >
                  <img src={src} alt={`Drilling Rig ${idx + 1}`} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PumpingUnit;
