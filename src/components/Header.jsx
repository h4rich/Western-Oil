import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      subLinks: [
        { name: "Providing Services", path: "/services/providing-services" },
        { name: "Manufacturing", path: "/services/manufacturing" },
      ],
    },
    { name: "QHSE", path: "/qhse" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
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
            <img src={logo} alt="logo" className="h-10 w-auto" />
            <div>
              <h1 className="text-2xl italic font-bold text-red-600">
                WESTERN
              </h1>
              <p className="text-sm italic font-bold text-blue-500">
                Oil Field Services
              </p>
            </div>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-6 px-6"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-gray-300 hover:text-red-600"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Nav Links */}
            {navLinks.map((link, index) =>
              link.subLinks ? (
                <div key={link.name} className="w-full max-w-xs">
                  {/* Main Services Button */}
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex justify-between items-center w-full text-white text-2xl font-semibold hover:text-yellow-400"
                  >
                    {link.name}
                    {servicesOpen ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>

                  {/* Sub Services Animated */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 ml-4 space-y-2 border-l border-gray-600 pl-4"
                      >
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={handleClose}
                            className="block text-gray-300 hover:text-yellow-400 text-lg"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    to={link.path}
                    onClick={handleClose}
                    className="text-white text-2xl hover:text-yellow-400 font-semibold"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
