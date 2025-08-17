import React from "react";
import { motion } from "framer-motion";

import tankers from "../../assets/serviceSection/tankers.png";

const CrudeOil = () => {
  const images = [tankers];

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
            Crude Oil/ Effluent Water Tankers
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We currently operate more than 15 tankers across various assets in
            Gujarat for the t ransportation of crude oil and effluent water,
            handling both loading and unloading operations.
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

export default CrudeOil;
