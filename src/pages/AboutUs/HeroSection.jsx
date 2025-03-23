import image from "../../assets/dark.png";

function HeroSection() {
  return (
    <div className="font-rethink">
      <section
        className="relative h-[92vh] bg-cover bg-center "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Text Content */}
        <div className="absolute  flex flex-col gap-4 bottom-8 left-8 max-w-2xl">
          <p className="text-sm opacity-90  font-normal lg:text-lg text-white">
            Study ABROAED with ABROAED
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

export default HeroSection;
