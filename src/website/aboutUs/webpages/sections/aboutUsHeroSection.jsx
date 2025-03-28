import aboutUs from "../../../../assets/aboutUs.png";

function AboutUsHeroSection() {
  return (
    <div className="font-rethink">
      <section
        className="relative h-[100vh] bg-cover bg-center "
        style={{
          backgroundImage: `url(${aboutUs})`,
          opacity: '1'
        }}
      >
        {/* Text Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>
        <div className="absolute  flex flex-col gap-4 bottom-8 left-5 md:left-8 max-w-2xl  md:px-5 mx-auto">
          <p className="text-sm opacity-90  font-normal lg:text-lg text-white">
            Study ABROAD with ABROAED
          </p>
          <h1 className="mb-4 text-3xl max-w-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-5xl">
            Your trusted compass to opportunities abroad
          </h1>
        </div>
      </section>
    </div>
  );
}

export default AboutUsHeroSection;
