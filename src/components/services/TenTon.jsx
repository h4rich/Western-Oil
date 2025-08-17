import React from "react";
import { motion } from "framer-motion";

import overrig6 from "../../assets/serviceSection/overrig6.png";
import overrig7 from "../../assets/serviceSection/overrig7.png";

const TenTon = () => {
  const images = [overrig6, overrig7];

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
          100 TON WORK OVER RIG
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We have 1 Nos. W OFS - 07 o f M obile Work over Rigs with a capacity
          of 100 Tons, working at various projects like ONGC and many more at
          Ahmedabad, Cambay, Mehsana, etc
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

export default TenTon;
