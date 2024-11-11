import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "../lib/utils";

const Input = React.forwardRef(
  ({ className, type, isFormActive, ...props }, ref) => {
    const radius = 100; // Adjust this to change the hover effect radius
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event) {
      const { left, top } = event.currentTarget.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
          radial-gradient(
            ${
              isHovered ? `${radius}px` : "0px"
            } circle at ${mouseX}px ${mouseY}px,
            var(--yellow-300),
            transparent 80%
          )
        `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input
          type={type}
          ref={ref}
          className={cn(
            `flex h-10 w-full border-none shadow-input rounded-md px-3 py-2 text-sm transition duration-500
          ${
            isFormActive
              ? "bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white"
              : "bg-gray-50/50 dark:bg-zinc-800/50 text-gray-600 dark:text-gray-400"
          }
          placeholder:text-neutral-400 dark:placeholder:text-neutral-600
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400
          dark:focus-visible:ring-neutral-600
          group-hover/input:shadow-none
          disabled:cursor-not-allowed disabled:opacity-50 mt-0`,
            className
          )}
          {...props}
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";

export { Input };
