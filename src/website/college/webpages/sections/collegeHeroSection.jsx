/* eslint-disable react/prop-types */
import locationIcon from "../../../../assets/locationIcon.png";
import worldIcon from "../../../../assets/worldIcon.png";
import { IMAGE_BASE_URL } from "../../../../constants/baseUrl";
import { IMAGES } from "../../../../constants/images";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";

const CollegeHeroSection = ({ img, collegeDetails }) => {
  const logoImage = collegeDetails?.images?.find((img) => img.type === "logo");
  const coverImage = collegeDetails?.images?.find(
    (img) => img.type === "cover"
  );

  return (
    <div className="">
      <HeroTextComponent
        img={
          coverImage
            ? `${IMAGE_BASE_URL}/${coverImage?.ImageUrl}`
            : IMAGES.noCollege
        }
      >
        <h1 className={heroStyle.header}>{collegeDetails?.name}</h1>
        <div>
          <div className="  text-sm mt-3   grid grid-cols-1 md:flex gap-1 md:gap-5">
            <p>{collegeDetails?.entityType}</p>
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
              <a
                href={collegeDetails?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {collegeDetails?.website}
              </a>
              <div></div>
            </div>
          </div>
        </div>
      </HeroTextComponent>
    </div>
  );
};

export default CollegeHeroSection;
