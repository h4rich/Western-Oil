import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import ProvidingServices from "./components/ProvidingServices"; // new
import Manufacturing from "./components/Manufacturing"; // new
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import QHSE from "./components/QHSE";
import Notfound from "./components/Notfound";
import load from "./assets/load.png";
import { motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

import ChemicalPump from "./components/services/ChemicalPump";
import CrudeOil from "./components/services/CrudeOil";
import DrillingRig from "./components/services/DrillingRig";
import FiveTon from "./components/services/FiveTon";
import HotOilUnit from "./components/services/HotOilUnit";
import Manpower from "./components/services/Manpower";
import PumpingUnit from "./components/services/PumpingUnit";
import ScrapingUnit from "./components/services/ScrapingUnit";
import SteamingUnit from "./components/services/SteamingUnit";
import TenTon from "./components/services/TenTon";
import ThreeTon from "./components/services/ThreeTon";
import Air from "./components/services/Air";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Letter animation
  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] px-4">
        <motion.div
          className="flex items-center gap-3"
          initial="hidden"
          animate="visible"
        >
          {/* Logo Animation */}
          <motion.img
            src={load}
            alt="Logo"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28"
          />

          {/* Text Animation */}
          <div className="flex flex-wrap text-lg sm:text-2xl md:text-3xl font-bold tracking-widest">
            {Array.from("WESTERN OIL FIELD").map((char, i) => {
              const isST = i === 2 || i === 3;
              return (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariant}
                  className={isST ? "text-blue-900" : "text-black"}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/not-found" element={<Notfound />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />

          {/* Sub-services */}
          <Route
            path="services/providing-services"
            element={<ProvidingServices />}
          />

          <Route
            path="services/providing-services/drilling-rig"
            element={<DrillingRig />}
          />
          <Route
            path="services/providing-services/30-ton-work-over-rig"
            element={<ThreeTon />}
          />
          <Route
            path="services/providing-services/50-ton-work-over-rig"
            element={<FiveTon />}
          />
          <Route
            path="services/providing-services/100-ton-work-over-rig"
            element={<TenTon />}
          />
          <Route
            path="services/providing-services/air-compressor"
            element={<Air />}
          />

          <Route
            path="services/providing-services/hot-oil-circulation-units"
            element={<HotOilUnit />}
          />
          <Route
            path="services/providing-services/mobile-steaming-unit"
            element={<SteamingUnit />}
          />
          <Route
            path="services/providing-services/mobile-pumping-units"
            element={<PumpingUnit />}
          />
          <Route
            path="services/providing-services/crude-oil-effluent-water-tankers"
            element={<CrudeOil />}
          />
          <Route
            path="services/providing-services/scraping-winch-units"
            element={<ScrapingUnit />}
          />
          <Route
            path="services/providing-services/chemical-dozing-pump"
            element={<ChemicalPump />}
          />
          <Route
            path="services/providing-services/om-manpower-services"
            element={<Manpower />}
          />

          <Route path="services/manufacturing" element={<Manufacturing />} />

          <Route path="qhse" element={<QHSE />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
