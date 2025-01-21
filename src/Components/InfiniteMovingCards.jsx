import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

// import MarqueeItem from 'react-marquee-line/lib/MarqueeItem';

const InfiniteMovingCards = ({
  component,
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  const speedToDuration = {
    fast: "10s",
    normal: "20s",
    slow: "150s",
    superSlow: "20s"
  };

  // Function to duplicate items for infinite scroll effect
  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const scrollerWidth = scrollerRef.current.scrollWidth;

      // Only duplicate until content fills the viewport
      if (scrollerWidth < containerWidth) {
        const repeatCount = Math.ceil(containerWidth / scrollerWidth) + 1;
        for (let i = 0; i < repeatCount; i++) {
          Array.from(scrollerRef.current.children).forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            scrollerRef.current.appendChild(duplicatedItem);
          });
        }
      }

      setAnimationProperties();
      setStart(true);
    }
  }, []);

  // Set the direction and speed for the animation
  const setAnimationProperties = () => {
    if (containerRef.current) {
      const directionValue = direction === "left" ? "forwards" : "reverse";
      const durationValue = speedToDuration[speed] || "30s"; // Default to 'normal'

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
        "scroller relative z-20 max-w-screen overflow-hidden ",
        // "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={{ "--animation-duration": speedToDuration[speed] || "20s", }}
    >
      <div
        ref={scrollerRef}
        className={cn(
          // "flex min-w-full gap-4 py-4 flex-nowrap",
          "flex max-w-min  gap-4 py-2 flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"

        )}
      >
        {component}

      </div>
    </div>
  );
};

export default InfiniteMovingCards;
