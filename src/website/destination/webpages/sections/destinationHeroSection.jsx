/* eslint-disable react/prop-types */


function DestinationHeroSection({ destinationDetails, img }) {
  return (
    <div className="font-rethink">
      <section
        className="relative h-[70vh] bg-cover bg-center "
        style={{
          backgroundImage: `url(${img})`,
          opacity: "1",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-30"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        {/* Text Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>

        <div className="absolute bottom-6    flex flex-col items-end justify-start  mx-auto px-12">
          <h1 className="mb-4  text-4xl font-extrabold  text-white md:text-5xl xl:text-6xl">
            {destinationDetails?.countryId?.emoji} Study in{" "}
            {destinationDetails?.countryId?.name}
          </h1>

          <p className="font-light text-white md:text-lg xl:text-xl">
            Experience Academic Excellence in the Land of Opportunitie            <br />
            you can study
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default DestinationHeroSection;
