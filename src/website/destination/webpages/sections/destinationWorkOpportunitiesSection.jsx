/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../../styleComponents/secondaryTitle";

const DestinationWorkOpportunitiesSection = ({ destinationDetails }) => {
  return (
    <Element name="work-opportunities">
      <div className="relative">
        <div className=" flex flex-col gap-6">
          {/* Content */}
          <div className="relative">
            <div className="py-1">
              <SectionMainHeader className="mb-2">
                Work Opportunities in {destinationDetails?.countryId?.name}
              </SectionMainHeader>

              <PrimaryBodyText
                className={"mb-2 md:mb-8"}
              // style={{ fontSize: '22px' }}
              >
                Studying in the {destinationDetails?.countryId?.name} offers a
                variety of experiences. The cultural and traditional values of
                the
                {destinationDetails?.countryId?.name} attract several
                international students every year. The popular areas of
                employment in {destinationDetails?.countryId?.name} are as
                follows:
              </PrimaryBodyText>
            </div>
            <div className="">
              <SecondaryTitle className="mb-2">
                Part-Time Work Opportunities
              </SecondaryTitle>
              <PrimaryBodyText
              // className={'font-semibold'}
              // style={{ fontSize: '22px' }}
              >
                {destinationDetails?.workOpportunities?.partTimeStudents}
              </PrimaryBodyText>
            </div>
            <div className="py-4">
              <SecondaryTitle className="mb-2">
                Post Study Work Opportunities
              </SecondaryTitle>

              <PrimaryBodyText
                className={"mb-5"}
              // style={{ fontSize: '22px' }}
              >
                {destinationDetails?.workOpportunities?.postDegreeOpportunity}
              </PrimaryBodyText>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
              {destinationDetails?.workOpportunities?.professions?.map(
                (data, index) => (
                  <div
                    key={index}
                    className="w-full hover:scale-[1.01] transition-all ease-in-out delay-100 h-[8rem] md:h-[12rem] bg-gray-primary flex-shrink-0 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div className="p-5 h-full flex flex-col items-center justify-center">
                      <h5
                        className={`mb-2 text-[24px] md:text-[28px] font-bold  text-[#e8e8eb]  dark:text-white`}
                      >
                        {data?.professionName}
                      </h5>
                      <p className=" font-semibold text-[#ede5e5] text-[18px] md:text-[22px] ">
                        ₹ {data?.salary}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
            {destinationDetails?.workOpportunities?.additionalInformation && (
              <PrimaryBodyText
                className={"mt-4 md:my-10"}
              // style={{ fontSize: '1px' }}
              >
                {" "}
                {destinationDetails?.workOpportunities?.additionalInformation}
              </PrimaryBodyText>
            )}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default DestinationWorkOpportunitiesSection;
