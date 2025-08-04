import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import director from "../assets/director.jpeg"

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-gray-50">
      {/* Top Image */}
      <div className="w-full ">
        <img
          src="https://eco-cdn.iqpc.com/eco/images/channel_content/images/biggest_oil_and_gas_companies.jpg"
          alt="Oil Field"
          className="w-full h-auto sm:h-[450px]"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 py-10 mb-6">
            About Western Oil Field Services
          </h2>

          <p className="text-lg text-gray-700 mb-4 text-justify">
            <strong>Western Oil Field Services (WOFS)</strong> is an ISO 9001, 14001 and OHSMS
            45001 certified company with headquarters in Ahmedabad, Gujarat. We provide
            cutting-edge services in the Oil & Gas sector, tailored to industry demands and client
            expectations.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              ISO 9001
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              ISO 14001
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              OHSMS 45001
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-3">
            Who We Are
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Western Oilfield Services (WOFS) stands as a reliable partner in the Oil and Gas
            industry. Our commitment to quality isn’t a matter of chance — it’s the outcome of
            tireless dedication, consistent innovation, and operational excellence.
            <br />
            <br />
            We aim to meet and exceed the evolving needs of our clients with safe, efficient, and
            high-performance services.
          </p>

          <div className="mt-6 space-y-3">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium text-sm"
            >
              <FaPhoneAlt className="w-4 h-4" /> Contact Our Team
            </button>
            <p className="text-sm text-gray-600">
              Or reach us at:{" "}
              <span className="text-blue-600 font-medium">westernoilfield@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20 max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            18+ Years of Trusted Service
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            For the past 18 years, WOFS has been proudly serving Oil & Natural Gas Corporation Ltd.
            (ONGC)—a Government of India enterprise—at its Ahmedabad, Cambay, Mehsana and Bokaro
            Asset. In addition, we have successfully partnered with private oilfield operators such
            as GSPCL, Cairn, Essar, Selan Exploration, Presscot Services, Hermes Technologies, and
            others, delivering services to their complete satisfaction.
            <br />
            <br />
            With a dedicated workforce of over 400 skilled professionals and operations across India,
            WOFS brings a blend of experience, innovation, and manpower excellence to every project.
            Our forward-thinking approach enables us to meet the dynamic challenges of the evolving
            Oil and Gas industry with confidence and capability.
          </p>
        </div>

        {/* Director Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Director</h3>
          <div className="flex flex-col items-center">
            <img
              src={director}
              alt="Director"
              className="w-48 h-48  rounded-lg shadow-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Mr. Zamir Khan</h4>
            <p className="text-gray-600 text-sm">Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
