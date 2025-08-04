import { servicesData } from "../data/servicesData";
import { Link } from "react-router-dom";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function Services() {

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {service.fullDescription}
              </p>
              <div className="flex justify-end">
                <Link
                  to={`/services/${service.slug}`}
                  className="flex items-center text-yellow-600 hover:underline font-medium"
                >
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
