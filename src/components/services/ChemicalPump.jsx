import React from 'react'

const ChemicalPump = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-4">
          Chemical Dosing Pumps
        </h1>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          Our Chemical Dosing Pumps are precision-engineered to deliver accurate and consistent chemical injection in industrial and oilfield operations. They are ideal for processes requiring the addition of controlled chemical quantities such as corrosion inhibitors, demulsifiers, biocides, and scale preventers.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          These pumps are designed to handle a wide range of fluids, from water-like liquids to highly viscous chemicals, with excellent repeatability and reliability. Whether operating in remote locations or in-line with critical process systems, our pumps ensure uninterrupted flow and exact metering.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          Built using corrosion-resistant materials like stainless steel and PTFE, they offer high resistance to aggressive fluids and harsh environments. The system is customizable with multiple flow rates, pressure capabilities, and electrical or pneumatic actuation.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          We integrate safety features including overpressure relief valves, double diaphragm technology, and leak detection systems. Optional integration with SCADA or remote control systems allows automated monitoring and feedback for process optimization.
        </p>

        <p className="text-gray-700 leading-7 text-lg mb-4">
          Whether you need chemical injection for water treatment, process conditioning, or fluid recovery, our dosing pumps are tailored to fit your operational goals with minimal maintenance needs and long service life.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>High-precision metering for accurate dosing</li>
            <li>Available in diaphragm and plunger types</li>
            <li>Multiple flow and pressure options (0.5–500 LPH)</li>
            <li>Chemical-resistant wetted parts (PTFE, SS316)</li>
            <li>Explosion-proof and flameproof options</li>
            <li>Compact, modular designs for skid integration</li>
            <li>Electronic control with timer or flow-based triggers</li>
            <li>Optional double-head configuration for redundancy</li>
            <li>Long service life with minimal wear parts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChemicalPump;
