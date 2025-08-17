import React from "react";
import { SiLinkedin, SiX, SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import footerbg from "../assets/footerbg.png";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Footer = () => {
  return (
    <motion.footer
      className="text-white z-40 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerbg})` }}
      initial="initial"
      whileInView="whileInView"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="bg-black/50 w-full h-full p-8 md:p-12 lg:p-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div {...fadeInUp}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center">
                  <img src={logo} alt="logo" className="pl-5 h-16 w-auto -my-2 scale-250" />
                </div>
              
              </div>
              <p className="text-gray-300 mb-4">
                Leading Oil Field Services provider with ISO certifications and
                proven track record.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div {...fadeInUp}>
              <h4 className="text-lg font-bold mb-4 text-blue-500 hover:text-blue-300 transition-colors">
                Quick Links
              </h4>
              <ul className="space-y-2 flex flex-col">
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>

                {/* Services with sub-links */}
                <div>
                  <Link className="text-gray-300 hover:text-white transition-colors font-medium">
                    Services
                  </Link>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>
                      <Link
                        to="/services/providing-services"
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        • Providing Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/manufacturing"
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        • Manufacturing
                      </Link>
                    </li>
                  </ul>
                </div>

                <Link to="/qhse" className="text-gray-300 hover:text-white transition-colors">
                  QHSE
                </Link>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div {...fadeInUp}>
              <h4 className="text-lg font-bold mb-4 text-blue-500 hover:text-blue-300 transition-colors">
                Social Networking
              </h4>
              <div className="flex space-x-4 mt-6">
                {[
                  {
                    icon: <SiLinkedin />,
                    link: "https://www.linkedin.com/company/western-oil-field-services/",
                  },
                  { icon: <SiX />, link: "#" },
                  { icon: <SiFacebook />, link: "#" },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-white rounded-lg flex justify-center items-center transition-colors"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div {...fadeInUp}>
              <h4 className="text-lg font-bold mb-4 text-blue-500 hover:text-blue-300 transition-colors">
                Contact Info
              </h4>
              <div className="space-y-3 text-gray-300">
                <p>
                  3rd Floor 306, Ganesh Plaza, Ajit Mill Cross Road, Rakhial,
                  Ahmedabad-380024, Gujarat
                </p>
                <p>hrwesternoilfield@gmail.com</p>
                <p>westernoilfield@gmail.com</p>

              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-400 text-gray-400 mt-12 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p>© 2025 Western Oil Field Services. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
