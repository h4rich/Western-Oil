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
import aboutImage from "../assets/aboutSection/aboutImage.png"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-gray-50">
      {/* Top Image */}
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <img
          src= {aboutImage  }
          alt="Oil Field"
          className="w-full h-auto sm:h-[450px]"
        />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <section className="bg-gray-50 px-4">
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
            >
              About Western Oil Field Services
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <strong>Western Oil Field Services (WOFS)</strong> is an ISO 9001,
              14001 and OHSMS 45001 certified company headquartered in Ahmedabad,
              Gujarat. We provide cutting-edge services in the Oil & Gas sector,
              tailored to industry demands and client expectations.
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
                { icon: <FaAward className="text-blue-600" />, label: "18+ Years Experience" },
                { icon: <FaTools className="text-blue-600" />, label: "Advanced Technology" },
                { icon: <FaShieldAlt className="text-blue-600"  />, label: "Strong Safety Culture" },
                { icon: <FaLeaf className="text-blue-600"  />, label: "Eco-Friendly Operations" },
                { icon: <FaPhoneAlt className="text-blue-600"  />, label: "400+ Skilled Staff" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center text-center px-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-teal-500 text-3xl mb-3">
                    {item.icon}
                  </div>
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
                  WOFS stands as a reliable partner in the Oil and Gas industry.
                  Our commitment to quality isn’t a matter of chance — it’s the
                  outcome of tireless dedication, consistent innovation, and
                  operational excellence.
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
                  WOFS has been proudly serving Oil & Natural Gas Corporation
                  Ltd. (ONGC)—a Government of India enterprise—at its Ahmedabad,
                  Cambay, Mehsana and Bokaro Asset.
                  <br />
                  <br />
                  We've partnered with GSPCL, Cairn, Essar, Selan, Presscot,
                  Hermes, and many more, backed by 400+ skilled professionals
                  across India. Our forward-thinking approach enables us to
                  solve dynamic industry challenges with confidence.
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
        <section className="bg-[#2e343a] mt-15 text-white py-20 px-6 sm:px-12 relative overflow-hidden">
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
                Excellent company{" "}
                <span className="text-blue-500">quality</span> services
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
                  Ashish Agarwal, the Managing Director and CEO of Seros, brings
                  over 25 years of extensive experience in steel, shipping,
                  ports, and logistics. Under his leadership, Seros has thrived
                  through strategic direction and a robust portfolio of
                  offerings...
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={director}
                  alt="Mr. Zamir Khan"
                  className="w-16 h-16 rounded-md object-fill"
                />
                <div>
                  <p className="text-white font-bold text-lg">Mr. Zamir Khan</p>
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
