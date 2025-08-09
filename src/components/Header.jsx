import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "QHSE", path: "/qhse" },
    { name: "Projects", path: "/projects" },
  ];

  const overlayVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-13 h-13 rounded flex items-center justify-center">
              <img src={logo} alt="logo" className="h-full w-auto" />
            </div>
            <div>
              <h1 className="text-2xl italic font-bold text-red-600">
                WESTERN
              </h1>
              <p className="text-sm italic font-bold text-blue-500">
                Oil Field Services
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <div
            className={`hidden lg:flex items-center space-x-6 ${
              isOpen ? "hidden" : "lg:hidden"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-800 hover:text-blue-600 font-medium capitalize transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-700 hover:text-red-600"
            >
              <X className="w-7 h-7" />
            </button>

            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={link.path}
                  onClick={handleClose}
                  className="text-white text-2xl text-gray-800 hover:text-blue-600 font-semibold"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navLinks.length }}
            >
              <Link
                to="/contact"
                onClick={handleClose}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md text-lg"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
