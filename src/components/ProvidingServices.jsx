import React from "react";
import { Timeline } from "../components/ui/timeline";
import drilling from "../assets/serviceSection/drillingRig.png";
import overrig1 from "../assets/serviceSection/overrig1.png";
import overrig2 from "../assets/serviceSection/overrig2.png";
import overrig3 from "../assets/serviceSection/overrig3.png";
import overrig4 from "../assets/serviceSection/overrig4.png";
import overrig5 from "../assets/serviceSection/overrig5.png";
import overrig6 from "../assets/serviceSection/overrig6.png";
import overrig7 from "../assets/serviceSection/overrig7.png";
import units1 from "../assets/serviceSection/units1.png";
import units2 from "../assets/serviceSection/units2.png";
import air from "../assets/serviceSection/air.png";
import units3 from "../assets/serviceSection/units3.png";
import units4 from "../assets/serviceSection/units4.png";
import units5 from "../assets/serviceSection/units5.png";
import tankers from "../assets/serviceSection/tankers.png";
import pump1 from "../assets/serviceSection/pump1.png";
import pump2 from "../assets/serviceSection/pump2.png";
import man1 from "../assets/serviceSection/man1.png";
import man2 from "../assets/serviceSection/man2.png";
import man3 from "../assets/serviceSection/man3.png";


const ProvidingServices = () => {
  const data = [
    {
      title: "DRILLING RIG",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We have W OFS - 06 (Drilling Rig) (Model C1 – 1500HP) capable for
            Drilling up to depth of 3500 meters .
          </p>
          <div className=" gap-4">
            <img
              src={drilling}
              alt="DRILLING RIG"
              width={500}
              height={500}
              className="h-auto w-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "30 TON WORK OVER RIG",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We have 2 Nos. WOFS-03 and WOFS-04 of Mobile Work over Rigs with a
            capacity of 30 Tons. The following Job can be done0: Setting of the
            packer, Releasing of the packer, Testing of casing, Bysetting of R3
            packer, Testing of Tubing, Abandon of well by putting Cementing
            plug, Testing of the plug, Installation of SRP, Testing of SRP,
            Clearing of well bore with with Five and half-inch casing, Transfer
            of Zone by setting bridge plug. We are in contract with following
            clients like ONGC, Hermes Technology, Prescott, Oilmax, Selan
            Exploration, and RBM Infracom for extraction of CBM, oil and gas
            projects
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={overrig1}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={overrig2}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={overrig3}
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "50 TON WORK OVER RIG",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We have 1 Nos. W OFS - 05 of Mobile Work over Rigs with a capacity
            of 50 Tons, working at various projects like ONGC and many more
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={overrig4}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={overrig5}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "100 TON WORK OVER RIG",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We have 1 Nos. W OFS - 07 o f M obile Work over Rigs with a capacity
            of 100 Tons, working at various projects like ONGC and many more at
            Ahmedabad, Cambay, Mehsana, etc
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={overrig6}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={overrig7}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Hot Oil Circulation Units",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We Have a Hot Oil Circulation Unit. The unit is used for carrying
            out Hot Oil / Ho t water / hot effluent circulation job in self flow
            wells as well as in artificial lift wells, flushing of flow lines
            with hot oil / hot water / hot effluent and last not the least used
            for carrying out circulation / squeezing of hot oil (800C to 850C or
            a s per requirement) in the oil wells, for chemical stimulation jobs
            during work over operations etc.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={units1}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={units2}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Mobile Air Compressors",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We have 2 Nos. of Mobile Air Compressors which can be used on Rigs
            for well activation, oil production etc.
          </p>

          <div className="gap-4">
            <img
              src={air}
              alt="feature template"
              width={500}
              height={500}
              className="h-auto w-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Mobile Steaming Unit",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We have 2 Nos. of Mobile H igh Pressure Steaming Unit and 2 Nos. of
            Mobile Low Pressure steaming Unit which can do jobs like removing of
            wax or skin from the well, tubing cleaning, line flushing, steam
            injection in well for huff & puff job , our unit having discharge
            rate approx. 1500kg, working prerssure 100kg/cm 2 , water tank
            capacity approx. 10m 3 .
          </p>

          <div className="gap-4">
            <img
              src={units3}
              alt="feature template"
              width={500}
              height={500}
              className="h-auto w-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Mobile Pumping Units",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We have many of Mobile Pumping Units the pumps capable of pumping
            oil, brine, diesel - xylene mixture, chemicals and effluent apart
            from water. Fluid properties may be taken as Density: up to 1.5
            gm/cc , Viscosity: up to 50 cp , Temperature: up to 80° C. Each MPU
            have 2 nos. of new calibrated fluid storage tanks having volume of 3
            M³ each with provision for interconnection of both tanks.
          </p>

          <div className="gap-4">
            <img
              src={units4}
              alt="feature template"
              width={500}
              height={500}
              className="h-auto w-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Crude Oil/ Effluent Water Tankers",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We currently operate more than 15 tankers across various assets in
            Gujarat for the t ransportation of crude oil and effluent water,
            handling both loading and unloading operations.
          </p>

          <div className="gap-4">
            <img
              src={tankers}
              alt="feature template"
              width={500}
              height={500}
              className="h-auto w-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Scraping Winch Units",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We have more than 12 scrapping winch units operating at ONGC’s
            Ahmedabad and Cambay Assets, as well as for several other private
            companies in the oil and gas sector.
          </p>

          <div className="gap-4">
            <img
              src={units5}
              alt="feature template"
              width={500}
              height={500}
              className="h-auto w-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Chemical dozing Pump",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We have many of Compact Skid Mounted Packaged Portable Chemical
            Dosing system with:Compressed Air / Natural Gas Operated Chemical,
            Dosing Pump, 400 / 500 / 1000 / 3000 / 5000 Ltr CS / SS Tank with
            Level Gauge and Rockwool insulation
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={pump1}
              alt="pump"
              width={500}
              height={500}
              className="h-auto w-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={pump2}
              alt="pump"
              width={500}
              height={500}
              className="h-auto w-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "O&M Manpower Services",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We have been providing skilled manpower to various esteemed
            companies, such as ONGC Workover rigs like ROM -8 , ROM - 4, CW -
            100 -V , CW - 4, CW -9 , and Well Testing Operator at ONGC Drilling
            Rigs Hermes Technologies, and others, for more than six years.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={man1}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={man2}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
             <img
              src={man3}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};

export default ProvidingServices;
