/* eslint-disable react/no-unescaped-entities */
import image from "../../../../assets/dark.png";

function AboutUsHeroSection() {
  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Text Content */}
        <div className="absolute flex flex-col gap-4 bottom-8 left-8 max-w-2xl">
          <p className="text-sm font-inter font-normal lg:text-sm text-white">
            Study abroad with ABROAED
          </p>
          <h1 className="mb-4 font-inter text-white text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
            We invest in every{" "}
            <span className=" font-inter  decoration-8 decoration-white">
              student's potential
            </span>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default AboutUsHeroSection;
