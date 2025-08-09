import React from "react";
import { SiLinkedin, SiX, SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial="initial"
      whileInView="whileInView"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
              <div>
                <h3 className="text-2xl italic font-bold text-red-500">WESTERN</h3>
                <p className="text-sm italic text-blue-300">Oil Field Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading Oil Field Services provider with ISO certifications and
              proven track record.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp}>
            <h4 className="text-lg font-bold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2 flex flex-col">
              {["/", "/About", "/Services", "/QHSE", "/Projects"].map((path, idx) => (
                <Link
                  key={idx}
                  to={path}
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </Link>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div {...fadeInUp}>
            <h4 className="text-lg font-bold mb-4 text-blue-400">Social Networking</h4>
            <div className="flex space-x-4 mt-6">
              {[{
                icon: <SiLinkedin />,
                link: "https://www.linkedin.com/company/western-oil-services/",
              },
              { icon: <SiX />, link: "#" },
              { icon: <SiFacebook />, link: "#" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 transition rounded-lg flex justify-center items-center"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInUp}>
            <h4 className="text-lg font-bold mb-4 text-blue-400">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p>3rd Floor 306, Ganesh Plaza, Ajit Mill Cross Road, Rakhial, Ahmedabad-380024, Gujarat</p>
              <p>hrwesternoilfield@gmail.com</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-400">
            © 2025 Western Oil Field Services. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
