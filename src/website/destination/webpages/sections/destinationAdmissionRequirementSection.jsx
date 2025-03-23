/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import check_circle from "../../../../assets/check_circle.png";
import { COLORS } from "../../../../constants/colors";

const DestinationAdmissionRequirementSection = ({ destinationDetails }) => {
  return (
    <Element name="admission-requirements">
      <div className="relative ">
        <section className=" dark:bg-gray-900 relative px-8 mx-auto">
          <div className="gap-8 items-center px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols lg:py-5 lg:px-6">
            <div className=" dark:text-gray-400">
              <h2 className={`mb-2 text-[45px]  font-extrabold text-[${COLORS.GRAY_PRIMARY}] dark:text-white`}>
                Admission Requirements
              </h2>
              <p className={`text-[${COLORS.GRAY_PRIMARY}] font-semibold text-[22px]`}>
                Here are the major requirements to study in the{" "}
                {destinationDetails?.countryId?.name}, which you need to ensure
                while applying to a {destinationDetails?.countryId?.name}{" "}
                university:{" "}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  ">
              {/* Top Row: 3 Cards */}
              {destinationDetails?.admissionRequirements?.map((data, index) => (
                <div key={index} className="flex items-center space-x-4 p-1">
                  <div className="flex space-x-8 justify-between">
                    <img
                      className=" object-contain"
                      src={check_circle}
                      alt={""}
                    />

                    <p className="  text-[#52525B] text-[20px] font-normal  dark:text-gray-400 py-1">
                      {data.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default DestinationAdmissionRequirementSection;
