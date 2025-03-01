/* eslint-disable react/no-unescaped-entities */
import image from "../../../../assets/dark.png";

function AboutUsHeroSection() {
  return (
    <div className="font-rethink">
      <section
        className="relative h-[75vh] bg-cover bg-center "
        style={{
          backgroundImage: `url(${image})`,
          opacity: '1'
        }}
      >
        {/* Text Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>
        <div className="absolute  flex flex-col gap-4 bottom-8 left-8 max-w-2xl">
          <p className="text-sm opacity-90  font-normal lg:text-lg text-white">
            Study abroaed with ABROAED
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">
            We invest in every{" "}
            student's potential
          </h1>
        </div>
      </section>
    </div>
  );
}

export default AboutUsHeroSection;
