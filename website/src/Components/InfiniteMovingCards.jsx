import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  // Function to duplicate items for infinite scroll effect
  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate each item in the scroller content
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      setAnimationProperties();
      setStart(true);
    }
  }, []);

  // Set the direction and speed for the animation
  const setAnimationProperties = () => {
    if (containerRef.current) {
      const directionValue = direction === "left" ? "forwards" : "reverse";
      const durationValue =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

      containerRef.current.style.setProperty(
        "--animation-direction",
        directionValue
      );
      containerRef.current.style.setProperty(
        "--animation-duration",
        durationValue
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-screen overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-4 py-4 flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
          >
            <blockquote>
              <span className="text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="mt-6 flex items-center">
                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.name}
                </span>
                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.title}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
