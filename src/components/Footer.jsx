import React from "react";
import { SiLinkedin, SiX, SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4  text-blue-400" >Quick Links</h4>
            <ul className="space-y-2 flex flex-col">
              <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
              <Link to="/services" className="text-gray-400 hover:text-white">Services</Link>
              <Link to="/qhse" className="text-gray-400 hover:text-white">QHSE</Link>
              <Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4  text-blue-400">Social Networking</h4>
             <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/western-oil-services/" target="_blank" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex justify-center items-center">
                <SiLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex justify-center items-center">
                <SiX />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex justify-center items-center">
                <SiFacebook />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4  text-blue-400">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p>3rd Floor 306, Ganesh Plaza, Ajit Mill Cross Road, Rakhial, Ahmedabad-380024, Gujarat</p>
              <p>westernoilfield@gmail.com</p>
            </div>
           
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Western Oil Field Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
