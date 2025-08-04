import React from "react";

const AirCompressors = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-4">
          Air Compressors
        </h1>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          Our Air Compressors are designed to meet the rigorous demands of the oil and gas industry. Whether it's for powering pneumatic tools, supporting drilling rigs, or maintaining pressure systems, our compressors deliver unmatched performance, reliability, and efficiency in the harshest environments.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          Built with advanced engineering, our compressors are capable of operating continuously without interruption. They are equipped with intelligent control panels that provide real-time feedback, diagnostics, and automation to enhance operational efficiency.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          With noise-reduction features and vibration-free mounting, our units also prioritize operator safety and comfort. The portable models are ideal for on-site use and can be easily relocated depending on operational needs.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          Our oil-injected screw compressors offer the best power-to-weight ratio in their class, making them the go-to choice for both mobile and fixed applications. Every unit undergoes strict quality testing to ensure compliance with international safety and performance standards.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          We also offer customized compressor setups depending on client requirements — including variable pressure capacities, multi-stage compression, and integrated aftercoolers for moisture control.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          Maintenance is hassle-free with accessible service points and auto-shutdown features in case of overheating or overload. This ensures minimal downtime and long operational life.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          Our technical support team is available 24/7 to assist with installation, servicing, and performance optimization. We also provide remote diagnostics for immediate troubleshooting and analytics.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          With our focus on sustainability, many of our compressors are energy-efficient and compliant with global emissions norms, helping you reduce your carbon footprint without compromising on performance.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          Whether you are involved in upstream exploration, midstream logistics, or downstream refining, our compressors can be integrated into your workflow with minimal modification.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>High-efficiency rotary screw technology</li>
            <li>Multiple capacity options (20 CFM – 1000+ CFM)</li>
            <li>Integrated moisture separation system</li>
            <li>Heavy-duty design for rugged environments</li>
            <li>Fuel-efficient diesel and electric options</li>
            <li>Built-in control panels with safety overrides</li>
            <li>Noise insulation and anti-vibration mounts</li>
            <li>Quick-connect air hose fittings</li>
            <li>Complies with ISO, API, and CE standards</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AirCompressors;
