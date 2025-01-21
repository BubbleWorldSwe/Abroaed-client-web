import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

import Marquee from "react-fast-marquee";
// import MarqueeItem from 'react-marquee-line/lib/MarqueeItem';

const InfiniteMovingCards = ({
  component,
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
      const containerWidth = containerRef.current.offsetWidth;
      const scrollerWidth = scrollerRef.current.scrollWidth;
  
      // Calculate the number of times the content needs to be duplicated
      const repeatCount = Math.ceil(containerWidth / scrollerWidth) + 1;
  
      // Duplicate the scroller content enough times
      for (let i = 0; i < repeatCount; i++) {
        Array.from(scrollerRef.current.children).forEach((item) => {
          
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current.appendChild(duplicatedItem);
        });
      }
  
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
        "scroller relative z-20 max-w-screen overflow-hidden ",
        // "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
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
