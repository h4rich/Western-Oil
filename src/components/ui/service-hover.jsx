import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight} from "lucide-react"; // arrow icon

// Simple className merge helper
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const CardEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 items-stretch gap-1",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
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
            <CardTitle>{item.title}</CardTitle>

            {/* Link at bottom right */}
            <div className="mt-6 flex justify-end ">
              <Link
                to={item.link}
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full flex flex-col justify-between p-4 overflow-hidden bg-gray-800 border border-transparent group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide text-lg",
        className
      )}
    >
      {children}
    </h4>
  );
};



export const ManuCard = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 items-stretch gap-1",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
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
            <CardTitle className="p-6">{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};