/* eslint-disable react/prop-types */
// import Flag from 'react-world-flags';

import Flag from "react-world-flags";


function DestinationHeroSection({ destinationDetails, img }) {
  return (
    <div className="">
      <section
        className="relative h-[70vh] bg-cover bg-center "
        style={{
          backgroundImage: `url(${img})`,
          opacity: "1",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>

        {/* Text Content */}
        <div className="absolute bottom-6    flex flex-col  justify-start  mx-auto px-12">
          <h1 className="text-[57px] mb-1  font-extrabold  text-[#F4F4F5] ">
            <Flag width={100} code={destinationDetails?.countryId?.code} style={{ display: 'inline-block', marginRight: '15px' }} />
            Study in {destinationDetails?.countryId?.name}
          </h1>
          <p className="font-bold text-[#D4D4D8] text-[24px]">
            Experience Academic Excellence in the Land of Opportunities
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default DestinationHeroSection;
