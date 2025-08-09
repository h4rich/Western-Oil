import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroOne from "../assets/heroSection/heroOne.png";
import heroTwo from "../assets/heroSection/heroTwo.png";
import cairn from "../assets/logo/Cairn_India.png";
import essar from "../assets/logo/Essar.png";
import gspc from "../assets/logo/gspc.png";
import hermes from "../assets/logo/hermes.avif";
import hoec from "../assets/logo/hoec.png";
import indianOil from "../assets/logo/Indian_Oil.png";
import kiri from "../assets/logo/kiri.avif";
import oilIndia from "../assets/logo/Oil_India.png";
import oilmax from "../assets/logo/oilmax.png";
import ongc from "../assets/logo/ONGC.png";
import prescott from "../assets/logo/prescott.png";
import prize from "../assets/logo/prize.jpg";
import quipoo from "../assets/logo/quipoo.png";
import reliance from "../assets/logo/Reliance.png";
import rmb from "../assets/logo/Rmb.png";
import selan from "../assets/logo/selan.jpg";
import seros from "../assets/logo/seros.jpeg";
import vedanta from "../assets/logo/Vedanta.jpg";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Cover } from "../components/ui/cover";


const words = ` We have proudly partnered with some of the most respected names in the
          oil & gas sector. Our commitment to safety, quality, and performance
          sets us apart in every operation.`

const heroSlides = [
  {
    image: heroOne,
    title: "Leading Oil & Gas Exploration Services",
    description:
      "Western Oil Field Services (WOFS) is an ISO 9001 14001 and OHSMS 45001 certified company with head office in Ahmedabad, Gujarat, providing Oil and Gas Field Services",
  },
  {
    image: heroTwo,
    title: "Innovative Field Solutions for Energy Demands",
    description:
      "Delivering excellence in oilfield operations through advanced technologies, committed workforce, and client-centric services across India.",
  },
];

const clientLogos = [
  {
    name: "ONGC",
    logo: ongc,
  },
  {
    name: "OIL INDIA",
    logo: oilIndia,
  },
  {
    name: "ESSAR",
    logo: essar,
  },
  {
    name: "RELIANCE",
    logo: reliance,
  },
  {
    name: "CAIRN",
    logo: cairn,
  },
  {
    name: "HERMES",
    logo: hermes,
  },
  {
    name: "PRESSCOT",
    logo: prescott,
  },
  {
    name: "OILMAX",
    logo: oilmax,
  },
  {
    name: "SELAN",
    logo: selan,
  },
  {
    name: "GSPCL",
    logo: gspc,
  },
  {
    name: "KIRI GROUP",
    logo: kiri,
  },
  {
    name: "RBM INFRCOM",
    logo: rmb,
  },
  {
    name: "HOES",
    logo: hoec,
  },
  {
    name: "INDIAN OIL",
    logo: indianOil,
  },
  {
    name: "PRIZE PETROLEUM",
    logo: prize,
  },
  {
    name: "VEDANTA",
    logo: vedanta,
  },
  {
    name: "QUIPPO",
    logo: quipoo,
  },
  {
    name: "SEROS",
    logo: seros,
  },
];

const scrollSmoothBy = (element, distance, duration = 600) => {
  if (!element) return;
  const start = element.scrollLeft;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    element.scrollLeft = start + distance * ease;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const firstImg = new Image();
    firstImg.src = heroSlides[0].image;
    firstImg.onload = () => setIsLoaded(true);
    firstImg.onerror = () => setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isLoaded]);

  if (!isLoaded) {
    return <div className="h-screen w-full bg-black" />;
  }

  return (
    <>
      {/* Hero Section */}
      <div
        className="h-screen w-full bg-cover bg-center transition-all duration-1000 ease-in-out relative"
        style={{ backgroundImage: `url(${heroSlides[currentIndex].image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <div className="relative z-20 h-full w-full flex items-center justify-center px-4">
          <motion.div
            key={currentIndex}
            className="text-center text-white max-w-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-xl"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {heroSlides[currentIndex].title}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-8 font-light drop-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {heroSlides[currentIndex].description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Link
                to="/services"
                className="cursor-pointer px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Heading and Paragraph Section */}
      <motion.section
        className="bg-white py-22 px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
         <h4 className="text-2xl md:text-2xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover> Trusted by Industry Leaders</Cover>
      </h4>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <TextGenerateEffect words={words} />
        </p>
      </motion.section>
      {/* Client Logos Section */}
      <section className=" bg-gray-100 py-12 px-4">
        <motion.h3
          className="text-2xl sm:text-3xl text-center font-bold text-blue-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
        >
          Our ESTEEMED Clients
        </motion.h3>

        <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={() => scrollSmoothBy(scrollRef.current, -170)}
            className="bg-white rounded-full shadow-lg p-2 hover:bg-blue-100 transition duration-300"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Logos */}
          <motion.div
            ref={scrollRef}
            className="overflow-hidden flex overflow-x-auto scrollbar-hide gap-6 px-4 py-2 scroll-smooth w-full max-w-[95%]"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            viewport={{ once: true }}
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-38 h-18 bg-white border border-gray-300 rounded-lg shadow hover:shadow-md flex items-center justify-center transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  className="h-15 max-w-[90%] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollSmoothBy(scrollRef.current, 170)}
            className="bg-white rounded-full shadow-lg p-2 hover:bg-blue-100 transition duration-300"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
