import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Simple className merge helper
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div  
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 items-stretch gap-1", // items-stretch + gap
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-600/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.logo && (
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="w-15 h-15 bg-white object-contain rounded-md mb-4"
              />
            )}

            {item.date && (
              <p className="text-xs text-gray-400 mb-2">{item.date}</p>
            )}

            <CardTitle>{item.title}</CardTitle>

            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full flex flex-col p-4 overflow-hidden bg-gray-800 border border-transparent group-hover:border-slate-700 relative z-20", // h-full + flex
        className
      )}
    >
      <div className="relative z-50 flex-1 flex flex-col justify-between"> {/* flex-1 for equal height */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-1 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
