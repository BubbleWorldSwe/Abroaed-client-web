/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import check_circle from "../../../../assets/check_circle.png";
import PrimaryBodyText from "../../../typographies/primaryBodyText";
import SectionMainHeader from "../../../typographies/sectionMainHeader";

const DestinationAdmissionRequirementSection = ({ destinationDetails }) => {
  return (
    <Element name="admission-requirements">
      <div className="relative ">
        <section className=" dark:bg-gray-900 relative px-8 mx-auto">
          <div className="gap-8 items-center px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols lg:py-5 lg:px-6">
            <div className=" dark:text-gray-400">

              <SectionMainHeader
                className="mb-2"
              >
                Admission Requirements
              </SectionMainHeader>

              <PrimaryBodyText
                className={'font-semibold'}
                style={{ fontSize: '22px' }}
              >
                Here are the major requirements to study in the{" "}
                {destinationDetails?.countryId?.name}, which you need to ensure
                while applying to a {destinationDetails?.countryId?.name}{" "}
                university:
              </PrimaryBodyText>

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
                    <PrimaryBodyText
                      className="py-1"
                    >
                      {data.name}
                    </PrimaryBodyText>
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
