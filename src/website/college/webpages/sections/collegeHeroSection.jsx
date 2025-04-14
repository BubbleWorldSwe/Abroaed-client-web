/* eslint-disable react/prop-types */
import locationIcon from "../../../../assets/locationIcon.png";
import worldIcon from "../../../../assets/worldIcon.png";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";

const CollegeHeroSection = ({ img, collegeDetails }) => {
  return (
    <div className="">
      <HeroTextComponent img={img}>
        <h1 className={heroStyle.header}>
          Your trusted compass to opportunities abroad
        </h1>
        <div >
          <div className="  text-sm mt-3   grid grid-cols-1 md:flex gap-1 md:gap-5">
            <p>
              {collegeDetails?.entityType}
            </p>
            <div className="flex gap-2 whitespace-nowrap  items-center ">
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
        </div>
      </HeroTextComponent>


    </div>
  );
};

export default CollegeHeroSection;
