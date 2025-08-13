import React from "react";
import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const words = [
    {
      text: "Get",
    },
    {
      text: "In",
    },
    {
      text: "Touch.",
      className: "text-blue-500",
    },
  ];

  return (
    <section id="contact" className=" bg-gray-300 ">
      <div className=" mx-auto w-full">
        <div className="flex flex-col items-center justify-center h-[40rem] bg-black">
          <TypewriterEffectSmooth words={words} />
          <p className=" lg:text-lg md:text-lg sm:text-md text-center pb-8 text-gray-400 px-20 max-auto mx-auto">
            Contact us for your oil and gas field service requirements. We're
            here to help with your projects.
          </p>
        </div>
        <div className="w-full grid lg:grid-cols-1 gap-12 px-4 py-20">
          {/* Contact Info */}
          <div className="relative p-6 sm:p-8 md:p-10 overflow-hidden shadow-2xl  bg-gray-800 text-white">
            {/* Decorative background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.25, scale: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative space-y-10"
            >
              {/* Company Info */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 italic">
                  <span className="text-red-400">WESTERN </span>
                  <span className="text-blue-400">Oil Field Services</span>
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center shadow-md">
                      <FaMapMarkerAlt className="text-blue-600 text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        3rd Floor 306, Ganesh Plaza,
                        <br />
                        Ajit Mill Cross Road,
                        <br />
                        Rakhial, Ahmedabad-380024,
                        <br />
                        Gujarat, India
                      </p>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center shadow-md">
                      <FaEnvelope className="text-green-600 text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        hrwesternoilfield@gmail.com
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-gray-800 shadow-lg p-5 sm:p-6 rounded-xl border border-gray-700"
              >
                <h4 className="text-lg font-bold mb-4">Certifications</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      text: "ISO 14001",
                      bg: "bg-blue-500/20",
                      textColor: "text-blue-300",
                    },
                    {
                      text: "ISO 9001",
                      bg: "bg-green-500/20",
                      textColor: "text-green-300",
                    },
                    {
                      text: "OHSMS 45001",
                      bg: "bg-red-500/20",
                      textColor: "text-red-300",
                    },
                  ].map((cert, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`${cert.bg} ${cert.textColor} px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-white/10`}
                    >
                      {cert.text}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="+91 XXXXXXXXXX"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => handleInputChange("service", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="workover-rig">Workover Rig</option>
                  <option value="mobile-pumping">Mobile Pumping Unit</option>
                  <option value="air-compressor">Mobile Air Compressor</option>
                  <option value="steaming-unit">Mobile Steaming Unit</option>
                  <option value="hot-oil">Hot Oil Circulation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
