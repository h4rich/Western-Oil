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
import { ThreeDMarquee } from "../components/ui/3d-marquee";

const words = ` We have proudly partnered with some of the most respected names in the
          oil & gas sector. Our commitment to safety, quality, and performance
          sets us apart in every operation.`;

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
  const images = [
    "https://i.pinimg.com/1200x/6d/cd/40/6dcd4089388dadc0f9dd1e8ede22192b.jpg",
    "https://i.pinimg.com/736x/0c/00/c5/0c00c5c362003e8094e9161df1e66613.jpg",
    "https://i.pinimg.com/736x/4c/d1/33/4cd133c4723755977d29d177e42ae9b4.jpg",
    "https://i.pinimg.com/736x/d5/91/ea/d591ea303286d1ff8b6d7a174d7a1532.jpg",
    "https://i.pinimg.com/1200x/e5/5e/c1/e55ec16df48a4695f1bc126895d8dfcf.jpg",
    "https://i.pinimg.com/1200x/e7/6d/a3/e76da3f2ad9057c9eaedb056f1daf3ef.jpg",
    "https://i.pinimg.com/736x/05/bb/ff/05bbffc835c235ceb74f26f4740b8d08.jpg",
    "https://i.pinimg.com/736x/03/24/c6/0324c6e7069f0d7fb94f5ea5ed6a6664.jpg",
    "https://i.pinimg.com/736x/97/a1/d3/97a1d3e58d60555b00e6b9fd4b982593.jpg",
    "https://i.pinimg.com/1200x/3c/d8/90/3cd89049d78892df96a89ac2bf6be8b0.jpg",
    "https://i.pinimg.com/736x/f3/18/c1/f318c10d1d1f6df49ff76dc5eed7a8ea.jpg",
    "https://i.pinimg.com/1200x/63/ac/51/63ac510adf054f963b393fb3cca21b5c.jpg",
    "https://i.pinimg.com/1200x/67/93/1f/67931fd72627439687fea408c8b7749b.jpg",
    "https://i.pinimg.com/736x/0c/c7/f4/0cc7f4fc4fbdfa6fc9540e0ec69b5e07.jpg",
    "https://i.pinimg.com/736x/72/5a/3b/725a3b7e18ce3f2620dcda79704ca69d.jpg",
    "https://i.pinimg.com/1200x/67/93/1f/67931fd72627439687fea408c8b7749b.jpg",
    "https://i.pinimg.com/736x/ab/ef/8a/abef8a24cadd725d5b80bc891576bc5a.jpg",
    "https://i.pinimg.com/736x/0b/3c/9b/0b3c9bc8a72115d0dfe262edcc093277.jpg",
    "https://i.pinimg.com/736x/b3/95/eb/b395eb268cbcc67beffca5b62e50598f.jpg",
    "https://i.pinimg.com/1200x/c9/91/8c/c9918cc78c98bcc85763ed384a5c26ea.jpg",
    "https://i.pinimg.com/736x/fe/1d/5a/fe1d5a10b06a8ab0e20dc58ff8a752df.jpg",
    "https://i.pinimg.com/1200x/0f/14/49/0f14498dc290d71a9e7e0fff69b04469.jpg",
    "https://i.pinimg.com/1200x/bc/e8/66/bce86679444685f2401c7800f7c4c80b.jpg",
    "https://i.pinimg.com/736x/eb/83/23/eb8323dfe993f25ec4f93bc4d9cc1d26.jpg",
    "https://i.pinimg.com/1200x/92/47/9e/92479ede464d022c556e637f9b78925a.jpg",
    "https://i.pinimg.com/1200x/e4/7c/c7/e47cc753e4c6ab8d496b3b8e35d565eb.jpg",
    "https://i.pinimg.com/1200x/ec/2e/1c/ec2e1c540842ea8b88da36e8938bf8cf.jpg",
    "https://i.pinimg.com/736x/35/73/a4/3573a4314eaa712b42feb00db2a5438f.jpg",
    "https://i.pinimg.com/736x/bb/57/d5/bb57d5fc4ecb7eb19074b6651ae3a525.jpg",
    "https://i.pinimg.com/736x/a2/99/8c/a2998c5fb3af5345a29a2e0764a36c33.jpg",
    "https://i.pinimg.com/1200x/b5/86/bb/b586bbacb604b84df73c1d00514f2fb2.jpg",
  ];

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
        <div className="text-lg text-gray-600 max-w-3xl text-justify mx-auto">
          <TextGenerateEffect words={words} />
        </div>
      </motion.section>

      <div className="mx-auto my-10 max-full  bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
      </div>

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
