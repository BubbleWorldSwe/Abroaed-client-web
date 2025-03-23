import { useMemo } from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import dark from "../assets/dark.png";

function HeroSection() {


  const textEffect = useMemo(
    () => (
      <TextGenerateEffect
        headings={[
          "Study ABROAED with ABROAED.",
          "Get Dream Scholarships!",
          "Explore limitless opportunities.",
        ]}
        className="mb-2 font-extrabold leading-tight tracking-tight text-white font-inter lg:text-6xl"
        typingSpeed={100}
        pauseDuration={1000}
      />
    ),
    []
  );

  return (
    <div className="font-rethink">
      <section
        className="relative h-[92vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${dark})`,
          opacity: '1'
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-30"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        {/* Gradient Overlay (White to Black) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>

        <div className="relative z-10 flex flex-col items-end justify-start min-h-screen mx-auto px-8 lg:flex-row lg:space-x-8">
          <div className="text-start lg:text-left text-white lg:w-1/2 px-4 lg:px-8">
            <p>
              {textEffect}
            </p>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">
              We invest in every
              student’s potential!
            </h1>
            <p className="font-light text-white md:text-lg xl:text-xl">
              95% of our students get an admit in less than 4 weeks
              <br />
            </p>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black opacity-80"></div>
      </section>
    </div>)

    ;
}

export default HeroSection;