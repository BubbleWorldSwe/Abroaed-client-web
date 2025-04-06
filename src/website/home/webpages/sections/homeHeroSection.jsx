import { useMemo } from "react";
// import homeHeroImg from "../../../../assets/homeHeroImg.png";
import { TextGenerateEffect } from "../../components/TextGenerateEffect";
import homeVideoHero from "../../../../assets/homeVideoHero.mp4"

function HomeHeroSection() {
  const textEffect = useMemo(
    () => (
      <TextGenerateEffect
        headings={[
          "Study abroad with ABROAED",
          "Get Dream Scholarships!",
          "Explore limitless opportunities.",
        ]}
        className="mb-2 font-semibold  text-[#D4D4D8] opacity-80 font-inter text-xs"
        typingSpeed={100}
        pauseDuration={1000}
      />
    ),
    []
  );
  return (
    <div className="font-rethink">
      <section
        className="relative h-[100vh]  bg-cover flex  bg-center"
        style={{
          opacity: "1",
        }}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={homeVideoHero} type="video/mp4" />
        </video>

      <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>
        <div className="absolute bottom-24 flex flex-col items-end justify-start  mx-auto px-4 lg:flex-row ">
          <div className="text-start  text-white lg:w-2/3 px-1 lg:px-8">
            {textEffect}
            <h1 className="mb-3 text-[57px]  font-extrabold tracking-tight leading-none text-white md:text-[57px]">
              From Here to Anywhere-Dream Big, Study Global
            </h1>
          </div>
        </div>
        {/* <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black opacity-80"></div> */}
      </section>
    </div>
  );
}

export default HomeHeroSection;
