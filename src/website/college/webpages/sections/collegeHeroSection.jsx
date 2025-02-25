/* eslint-disable react/prop-types */
import locationIcon from "../../../../assets/locationIcon.png";
import worldIcon from "../../../../assets/worldIcon.png";

const CollegeHeroSection = ({ img, collegeDetails }) => {
  return (
    <div className="font-rethink">
      <section
        className="relative h-[75vh] bg-cover bg-center "
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
        <div className="absolute bottom-0 left-12  p-6 rounded-lg shadow-lg max-w-3xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">
            {collegeDetails?.name}
          </h1>

          <div className="font-light text-white md:text-lg xl:text-xl">
            <div className="text-white px-2 mt-8 opacity-70 text-xl flex justify-between">
              <p>{collegeDetails?.entityType}</p>
              <div className="flex gap-2 whitespace-nowrap mx-5">
                <img
                  src={locationIcon}
                  className="w-[22px] h-[22px] object-contain"
                  alt="pic-location "
                />
                <p className="text-white">
                  {collegeDetails?.stateId?.name},{" "}
                  {collegeDetails?.destinationId?.countryId?.name}
                </p>
              </div>
              <div className="flex gap-2 whitespace-nowrap">
                <img
                  src={worldIcon}
                  alt="pic-location"
                  className="w-[25px] h-[25px] object-contain"
                />
                <p className="text-white">{collegeDetails?.website}</p>
                <div></div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeHeroSection;
