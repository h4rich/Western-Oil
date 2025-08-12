import React, { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

// Simple className merge helper
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              key={`char-${index}`}
              className={cn(
                "opacity-0 hidden text-white",
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
          {idx < wordsArray.length - 1 && (
            <motion.span className="opacity-0 hidden text-white">
              &nbsp;
            </motion.span>
          )}
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      className={cn(
        // Responsive text sizes
        "text-base sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center w-full",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          // Responsive caret height to match text size
          "inline-block rounded-sm w-[4px] h-4 sm:h-6 md:h-8 lg:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn("text-white", word.className)}
            >
              {char}
            </span>
          ))}
          {idx < wordsArray.length - 1 && <span>&nbsp;</span>}
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          // Responsive text sizes
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          // Caret matches text size
          "block rounded-sm w-[4px] h-7 sm:h-8 md:h-10 lg:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
