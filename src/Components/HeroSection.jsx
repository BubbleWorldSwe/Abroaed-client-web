import { useState, useRef, useMemo } from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import coverVideo from "../assets/video.mp4";
import dark from "../assets/dark.png";

function HeroSection() {
  const [isFormActive, setIsFormActive] = useState(false);
  const formRef = useRef(null);

  // Memoize TextGenerateEffect to prevent re-renders
  const textEffect = useMemo(
    () => (
      <TextGenerateEffect
        headings={[
          "Study Abroad with ABROAED.",
          "Get Dream Scholarships!",
          "Explore limitless opportunities.",
        ]}
        className="mb-4 font-extrabold leading-tight tracking-tight text-white font-inter lg:text-6xl"
        typingSpeed={100}
        pauseDuration={1000}
      />
    ),
    []
  );

  return (
    <div className="mb-4">
      <section style={{
        backgroundImage: `url(${dark})`,
      }} className="relative bg-gray-50 pb-8 antialiased dark:bg-gray-900 md:pb-16">
        {/* Background Video */}
        {/* <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full z-0"
          style={{ opacity: 0.9 }}
        >
          <source src={coverVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}


        {/* Gradient Overlay (White to Black) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>

        <div className="relative z-10 flex flex-col items-end justify-start min-h-screen mx-auto px-8 lg:flex-row lg:space-x-8">
          <div className="text-start lg:text-left text-white lg:w-1/2 px-4 lg:px-8">
            {textEffect}



            <h1 className="mb-4 font-inter text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
              We invest in every{" "}
              <span className=" font-inter  decoration-8 decoration-white">
                student's potential
              </span>
            </h1>

            <p className="text-lg font-inter font-normal lg:text-xl text-white">
              95% of our students get an admit in less than 4 weeks
            </p>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black opacity-80"></div>
      </section>
    </div>
  );
}

export default HeroSection;