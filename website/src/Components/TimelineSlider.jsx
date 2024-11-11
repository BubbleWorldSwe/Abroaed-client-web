"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

function TimelineSlider({
  slides,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === slides.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = slides.map((slide) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = () => resolve(slide.image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((images) => {
        setLoadedImages(images);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: { scale: 0, opacity: 0, rotateX: 45 },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1.0] },
    },
    upExit: { opacity: 1, y: "-150%", transition: { duration: 1 } },
    downExit: { opacity: 1, y: "150%", transition: { duration: 1 } },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
        minHeight: "75vh", // Set minimum height to increase display area
        minWidth: "100vw", // Set minimum width for full screen
      }}
    >
      {areImagesLoaded && (
        <>
          {overlay && (
            <div
              className={cn(
                "absolute inset-0 bg-black/60 z-40",
                overlayClassName
              )}
            />
          )}
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="image h-full w-full absolute inset-0 object-cover object-center"
              style={{ minHeight: "100%", minWidth: "100%" }} // Ensure image covers the full container
            />
          </AnimatePresence>

          <div className="z-50 text-center p-6 text-white">
            <h2 className="text-3xl font-semibold mb-2">
              {slides[currentIndex].title}
            </h2>
            <p className="text-lg mb-4">{slides[currentIndex].description}</p>
            <button className="px-6 py-2 bg-yellow-500 rounded-lg font-medium">
              {slides[currentIndex].buttonText}
            </button>
          </div>

          <div className="absolute z-50 flex justify-between w-full px-4">
            <button
              onClick={handlePrevious}
              className="bg-black/40 text-white p-3 rounded-full"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-black/40 text-white p-3 rounded-full"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TimelineSlider;
