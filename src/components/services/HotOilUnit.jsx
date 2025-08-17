import React from "react";
import { motion } from "framer-motion";

import units1 from "../../assets/serviceSection/units1.png";
import units2 from "../../assets/serviceSection/units2.png";

const HotOilUnit = () => {
  const images = [units1, units2];

  return (
    <div className="w-full px-6 py-10 md:px-16 bg-gray-300">
      {/* Text Section */}
      <motion.div
        className="max-w-auto mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Hot Oil Circulation Units
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We Have a Hot Oil Circulation Unit. The unit is used for carrying out
          Hot Oil / Ho t water / hot effluent circulation job in self flow wells
          as well as in artificial lift wells, flushing of flow lines with hot
          oil / hot water / hot effluent and last not the least used for
          carrying out circulation / squeezing of hot oil (800C to 850C or a s
          per requirement) in the oil wells, for chemical stimulation jobs
          during work over operations etc.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="max-w-6xl mx-auto mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.15 }} // scale faster
            whileHover={{
              scale: 1.07, // slightly bigger
              transition: { duration: 0.2 }, // faster hover animation
            }}
          >
            <img
              src={src}
              alt={`Drilling Rig ${idx + 1}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HotOilUnit;
