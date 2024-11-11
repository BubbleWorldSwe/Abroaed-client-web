"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const TextGenerateEffect = ({
  headings,
  className,
  duration = 2,
  typingSpeed = 100,
  pauseDuration = 1000,
}) => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentHeading = headings[currentHeadingIndex];
    let currentText = "";
    let charIndex = 0;

    const type = () => {
      if (charIndex < currentHeading.length) {
        currentText += currentHeading.charAt(charIndex);
        setDisplayText(currentText);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(() => {
          // Clear text after pause duration
          setDisplayText("");
          setCurrentHeadingIndex((prev) => (prev + 1) % headings.length);
        }, pauseDuration);
      }
    };

    type();
  }, [currentHeadingIndex, headings, typingSpeed, pauseDuration]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <motion.div
          className="dark:text-white text-black text-4xl leading-snug tracking-wide"
          key={currentHeadingIndex}
        >
          {displayText}
        </motion.div>
      </div>
    </div>
  );
};
