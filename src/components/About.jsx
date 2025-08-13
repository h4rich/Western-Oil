import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaAward,
  FaShieldAlt,
  FaLeaf,
  FaTools,
  FaPhoneAlt,
} from "react-icons/fa";
import director from "../assets/director.jpeg";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import aboutImage from "../assets/aboutSection/aboutImage.png";
import { SparkleCore } from "../components/ui/sparkle";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-gray-300">
      <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <h3 className="md:text-4xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          About Western Oil Field Services
        </h3>
        <div className="w-[80rem] h-20  relative">
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

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <section className="bg-gray-300 px-4">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              variants={fadeInUp}
            ></motion.h2>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <strong>Western Oil Field Services (WOFS)</strong> is an ISO 9001
              14001 and OHSMS 45001 certified company with head office in
              Ahmedabad, Gujarat, providing Oil and Gas Field Services.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              {["ISO 9001", "ISO 14001", "OHSMS 45001"].map((cert, index) => (
                <motion.span
                  key={cert}
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    index === 0
                      ? "bg-green-100 text-green-800"
                      : index === 1
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {cert}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="grid md:grid-cols-5 gap-6 mb-12"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              {[
                {
                  icon: <FaAward className="text-blue-600" />,
                  label: "18+ Years Experience",
                },
                {
                  icon: <FaTools className="text-blue-600" />,
                  label: "Advanced Technology",
                },
                {
                  icon: <FaShieldAlt className="text-blue-600" />,
                  label: "Strong Safety Culture",
                },
                {
                  icon: <FaLeaf className="text-blue-600" />,
                  label: "Eco-Friendly Operations",
                },
                {
                  icon: <FaPhoneAlt className="text-blue-600" />,
                  label: "400+ Skilled Staff",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center text-center px-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-teal-500 text-3xl mb-3">{item.icon}</div>
                  <p className="text-gray-800 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Vision & Values */}
            <div className="grid md:grid-cols-2 gap-10 text-left mt-10">
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.5 }}
                initial="hidden"
                whileInView="visible"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Who We Are
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Western Oilfield Services (WOFS) is one of the leading
                  providers of services in the Oil and Gas sector. Our
                  commitment to quality is not a matter of chance—it is the
                  result of consistent hard work, dedication, and a focus on
                  operational excellence. We strive to deliver services that
                  effectively and efficiently meet the diverse needs of our
                  clients.
                  <br />
                  <br />
                  We aim to meet and exceed the evolving needs of our clients
                  with safe, efficient, and high-performance services.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
                initial="hidden"
                whileInView="visible"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  18+ Years of Trusted Service
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  For the past 18 years, WOFS has been proudly serving PSU Oil &
                  Natural Gas Corporation Ltd. (ONGC)—a Government of India
                  enterprise—at its Ahmedabad, Cambay, Mehsana and Bokaro Asset.
                  In addition, we have successfully assosiated with private and
                  government oilfield operators such as GSPCL, Cairn, Essar,
                  Selan Exploration, Presscot Services, Hermes Technologies, and
                  others, delivering services to their complete satisfaction.
                  <br />
                  <br />
                  With a dedicated workforce of over 400 skilled professionals
                  and operations across India, WOFS brings a blend of
                  experience, innovation, and manpower excellence to every
                  project. Our forwardthinking approach enables us to meet the
                  dynamic challenges of the evolving Oil and Gas industry with
                  confidence and capability
                </p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-12"
              variants={fadeInUp}
              transition={{ delay: 0.7 }}
              initial="hidden"
              whileInView="visible"
            >
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium text-sm"
              >
                <FaPhoneAlt className="w-4 h-4" /> Contact Our Team
              </button>
              <p className="text-sm text-gray-600 mt-2">
                Or reach us at:{" "}
                <span className="text-blue-600 font-medium">
                  hrwesternoilfield@gmail.com
                </span>
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Director Section */}
        <section className="bg-gray-800 mt-15 text-white py-20 px-6 sm:px-12 relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase text-gray-400 mb-3 tracking-wide">
                Leadership
              </p>
              <h2 className="text-4xl font-bold leading-tight">
                Excellent company <span className="text-blue-500">quality</span>{" "}
                services
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-12 h-1 bg-blue-500"></span>
                <span className="w-8 h-1 bg-white/60"></span>
                <span className="w-6 h-1 bg-white/40"></span>
                <span className="w-4 h-1 bg-white/20"></span>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mb-6">
                <Quote className="text-red-700" />
                <p className="text-lg leading-relaxed text-gray-200">
                  <strong>Pathan Mo. Zamir Valimohammed</strong>, , the Founder
                  of Western Oil Field Services, brings over 30 years of
                  extensive experience in Oil and Gas Field. Under his
                  leadership, Western Oil Field Services has thrived through
                  strategic direction and a robust portfolio of offerings.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={director}
                  alt="Mr. Zamir Khan"
                  className="w-16 h-16 rounded-md object-fill"
                />
                <div>
                  <p className="text-white font-bold text-lg">Pathan Mo. Zamir Valimohammed</p>
                  <p className="text-gray-300 text-sm">
                    Managing Director & CEO
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
