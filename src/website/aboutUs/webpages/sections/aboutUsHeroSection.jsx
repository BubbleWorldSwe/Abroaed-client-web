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
        <div
          className="absolute inset-0 bg-black opacity-30"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>
        <div className="absolute  top-1/3 flex flex-col items-end justify-start  mx-auto px-4 lg:flex-row ">
          <div className="text-start   text-white lg:w-2/3 px-1 lg:px-8">
            <p className="text-[32px] font-semibold opacity-90    text-white">
              Study ABROAD with ABROAED
            </p>
            <h1 className="mb-3 text-[57px]  font-extrabold  leading-none text-white md:text-[75px]">
              Your trusted compass to opportunities abroad
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsHeroSection;
