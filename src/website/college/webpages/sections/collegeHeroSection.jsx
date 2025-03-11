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
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>

        {/* Text Content */}
        <div className="absolute bottom-3    flex flex-col  justify-start  mx-auto px-12">
          <h1 className="text-[57px]  font-extrabold  text-[#F4F4F5] ">
            {collegeDetails?.name}
          </h1>
          <div className=" font-medium text-[#F4F4F5] text-sm mt-3   flex justify-between">
            <p>
              {collegeDetails?.entityType}
            </p>
            <div className="flex gap-2 whitespace-nowrap items-center ">
              <img
                src={locationIcon}
                className="w-[14px] h-[14px] object-contain"
                alt="pic-location "
              />
              <p className="">
                {collegeDetails?.stateId?.name},{" "}
                {collegeDetails?.destinationId?.countryId?.name}
              </p>
            </div>
            <div className="flex gap-2 whitespace-nowrap items-center">
              <img
                src={worldIcon}
                alt="pic-location"
                className="w-[14px] h-[14px] object-contain"
              />
              <p className="">{collegeDetails?.website}</p>
              <div></div>
            </div>
          </div>
          <br />
        </div>
      </section>
    </div>
  );
};

export default CollegeHeroSection;
