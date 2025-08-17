import React from "react";
import { motion } from "framer-motion";

import overrig1 from "../../assets/serviceSection/overrig1.png";
import overrig2 from "../../assets/serviceSection/overrig2.png";
import overrig3 from "../../assets/serviceSection/overrig3.png";

const ThreeTon = () => {
  const images = [overrig1, overrig2, overrig3];

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
          30 TON WORK OVER RIG
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We have 2 Nos. WOFS - 03 and WOFS - 04 of Mobile Work over Rigs with a capacity of 30 Tons.
          The following jobs can be done: Setting of the packer, Releasing of the packer,
          Testing of casing, Bysetting of R3 packer, Testing of Tubing, Abandon of well by putting
          Cementing plug, Testing of the plug, Installation of SRP, Testing of SRP, Clearing of well bore
          with Five and half-inch casing, Transfer of Zone by setting bridge plug.
          We are in contract with clients like ONGC, Hermes Technology, Prescott, Oilmax,
          Selan Exploration, and RBM Infracom for extraction of CBM, oil and gas projects.
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

export default ThreeTon;
